const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")

const greeting = (event) => {
    output.textContent = input.value === "" ? "Anonymous" : event.currentTarget.value;


    // output.textContent = event.currentTarget.value;
}

input.addEventListener("input", greeting);