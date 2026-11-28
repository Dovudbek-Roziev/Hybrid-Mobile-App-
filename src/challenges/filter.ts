import { challenges, type Difficulty } from './catalog';
import { challengeTopics, type ChallengeTopic } from './topics';

function normalize(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[‘’ʻʼ`]/g, "'")
    .replace(/\s+/g, ' ');
}

const searchable = challenges.map((challenge) => {
  const { en, uz } = challengeTopics[challenge.topic];
  return {
    challenge,
    text: normalize([challenge.title, challenge.task, en, uz].join(' ')),
  };
});

export function filterChallenges(
  query: string,
  difficulty: Difficulty | 'all',
  topic: ChallengeTopic | 'all',
) {
  const search = normalize(query);
  return searchable
    .filter(
      ({ challenge, text }) =>
        (difficulty === 'all' || challenge.difficulty === difficulty) &&
        (topic === 'all' || challenge.topic === topic) &&
        text.includes(search),
    )
    .map(({ challenge }) => challenge);
}
