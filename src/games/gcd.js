import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const startRound = () => {
    const randomNumbers = [generateRandomNumber(100), generateRandomNumber(100)];
    const terminal = Math.max(randomNumbers[0], randomNumbers[1]);
    const divisors = [[], []];

    const question = `${randomNumbers[0]} ${randomNumbers[1]}`;
    let correctAnswer = 0;

    for (let divisor = 1; divisor <= terminal; divisor += 1) {
      if (randomNumbers[0] % divisor === 0) {
        divisors[0].push(divisor);
      }
      if (randomNumbers[1] % divisor === 0) {
        divisors[1].push(divisor);
      }
      if (divisors[0].includes(divisor) && divisors[1].includes(divisor)) {
        if (correctAnswer < divisor) { correctAnswer = divisor; }
      }
    }

    return [question, `${correctAnswer}`];
  };

  gameEngine(rules, startRound);
};

export default playGcd;
