import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startRound = () => {
    const checkNum = generateRandomNumber(101);
    let isPrime;

    for (let divisor = 2; divisor <= checkNum / 2; divisor += 1) {
      if (checkNum < 2) {
        isPrime = false;
        break;
      }
      if (checkNum % divisor === 0) {
        isPrime = false;
        break;
      }
      isPrime = true;
    }

    const question = `${checkNum}`;
    const correctAnswer = isPrime === true ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playIsPrime;
