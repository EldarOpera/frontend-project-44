import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';
import getTrueOrFalseAnswer from '../getTrueOrFalseAnswer.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const playIsPrime = () => {
  const startRound = () => {
    const randomNumber = generateRandomNumber(1, 102);
    const correctAnswer = getTrueOrFalseAnswer(isPrime, randomNumber);

    return [String(randomNumber), correctAnswer];
  };

  startGame(description, startRound);
};

export default playIsPrime;
