import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startRound = () => {
    const randomNumber = generateRandomNumber(101);
    let result;

    for (let divisor = 2; divisor <= randomNumber / 2; divisor += 1) {
      if (randomNumber < 2) {
        result = false;
        break;
      }
      if (randomNumber % divisor === 0) {
        result = false;
        break;
      }
      result = true;
    }

    const question = `${randomNumber}`;
    const correctAnswer = result === true ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playIsPrime;
