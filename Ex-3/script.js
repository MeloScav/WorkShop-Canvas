const canvas = document.getElementById("canvas"); // We recover the canvas
const context = canvas.getContext("2d"); // We recover the context

// Variables
let pacmanX = 60;
let pacmanY = 180;
let pacmanR = 40;
let pacmanMouth = 20;
let pacmanEyeX = -4;
let pacmanEyeY = -6;
let pacmanBoolean = false;
let mouthPosition = -1;
let statut = 1;

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

// Food
const Food = x => {
  context.beginPath();
  context.moveTo(x, 180);
  context.fillStyle = "blue";
  context.arc(x, 180, 6, 0, Math.PI * 2, false);
  context.closePath();
  if (statut == 1) {
    context.fill();
    if (pacmanX == x) {
      statut = 0;
    }
  }
};

const Draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  Move();
  Food(160);
  Food(240);
  Food(320);
  DrawPacman();
};

setInterval(Draw, 600);
