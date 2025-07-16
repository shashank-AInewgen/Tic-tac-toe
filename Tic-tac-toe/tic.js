let boxes = document.querySelectorAll(".box");
let resetbuton = document.querySelector("#re");
let afterwin = document.querySelector(".afterwin");
let hide = document.querySelector("#hide");
let newgame = document.querySelector(".newgame");
let win = document.querySelector(".winner");
let thro = document.querySelector(".win");
let nowin = document.querySelector(".draw");

let turno = true;

let winpattren = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turno = true;
  hide.style.visibility = "hidden";
  nowin.style.display = "none";
  thro.style.display = "none";

  enable();
};
const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    count = 0;
  }
};

const showwinner = (winner) => {
  hide.style.visibility = "visible";
  thro.style.display = "block";
  nowin.style.display = "none";
  win.innerText = `Winner is ${winner}`;
};
let count = 0;

boxes.forEach((button) => {
  button.addEventListener("click", () => {
    if (turno) {
      button.innerText = "o";
      button.style.color = "red";
      turno = false;
    } else {
      button.innerText = "x";
      button.style.color = "blue";
      turno = true;
    }
    count++;
    button.disabled = true;
    checkwin();
  });
});
const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

function checkwin() {
  for (let pattern of winpattren) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 !== "" && p1 === p2 && p2 === p3) {
      disablebox();
      showwinner(p1);
      return;
    }
  }

  // Move draw check outside the loop
  if (count === 9) {
    disablebox();
    hide.style.visibility = "visible";
    thro.style.display = "none";
    nowin.style.display = "flex";
    win.innerText = "It's a draw!";
  }
}

resetbuton.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);
