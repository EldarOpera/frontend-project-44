import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameResult = () => {
    const randomNum1 = generateRandomNumber(100);
    const randomNum2 = generateRandomNumber(100);

    const gcdFinding = (num1, num2) => {
      const divisors1 = [];
      const divisors2 = [];
      const terminal = Math.max(num1, num2);
      for (let i = 1; i <= terminal; i += 1) {
        if (num1 % i === 0) {
          divisors1.push(i);
        }
        if (num2 % i === 0) {
          divisors2.push(i);
        }
      }

      let result = 0;
      for (let i = 1; i <= terminal; i += 1) {
        if (divisors1.includes(i) && divisors2.includes(i)) {
          result = result < i ? i : null;
        }
      }

      return result;
    };
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = `${gcdFinding(randomNum1, randomNum2)}`;

    return [question, correctAnswer];
  };

  gameEngine(rules, gameResult);
};

export default gcdGame;
