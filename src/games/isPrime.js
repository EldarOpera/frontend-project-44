import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startRound = () => {
    const number = generateRandomNumber(1, 101);
    const question = `${number}`;
    let correctAnswer = 'yes';

    for (let divisor = 2; divisor <= number / 2; divisor += 1) {
      if (number < 2) {
        correctAnswer = 'no';
        break;
      }
      if (number % divisor === 0) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
    }

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playIsPrime;
