import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playIsEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 21);

    const isEven = (num) => {
      let result;
      if (num % 2 === 0) {
        result = 'yes';
      } else {
        result = 'no';
      }
      return result;
    };

    const question = String(randomNumber);
    const correctAnswer = isEven(randomNumber);

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playIsEven;
