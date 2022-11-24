import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 101);

    const isPrime = (num) => {
      let result;
      for (let divisor = 2; divisor <= num / 2; divisor += 1) {
        if (num < 2) {
          return 'no';
        }
        if (num % divisor === 0) {
          return 'no';
        }
        result = 'yes';
      }
      return result;
    };

    const question = String(randomNumber);
    const correctAnswer = isPrime(randomNumber);

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playIsPrime;
