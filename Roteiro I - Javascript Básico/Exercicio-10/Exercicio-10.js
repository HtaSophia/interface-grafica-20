const reverseValues = () => {
  try {
    let numbers = document.getElementById("inputNumbers").value;
    numbers = numbers.split(',').filter(number => (number.trim() !== '')).map(numb => Number(numb));

    if (numbers.length === 0 || numbers.some(number => !Number.isInteger(number))) {
      alert("Preencha o campo com números inteiros");
      return false;
    }

    const reverse = numbers.reverse();

    let result = document.getElementById("result");
    result.innerHTML = `O inverso do array [${numbers}] é [${reverse}]`;
  } catch (error) {
    alert(error);
  }
}