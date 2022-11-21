import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startIsPrimeRound = () => {
    const randomNumber = generateRandomNumber(101);

    const checkPrimary = (num = randomNumber) => {
      if (num < 2) {
        return false;
      }

      for (let divisor = 2; divisor <= num / 2; divisor += 1) {
        if (num % divisor === 0) {
          return false;
        }
      }

      return true;
    };

    const result = checkPrimary();
    const question = `${randomNumber}`;
    const correctAnswer = result === true ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(rules, startIsPrimeRound);
};

export default playIsPrime;
