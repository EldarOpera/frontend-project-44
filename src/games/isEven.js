import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const isEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameResult = () => {
    const randomNumber = generateRandomNumber(15);

    const question = `${randomNumber}`;
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  gameEngine(rules, gameResult);
};

export default isEvenGame;
