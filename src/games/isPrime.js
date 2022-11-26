import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num < 2) {
      return false;
    }
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const playIsPrime = () => {
  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 101);

    const question = String(randomNumber);
    const correctAnswer = isPrime(randomNumber) === true ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playIsPrime;
