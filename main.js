let rollDiceInput = document.querySelector("#roll-number");
let rollButton = document.querySelector("#roll-dice");
let ShowAllRolls = document.querySelector("#show-all-rolls");
let total = document.querySelector("#total");
let rollresults = document.querySelector("#roll-results");
let resetButton = document.querySelector("#reset-button");
let allRolls = [];

function giveMeRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
rollButton.addEventListener("click", function () {
  console.log(rollDiceInput.value);
  let maxRolls = Number(rollDiceInput.value);
  let count = 0;
  //   rollDiceInput.value = "";
  while (count < maxRolls) {
    allRolls.push(giveMeRandomNumber());
    count++;
  }
  console.log(allRolls.reduce((a, b) => a + b, 0));
  console.log(allRolls);
});
// total.innerHTML = allRolls;
// console.log(total);

ShowAllRolls.addEventListener("click", function () {
  //console.log(ShowAllRolls);
  rollresults.innerHTML = "";
  let count = 0;
  while (count < allRolls.length) {
    //console.log(allRolls[count]);

    rollresults.innerHTML += "<1i>" + allRolls[count] + "</1i>";
    count++;
  }
});

resetButton.addEventListener("click", function () {
  console.log("");
  let resetButton = 0;

  while (allRolls < resetButton.value) {
    allRolls.innerHTML = resetButton;
  }
  resetButton += 1;
  location.reload();
});
