// Matxos 2024 - Cursa

let raceNumber = Math.floor(Math.random() * 1000);

let registeredTime = true;

let runnersAge = 19;

if (runnersAge > 18 && registeredTime == true) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredTime == true) {
  console.log(`${raceNumber} Your race will start at 09:30 AM`);
} else if (runnersAge > 18 && registeredTime == false) {
  console.log(`${raceNumber} Your Race will start at 11:00 AM`);
} else if (runnersAge != 18) {
  console.log('Run at 12:00');
} else {
  console.log('Report to registration desk');
}
