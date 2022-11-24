import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playCalc = () => {
  const rules = 'What is the result of the expression?';

  const startRound = () => {
    const randomNum1 = generateRandomNumber(1, 36);
    const randomNum2 = generateRandomNumber(1, 36);

    const operators = ['+', '-', '*'];
    const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];

    const question = `${randomNum1} ${randomOperator} ${randomNum2}`;

    let correctAnswer;
    switch (randomOperator) {
      case '+':
        correctAnswer = `${randomNum1 + randomNum2}`;
        break;
      case '-':
        correctAnswer = `${randomNum1 - randomNum2}`;
        break;
      case '*':
        correctAnswer = `${randomNum1 * randomNum2}`;
        break;
      default:
        correctAnswer = null;
    }

    return [question, correctAnswer];
  };

  gameEngine(rules, startRound);
};

export default playCalc;
