// Global Scope
const x = 10;

function prova() {
  // Function scope
  const y = 20;
  console.log(x); // 10
  console.log(y); // 20
}

prova();
console.log(x); // 10
console.log(y); // y is not defined

// Block scope -->  let
if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined

// Block scope with const
if (true) {
  const y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError: y is not defined

// Lexical Scope
function outer() {
  const x = 10;
  function inner() {
    const y = 20;
    console.log(x); // 10
    console.log(y); // 20
  }
  inner(); // Aquesta funció pot accedir a l'scope d'una funció externa (en aquest cas la variable 'x')
}
outer();

// Global
const fruites = ["poma", "pera", "maduixa"];
function fruiteria() {
  // Scope1
  function triaFruita() {
    //Scope 2
    for (let fruita of fruites) {
      console.log(`Trobaràs ${fruita} a la nostra tenda`);
    }
  }
  triaFruita();
}
fruiteria();

// // *GLOBAL*
// var dog = 'Lewis';
// function outerFunc(){
//   // *SCOPE 1*
//   var cat = 'Jerry';
//   function innerFunc(){
//     // *SCOPE 2*
//     console.log(cat); // Jerry
//     console.log(dog); // Lewis
//   }
// }
