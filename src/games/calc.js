import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playCalc = () => {
  const rules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  const startRound = () => {
    const randomNum1 = generateRandomNumber(1, 36);
    const randomNum2 = generateRandomNumber(1, 36);
    const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];

    const calculate = (operator, num1, num2) => {
      switch (operator) {
        case '+':
          return String(num1 + num2);
        case '-':
          return String(num1 - num2);
        case '*':
          return String(num1 * num2);
        default:
          return null;
      }
    };

    const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
    const correctAnswer = calculate(randomOperator, randomNum1, randomNum2);

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playCalc;
