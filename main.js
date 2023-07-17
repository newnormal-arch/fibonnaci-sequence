function generateFibonnaci() {
    const number = parseInt(document.getElementById("fib-input").value);
    const output = document.getElementById('fib-output');
    const fibArray = [0, 1];

    for (let i = 2; i <= number; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
    console.log(fibArray);
    output.innerHTML = fibArray.join(", ");
}