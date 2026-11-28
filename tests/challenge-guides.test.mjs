import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import { challenges } from '../src/challenges/catalog.ts';
import { challengeGuides } from '../src/challenges/guides.ts';

const reference = (id) =>
  challenges.find((challenge) => challenge.id === `challenge-${id}`).solution;
const guide = (id) => challengeGuides[`challenge-${id}`];

function runReference(id, expression) {
  // Only trusted repository examples are executed in this test, never drafts from the app.
  return runInNewContext(
    reference(id) + '\n' + expression,
    { URLSearchParams },
    {
      timeout: 250,
      contextCodeGeneration: { strings: false, wasm: false },
    },
  );
}

test('every challenge has its own nonempty input, expected output and explanation', () => {
  assert.deepEqual(
    Object.keys(challengeGuides).sort(),
    challenges.map((challenge) => challenge.id).sort(),
  );
  for (const { id } of challenges) {
    const { input, output, explanation } = challengeGuides[id];
    assert.ok(input.trim() && output.trim() && explanation.trim(), id);
  }
  assert.equal(
    new Set(
      Object.values(challengeGuides).map(({ explanation }) => explanation),
    ).size,
    100,
  );
});

test('displayed JavaScript examples match their reference outputs', () => {
  const simple = Array.from({ length: 42 }, (_, index) => index + 1).filter(
    (id) => ![11, 34, 39].includes(id),
  );
  for (const id of [...simple, 73, 75, 76, 77, 80, 81, 82, 86, 92, 99, 100]) {
    assert.equal(
      JSON.stringify(runReference(id, guide(id).input)),
      JSON.stringify(JSON.parse(guide(id).output)),
      `challenge-${id}`,
    );
  }
  assert.equal(runReference(77, 'has(4, 0x80000000)'), false);
  assert.equal(
    runReference(11, `JSON.stringify([...(${guide(11).input})])`),
    '[["b",1],["a",3],["n",2]]',
  );
  assert.equal(
    runReference(34, `JSON.stringify([...(${guide(34).input})])`),
    '[["a",[{"team":"a","id":1},{"team":"a","id":3}]],["b",[{"team":"b","id":2}]]]',
  );
  assert.equal(
    runReference(
      39,
      'let calls = 0; const square = solve(n => { calls++; return n*n; }); JSON.stringify([square(5), square(5), calls])',
    ),
    '[25,25,1]',
  );
});

test('SQL reference outputs agree with fixture tables', () => {
  const db = new DatabaseSync(':memory:');
  try {
    db.exec(`CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);
      INSERT INTO users VALUES (1, 'Ali'), (2, 'Malika');
      CREATE TABLE orders (id INTEGER PRIMARY KEY, total INTEGER);
      INSERT INTO orders VALUES (1, 100), (2, 140), (3, 80);
      CREATE TABLE accounts (id INTEGER PRIMARY KEY, balance INTEGER);
      INSERT INTO accounts VALUES (1, 50), (2, 20);`);
    const query = (id, ...args) =>
      db
        .prepare(reference(id))
        .all(...args)
        .map(Object.values);
    assert.deepEqual(query(56).sort(), [['Ali'], ['Malika']]);
    assert.deepEqual(query(57), [[2, 140]]);
    db.exec(
      'ALTER TABLE orders ADD COLUMN customer_id INTEGER; UPDATE orders SET customer_id = CASE id WHEN 3 THEN 9 ELSE 7 END',
    );
    assert.deepEqual(query(58).sort(), [
      [7, 2],
      [9, 1],
    ]);
    db.exec(
      'ALTER TABLE orders ADD COLUMN user_id INTEGER; DELETE FROM orders; INSERT INTO orders (user_id, total) VALUES (1, 80), (1, 120)',
    );
    assert.deepEqual(
      query(59).sort((a, b) => a[1] - b[1]),
      [
        ['Ali', 80],
        ['Ali', 120],
      ],
    );
    assert.deepEqual(query(60, 2), [[2, 'Malika']]);
    assert.deepEqual(
      query(95).sort((a, b) => a[0] - b[0]),
      [
        [1, 2],
        [2, 0],
      ],
    );
    db.exec(
      'DELETE FROM orders; INSERT INTO orders (customer_id, total) VALUES (7, 200), (7, 200), (7, 150), (8, 90)',
    );
    assert.deepEqual(
      query(61).sort((a, b) => a[0] - b[0] || a[2] - b[2]),
      [
        [7, 200, 1],
        [7, 200, 1],
        [7, 150, 2],
        [8, 90, 1],
      ],
    );
    db.exec(reference(96));
    assert.equal(
      db.prepare("SELECT name FROM pragma_index_list('orders')").get().name,
      'idx_orders_customer',
    );
    db.exec(reference(97));
    assert.deepEqual(
      db
        .prepare('SELECT balance FROM accounts ORDER BY id')
        .all()
        .map((row) => row.balance),
      [40, 30],
    );
  } finally {
    db.close();
  }
});
