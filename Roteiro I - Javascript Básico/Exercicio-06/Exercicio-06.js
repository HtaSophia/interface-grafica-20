const sortNumbers = () => {
    try {
        let numbers = document.getElementById("inputTxt").value;
        numbers = numbers.split(',').filter(number => (number.trim() !== '')).map(numb => Number(numb));

        if (numbers.length === 0 || numbers.some(number => !Number.isInteger(number))) {
            alert("Preencha o campo com números inteiros");
            return false;
        }
        
        numbers.sort((element, next) => {
            return element - next;
        });

        let result = document.getElementById("result");
        result.innerHTML = ("A ordem dos números é: " + numbers);
    } catch (error) {
        alert(error);
    }
}