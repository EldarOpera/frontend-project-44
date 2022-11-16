import readlineSync from 'readline-sync';

const greeting = () => {
  let playerName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + playerName + '!');
};

export default greeting;
