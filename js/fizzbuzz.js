export function runFizzBuzz() {
    const input = prompt("Please enter the number you would like to FizzBuzz up to : ");
    const inputNumber = parseInt(input);

    if (isNumber(input)) {
        const resultElement = document.getElementById("fbResult");
        resultElement.innerHTML = "";

        for (let i = 1; i <= inputNumber; i++) {
            let list = document.createElement("li");

            if (i % 3 === 0 && i % 5 === 0) {
                list.textContent = "FizzBuzz";
            } else if (i % 3 === 0) {
                list.textContent = "Fizz";
            } else if (i % 5 === 0) {
                list.textContent = "Buzz";
            } else {
                list.textContent = i;
            }

            resultElement.appendChild(list);
        }
    }

}

function isNumber(num) {
    if (!num || num <= 0) {
        alert("Invalid input. Please try again.");
        return false;
    }
    return true;
}