import readlineSync from 'readline-sync';

const gameEngine = (gameRules, gameResult) => {
  // Приветствие и знакомство с игроком
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // Вывод на экран правил игры или задания
  console.log(gameRules);
  let isCorrect = true;

  // Работа с телом игры
  for (let i = 0; i < 3; i += 1) {
    // Запись результата запуска игры (['вопрос', 'правильный ответ'])
    const recievedResult = gameResult();

    const makeQuestion = recievedResult[0];
    const correctAnswer = recievedResult[1];

    console.log(`Question: ${makeQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      isCorrect = false;
      break;
    } else {
      console.log('Correct!');
    }
  }

  const result = isCorrect === true ? console.log(`Congratulations, ${playerName}!`) : console.log(`Let's try again, ${playerName}!`);
  return result;
};

export default gameEngine;
