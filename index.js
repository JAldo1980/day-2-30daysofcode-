const genBtn = document.getElementById("gen-btn");

genBtn.addEventListener("click", createPassword);

const randomCharacters = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "£",
  "$",
  "%",
  "^",
  "&",
  "?",
  "+",
  "J",
  "P",
  "M",
  "D",
  "R",
  "S",
  "A",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
];

const generatedPassword = [];

function createPassword() {
  generatedPassword.length = 0;
  let inputValue = document.getElementById("number-input").value;

  if (inputValue < 6) {
    inputValue = 6;
  } else if (inputValue > 16) {
    inputValue = 16;
  }

  for (let i = 0; i < inputValue; i++) {
    let randomNumber = Math.floor(Math.random() * randomCharacters.length);

    let randomPassword = randomCharacters[randomNumber];
    generatedPassword.push(randomPassword);
  }
  console.log(generatedPassword);
}
