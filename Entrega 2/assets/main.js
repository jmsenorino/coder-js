let number1;
let operation;
let number2;

const askForValues = () => {
  number1 = parseFloat(prompt("Ingrese el primer numero"));
  operation = prompt(
  "Ingrese la operacion que desea realizar (+, -, /, *, %)"
  );
  number2 = parseFloat(prompt("Ingrese el segundo numero"));
}

const result = () => {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "/":
      return number1 / number2;
    case "%":
      return number1 % number2;
    case "*":
      return number1 * number2;
    default:
      return "Algo sucedio mal, reingresar los datos!";
  }
};

askForValues();
alert(result());

let button = document.getElementById('redo');
button.onclick = () => {
  askForValues();
  alert(result());
}