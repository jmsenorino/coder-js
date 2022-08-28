import Calculadora from "./calculadora.js"

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculadora(previousOperandTextElement, currentOperandTextElement)

let newsArray = [];
const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=ar&' +
    'apiKey=fd28953dc12845c7937ca780bef8d877';
const req = new Request(url);
fetch(req)
    .then((response) => {
        response.json().then((j) => {
            newsArray = j.articles;
        });
    })

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
    const i = randomIntFromInterval(0, newsArray.length)
    Toastify({
        text: newsArray[i].title,
        duration: 3000,
        destination: newsArray[i].url,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #2d3a41, #411d42)",
        },
        onClick: () => { window.open(newsArray[0].url) } // Callback after click
    }).showToast();
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})