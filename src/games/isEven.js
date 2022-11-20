import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const isEvenGame = () => {
  const isEvenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEvenGameResult = () => {
    const randomNumber = generateRandomNumber(15);

    const question = `${randomNumber}`;

    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(isEvenGameRules, isEvenGameResult);
};

export default isEvenGame;
