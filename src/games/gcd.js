import startGame from '../index.js';
import generateRandomNumber from '../genRandomNum.js';

const playGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const startRound = () => {
    const randomNumbers = [generateRandomNumber(1, 101), generateRandomNumber(1, 101)];
    const terminal = Math.max(randomNumbers[0], randomNumbers[1]);

    const findGcd = (numbers, iterations) => {
      const divisors = [[], []];
      let result = 0;
      for (let divisor = 1; divisor <= iterations; divisor += 1) {
        if (numbers[0] % divisor === 0) {
          divisors[0].push(divisor);
        }
        if (numbers[1] % divisor === 0) {
          divisors[1].push(divisor);
        }
        if (divisors[0].includes(divisor) && divisors[1].includes(divisor)) {
          if (result < divisor) { result = divisor; }
        }
      }
      return String(result);
    };

    const question = `${randomNumbers[0]} ${randomNumbers[1]}`;
    const correctAnswer = findGcd(randomNumbers, terminal);

    return [question, correctAnswer];
  };

  startGame(rules, startRound);
};

export default playGcd;
