//selectors
const buttons = document.querySelectorAll("button");
console.log(buttons)
const output = document.querySelector(".output");
const result = document.querySelector(".result");
//add eventlistener
buttons.forEach(eachButton => {
  eachButton.addEventListener("click", calculate)
})



//building function
function calculate() {
  let buttonText = this.innerText
   console.log(buttonText)
  ///ac

  if (buttonText === "AC") {
    output.innerText = "";
    result.innerText = 0;
    return;
  }

//DEL
if (buttonText === "DEL") {
  output.textContent = output.textContent.substr(0, output.textContent.length - 1);
  return;
}
//result
if (buttonText === "=") {
  result.innerText = eval(output.innerText)
}
//any key
else {
  output.innerText += buttonText
  return;
}
}