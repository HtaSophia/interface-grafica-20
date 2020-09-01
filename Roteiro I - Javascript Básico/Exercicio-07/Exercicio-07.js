const sumNumbers = () => {
	try {
		let numbers = document.getElementById("inputTxt").value;
		numbers = numbers.split(',').filter(number => (number.trim() !== '')).map(numb => Number(numb));

		if (numbers.length === 0 || numbers.some(number => !Number.isInteger(number))) {
			alert("Preencha o campo com números inteiros");
			return false;
		}

		let total = 0;
		numbers.forEach((number) => {
			//Integer, odd and multiple of 3.
			if ((number % 2 !== 0) && (number % 3 === 0)) {
				total += parseInt(number);
			}
		});

		let result = document.getElementById("result");
		result.innerHTML = "A soma dos números impares que são multiplos de 3 é: " + total;
	} catch (error) {
		alert(error);
	}
};
