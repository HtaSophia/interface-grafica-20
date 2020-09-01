const calculateNumbers = () => {
    try {
        let numbers = document.getElementById("inputNumbers").value;
        numbers = numbers.split(',').filter(number => (number.trim() !== '')).map(numb => Number(numb));

        if (numbers.length === 0 || numbers.some(number => !Number.isInteger(number))) {
            alert("Preencha o campo com números inteiros");
            return false;
        }

        const average = arithmeticAverage(numbers);
        const values = getValues(numbers);

        let result = document.getElementById("result");
        result.innerHTML = `
            A média aritmética dos valores é: ${average} <br/>
            A quantia de valores positivos é: ${values.positives} e sua porcentagem é: ${values.positPercentage} <br/>
            A quantia de valores negativos é: ${values.negatives} e sua porcentagem é: ${values.negatPercentage} <br/>
        `;
    } catch (error) {
        alert(error);
    }
}

const arithmeticAverage = (numbers) => {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    return (sum / numbers.length);
};

const getValues = (numbers) => {
    const positives = numbers.filter(number => number >= 0);
    const negatives = numbers.filter(number => number < 0);
    const positPercentage = ((positives.length / numbers.length) * 100).toFixed(2);
    const negatPercentage = ((negatives.length / numbers.length) * 100).toFixed(2);

    return {
        positives: positives.length,
        negatives: negatives.length,
        positPercentage,
        negatPercentage
    }
}