document.addEventListener('DOMContentLoaded', function () {

    const dataSet = document.documentElement.dataset;
    dataSet.theme = "light"
    var calculatorInput;
    const calculatorResult = document.querySelector('.resultado');

    document.querySelector('.input-calculator').onchange = function () {

        calculatorInput = this.value
    }
    document.querySelector('#toggle-dark').onclick = function () {

        const inDarkMode = (dataSet.theme === 'dark');
        dataSet.theme = inDarkMode ? "light" : "dark";
    }

    document.querySelector(".calculator-show-bt").onclick = function () {
        if (calculatorInput === undefined) {

            calculatorResult.innerHTML = "Insira uma expressão";

        } else {
            const result = eval(calculatorInput);
            calculatorResult.innerHTML = `${result}`;
        }
    }

    document.querySelector('.calculator-delete-bt').onclick = function () {

        result = "";
        calculatorResult.innerHTML = `${result}`;
    }
});
