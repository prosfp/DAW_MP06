// Anys canins

const myAge = 5;
let earlyYears = 2;
let laterYears = myAge - 2;
earlyYears *= 10.5;
laterYears *= 4;
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears + laterYears;
const myName = 'Pablo'.toLowerCase();

console.log(
  'My name is ' +
    myName +
    '. I am ' +
    myAge +
    ' years old in human years which is ' +
    myAgeInDogYears +
    ' years old in dog years'
);
