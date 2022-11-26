import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const playIsEven = () => {
  const startRound = () => {
    const randomNum = generateRandomNumber(1, 21);

    const question = String(randomNum);
    const correctAnswer = isEven(randomNum) === true ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playIsEven;
