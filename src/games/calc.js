import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return `Unknown operator: ${operator}`;
  }
};

const playCalc = () => {
  const startRound = () => {
    const randomNum1 = generateRandomNumber(1, 36);
    const randomNum2 = generateRandomNumber(1, 36);
    const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];

    const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    const correctAnswer = String(calculate(randomOperator, randomNum1, randomNum2));

    return [question, correctAnswer];
  };

  startGame(description, startRound);
};

export default playCalc;
