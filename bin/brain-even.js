#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 15);

const greeting = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return playerName;
};

const isEvenRound = () => {
  let isCorrect = true;
  console.log('Welcome to the Brain Games!');
  const playerName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      isCorrect = false;
      break;
    }
    console.log('Correct!');
  }

  const result = isCorrect === true ? console.log(`Congratulations, ${playerName}!`) : console.log(`Let's try again, ${playerName}!`);
  return result;
};

isEvenRound();
