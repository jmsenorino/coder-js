let number1 = parseFloat(prompt("Ingrese el primer numero"));
let operation = prompt(
  "Ingrese la operacion que desea realizar (+, -, /, *, %)"
);
let number2 = parseFloat(prompt("Ingrese el segundo numero"));

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

alert(result());
