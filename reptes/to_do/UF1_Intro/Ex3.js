const userName = 'Pablo';
let userQuestion = 'Tengo una pregunta';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

console.log(userQuestion);
console.log(randomNumber);

switch (randomNumber) {
  case 0:
    console.log('It is certain 1');
    break;
  case 1:
    console.log('It is certain 2');
    break;
  case 2:
    console.log('It is certain 3');
    break;
  case 3:
    console.log('It is certain 4');
    break;
  case 4:
    console.log('It is certain 5');
    break;
  case 5:
    console.log('It is certain 6');
    break;
  case 6:
    console.log('It is certain 7');
    break;
  case 7:
    console.log('It is certain 8');
    break;
  default:
}
