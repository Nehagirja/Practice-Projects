//defining the required variables
let min = 1,
  max = 10,
  randomNumber = getRandom(min, max),
  guessLeft = 3;

//UI elements
const game = document.querySelector("#game"),
  minValue = document.querySelector(".min-num"),
  maxValue = document.querySelector(".max-num"),
  inputNum = document.querySelector("#guess-input"),
  submitBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

//assign UI max and min
minValue.textContent = min;
maxValue.textContent = max;

//Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//listen for guess
submitBtn.addEventListener("click", function () {
  let number = parseInt(inputNum.value);
  console.log(number);

  if (number === randomNumber) {
    gameover(true, `${randomNumber} is correct, you win!`);
  } else {
    guessLeft--;

    if (guessLeft === 0) {
      gameover(
        false,
        `Game Over, you lost. The correct number was ${randomNumber}`
      );
    } else {
      inputNum.style.borderColor = "red";
      inputNum.value = "";
      setMessage(`${number} is not correct. ${guessLeft} guesses left.`, "red");
    }
  }

  //validate
  if (isNaN(number) || number < min || number > max) {
    guessLeft = 3;
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
});

//the message display function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//game over function for win or loss.
function gameover(won, msg) {
  let color;
  won === true ? (color = "green") : "red"; //ternary operation
  inputNum.disabled = true;
  inputNum.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
  //play again??
  submitBtn.value = "Play Again";
  submitBtn.className += "play-again";
}

//get the random number
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
