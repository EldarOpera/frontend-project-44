import gameEngine from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playCalc = () => {
  const rules = 'What is the result of the expression?';

  const startRound = () => {
    const randomNum1 = generateRandomNumber(35);
    const randomNum2 = generateRandomNumber(35);

    const operators = ['+', '-', '*'];
    const randomOperator = operators[generateRandomNumber(2)];

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
