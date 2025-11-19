let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turnO = true;
let count = 0;
let gameOver = false;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver) return;
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnO = true;
  count = 0;
  gameOver=false
});

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (
      boxes[a].innerText !== "" &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      gameOver = true;
      boxes.forEach((box) => (box.disabled = true));
      return;
    }
  }
}
