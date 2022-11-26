import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (n1, n2) => {
  let num1 = n1;
  let num2 = n2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num1;
};

const playGcd = () => {
  const startRound = () => {
    const randomNumber1 = generateRandomNumber(1, 101);
    const randomNumber2 = generateRandomNumber(1, 101);

    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(findGcd(randomNumber1, randomNumber2));

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playGcd;
