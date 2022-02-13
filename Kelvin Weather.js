// The temp of the day in Kelvin
const kelvin = 293;
// The temp of the day in celsius
const celsius = kelvin - 273;
// farenheit calculation
let farenheit = celsius*(9/5) + 32;
farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);