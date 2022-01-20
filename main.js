const pea = document.querySelector(".pea");

pea.style.opacity = "1";

const shells = document.querySelectorAll(".shell");
console.log(shells);

pea.addEventListener("dragstart", dragStart);
pea.addEventListener("dragend", dragEnd);

// console.log(this);

// Drag Start
function dragStart() {
  this.className += " hold";
  //   console.log(this.className);
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  //   console.log(this);
  this.className = "pea";
  this.classList.toggle("pea-hidden");
  this.style.opacity = "0";
  document.querySelector("body").style.backgroundColor = "red";
  title.innerText = "Find the pea";
  title.style.color = "#fff";
  //   console.log(title);
}

for (const shell of shells) {
  shell.addEventListener("dragover", dragOver);
  shell.addEventListener("dragenter", dragEnter);
  shell.addEventListener("dragleave", dragLeave);
  shell.addEventListener("drop", dragDrop);
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "shell";
}
function dragDrop() {
  this.className = "shell";
  this.append(pea);
}

shells.forEach((shell) => {
  shell.addEventListener("click", () => {
    // console.log(shell.childElementCount);
    const winOrLose = document.querySelector(".overlay");
    if (shell.childElementCount == 1) {
      pea.style.opacity = "1";
      winOrLose.style.display = "block";
      winOrLose.innerHTML = `<h2 class="win">You won</h2>`;

      //   alert("Try again!");
      //   location.reload();
      setTimeout(() => {
        alert("Try again!");
        location.reload();
      }, 300);
    } else {
      pea.style.opacity = "1";
      winOrLose.style.display = "block";
      winOrLose.innerHTML = `<h2 class="lose">You lost</h2>`;
      setTimeout(() => {
        alert("Try again!");
        location.reload();
      }, 300);
    }
  });
});
