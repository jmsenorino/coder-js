let inputNumber;
alert("Get all even numbers from 0 up the indicated value in the console");

inputNumber = parseFloat(prompt("Insert the value"));

for (let i = 0; i <= inputNumber; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
