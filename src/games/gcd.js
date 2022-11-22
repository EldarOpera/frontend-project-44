import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const startRound = () => {
    const randomNumbers = [generateRandomNumber(100), generateRandomNumber(100)];
    const terminal = Math.max(randomNumbers[0], randomNumbers[1]);
    const divisors = [[], []];
    let result = 0;

    for (let i = 1; i <= terminal; i += 1) {
      if (randomNumbers[0] % i === 0) {
        divisors[0].push(i);
      }
      if (randomNumbers[1] % i === 0) {
        divisors[1].push(i);
      }
      if (divisors[0].includes(i) && divisors[1].includes(i)) {
        if (result < i) { result = i; }
      }
    }

    const question = `${randomNumbers[0]} ${randomNumbers[1]}`;
    const correctAnswer = `${result}`;

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playGcd;
