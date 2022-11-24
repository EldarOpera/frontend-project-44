import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 101);

    const isPrime = (num) => {
      let result = 'yes';

      for (let divisor = 2; divisor <= num / 2; divisor += 1) {
        if (num < 2) {
          result = 'no';
          return result;
        }
        if (num % divisor === 0) {
          result = 'no';
          return result;
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
