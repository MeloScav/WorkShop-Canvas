const canvas = document.getElementById("canvas"); // We recover the canvas
const context = canvas.getContext("2d"); // We recover the context

const width = canvas.getAttribute("width"); // Width canvas

// Variables
let pacmanX = 60;
let pacmanY = 180;
let pacmanR = 40;
let pacmanMouth = 20;
let pacmanEyeX = -4;
let pacmanEyeY = -6;
let pacmanBoolean = false;
let mouthPosition = -1;

let tab = [];
let roundColumnCount = 6;
for (let c = 0; c < roundColumnCount; c++) {
  // Columns
  tab[c] = { x: 0, y: 180, statut: 1 }; // Object with x and y position + a statut = 1 for the drawing
}

const Move = () => {
  pacmanX += 10;
};

const DrawPacman = () => {
  if (pacmanMouth <= 0) {
    mouthPosition = 1;
    pacmanMouth = 20;
  } else if (pacmanMouth >= 20) {
    mouthPosition = -1;
    pacmanMouth = 0;
  }

  // Pacman
  context.beginPath();
  context.fillStyle = "rgb(239,227,0)";
  context.moveTo(pacmanX, pacmanY);
  context.arc(
    pacmanX,
    pacmanY,
    pacmanR,
    (Math.PI / 180) * pacmanMouth,
    (Math.PI / 180) * (360 - pacmanMouth),
    pacmanBoolean
  );
  context.lineTo(pacmanX, pacmanY);
  context.closePath();
  context.fill();

  // Eyes
  context.beginPath();
  context.fillStyle = "black";
  context.arc(
    pacmanX - pacmanEyeX,
    pacmanY + pacmanEyeY - 8,
    4,
    0,
    Math.PI * 2,
    false
  );
  context.closePath();
  context.fill();
};

const drawFood = () => {
  for (var c = 0; c < roundColumnCount; c++) {
    if (tab[c].statut == 1) {
      // If statut = 1, the ball-food was not touched so we draw it
      let roundX = c * 80 + 150;
      tab[c].x = roundX; // We go through the columns to define the position x

      context.beginPath();
      context.moveTo(roundX, 180);
      context.fillStyle = "blue";
      context.arc(roundX, 180, 6, 0, Math.PI * 2, false);
      context.closePath();
      context.fill();
    }
  }
};

const Collision = () => {
  for (let c = 0; c < roundColumnCount; c++) {
    let b = tab[c];
    if (b.statut == 1) {
      // If the ball is active (status is 1) then we check the collision,
      // if collision then the status becomes 0 and the ball disappears
      if (pacmanX > b.x && pacmanX < b.x + 12) {
        // Position x of pacman greater than position x of the ball
        // AND position x of pacman lower than position x of the ball
        b.statut = 0;
      }
    }
  }
};

const Draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  Move();
  drawFood();
  DrawPacman();
  Collision();
};

setInterval(Draw, 600);
