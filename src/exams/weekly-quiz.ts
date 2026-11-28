export const weeklyQuiz=[
{id:'q1',question:'Which declaration can be reassigned?',options:['const','let','function'],answer:1,explanation:'let allows reassignment; const does not.'},
{id:'q2',question:'What is the type of 42?',options:['string','boolean','number'],answer:2,explanation:'42 is a JavaScript number.'},
{id:'q3',question:'What does return do?',options:['Stops the app','Returns a value from a function','Creates a variable'],answer:1,explanation:'return sends a value back to the caller.'},
{id:'q4',question:'What does === check?',options:['Strict equality','Assignment','Exponentiation'],answer:0,explanation:'=== compares value and type without coercion.'},
{id:'q5',question:'Which array method creates a new transformed array?',options:['push','map','pop'],answer:1,explanation:'map returns a new array with transformed elements.'},
] as const;
