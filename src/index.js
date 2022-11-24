import readlineSync from 'readline-sync';

const startGame = (gameNote, recieveResult) => {
  // Приветствие и знакомство с игроком
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  // Вывод на экран правил игры или задания
  console.log(gameNote);

  // Работа с телом игры
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    // Запись результата запуска игры (['вопрос', 'правильный ответ'])
    const [question, correctAnswer] = recieveResult();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  return;
};

export default startGame;
