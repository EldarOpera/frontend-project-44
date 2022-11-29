import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const playIsEven = () => {
  const startRound = () => {
    const randomNum = generateRandomNumber(1, 21);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    return [String(randomNum), correctAnswer];
  };

  startGame(description, startRound);
};

export default playIsEven;
