let raceNumber = Math.floor(Math.random() * 1000);
const RunnerRegister = true;
const age = 20;

if (RunnerRegister === true && age > 18) {
  raceNumber += 1000
} if (RunnerRegister === true && age > 18) {
    console.log(`Runner ${raceNumber} you will race at 9:30 am`) } else if (RunnerRegister === false && age > 18) {
      console.log(`Runner ${raceNumber} you will race at 11:00 am`)
    } else if (age < 18) {
      console.log(`Runner ${raceNumber} you will race at 12:30 am`)
    } else {
      console.log('See the registration desk')
    }