const getNumbersAndFactorialize = () => {
    try {
        let numbers = document.getElementById("inputNumbers").value;
        numbers = numbers.split(',').filter(number => (number.trim() !== '')).map(numb => Number(numb));

        if (numbers.length === 0 || numbers.some(number => !Number.isInteger(number))) {
            alert("Preencha o campo com números inteiros");
            return false;
        }

        numbers.forEach(number => {
            let result = numberFactorial(number);
            document.write("O fatorial de " + number + " é: " + result + "<br>");
        });
    } catch (error) {
        alert(error);
    }
}


const numberFactorial = (number) => {
    // If the number is equal to 0, then its factorial is 1.
    return (number === 0) ? 1 : (number * numberFactorial(number - 1));
};