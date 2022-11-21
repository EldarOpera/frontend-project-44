import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const startGcdRound = () => {
    const randomNum1 = generateRandomNumber(100);
    const randomNum2 = generateRandomNumber(100);
    const divisors1 = [];
    const divisors2 = [];
    let result = 0;
    const terminal = Math.max(randomNum1, randomNum2);

    for (let i = 1; i <= terminal; i += 1) {
      if (randomNum1 % i === 0) {
        divisors1.push(i);
      } else if (randomNum2 % i === 0) {
        divisors2.push(i);
      }
      if (divisors1.includes(i) && divisors2.includes(i)) {
        result = result < i ? i : null;
      }
    }

    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = `${result}`;

    return [question, correctAnswer];
  };

  gameEngine(rules, startGcdRound);
};

export default playGcd;
