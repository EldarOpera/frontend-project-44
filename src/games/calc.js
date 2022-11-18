import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const calcGame = () => {
  const calcGameRules = 'What is the result of the expression?';

  const calcGameResult = () => {
    const randomNum1 = generateRandomNumber(35);
    const randomNum2 = generateRandomNumber(35);

    const operators = ['+', '-', '*'];
    const randomOperator = operators[generateRandomNumber(2)];

    const question = `${randomNum1} ${randomOperator} ${randomNum2}`;

    let result;
    switch (randomOperator) {
      case '+':
        result = `${randomNum1 + randomNum2}`;
        break;
      case '-':
        result = `${randomNum1 - randomNum2}`;
        break;
      case '*':
        result = `${randomNum1 * randomNum2}`;
        break;
      default:
        result = null;
    }

    return [question, result];
  };

  gameEngine(calcGameRules, calcGameResult);
};

export default calcGame;
