const canvas = document.getElementById("canvas"); // We recover the canvas
const context = canvas.getContext("2d"); // We recover the context

const width = canvas.getAttribute("width"); // Width canvas
const height = canvas.getAttribute("height"); // Height canvas

// The border
const border = (color, width, height) => {
  context.lineWidth = "5";
  context.strokeStyle = color;
  context.strokeRect(0, 0, width, height); // Empty rectangle
};

// Empty triangle
const emptyTriangle = (
  lineW,
  color,
  moveX,
  moveY,
  lineOneX,
  lineOneY,
  lineTwoX,
  lineTwoY,
  lineJ
) => {
  context.lineWidth = lineW; // Thickness line
  context.strokeStyle = color; // color line
  if (lineJ) {
    context.lineJoin = "round";
  } else {
    context.lineJoin = "miter";
  }
  context.beginPath(); // Beginning of the drawing
  context.moveTo(moveX, moveY);
  context.lineTo(lineOneX, lineOneY);
  context.lineTo(lineTwoX, lineTwoY);
  context.closePath(); // End of the drawing
  context.stroke(); // We draw
};

// filled triangle
const fullTriangle = (
  colorOne,
  colorTwo,
  colorThree,
  moveX,
  moveY,
  lineOneX,
  lineOneY,
  lineTwoX,
  lineTwoY
) => {
  let lineargradient = context.createLinearGradient(100, 200, 100, 100); // Degraded
  lineargradient.addColorStop(0, colorOne);
  lineargradient.addColorStop(0.5, colorTwo);
  lineargradient.addColorStop(1, colorThree);

  context.fillStyle = lineargradient;
  context.beginPath();
  context.moveTo(moveX, moveY);
  context.lineTo(lineOneX, lineOneY);
  context.lineTo(lineTwoX, lineTwoY);
  context.fill();
};

const draw = () => {
  // Draw the border
  border("purple", width, height);
  // Draw the empty triangle
  // color - moveX - moveY - lineOneX - lineOneY - lineTwoX - lineTwoY - lineRound
  emptyTriangle("3", "red", 10, 10, 10, 100, 100, 10, false);
  // Draw the filled triangle
  // colorOne - colorTwo - colorThree -  moveX - moveY - lineOneX - lineOneY - lineTwoX - lineTwoY
  fullTriangle("blue", "purple", "#D619D6", 100, 200, 200, 200, 150, 80);
  // Draw the empty triangle
  emptyTriangle("5", "green", 200, 300, 400, 300, 350, 200, true);
};

draw();
