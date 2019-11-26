const canvas = document.getElementById("canvas"); // We recover the canvas
const context = canvas.getContext("2d"); // We recover the context
const width = canvas.getAttribute("width"); // Width canvas
const height = canvas.getAttribute("height"); // Height canvas

// Draw the image
const drawImg = (
  pathSrc,
  cutX,
  cutY,
  cutWidth,
  cutHeight,
  imgWidth,
  imgHeight
) => {
  const img = new Image(); // Creating the image
  img.src = pathSrc; // Path of the image

  img.onload = () => {
    // Loading
    context.drawImage(
      // We draw
      img, // Image
      cutX, // Cutting the image
      cutY,
      cutWidth, // Width image
      cutHeight, // Height image
      width / 2 - imgWidth / 2, // To put in the center: (size canvas /2) - (size image /2)
      height / 2 - imgHeight / 2,
      imgWidth, // size image
      imgHeight
    );
  };
};

// Draw the border
const drawBorder = () => {
  context.lineWidth = "5";
  context.strokeStyle = "green";
  context.strokeRect(0, 0, width, height); // Empty rectangle
};

// Draw the title
const drawTitle = (width, y) => {
  let text = "Exercice 1";
  let mesure = context.measureText(text).width;
  context.font = "20px serif";
  context.fillText(text, width / 2 - mesure, y);
};

// Draw the filled rectangle
const drawRectFill = (color, x, y, width, height) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height); // Rectangle plein
};

// Draw the empty rectangle
const drawRectStroke = (color, x, y, width, height) => {
  context.lineWidth = "3";
  context.strokeStyle = color;
  context.strokeRect(x, y, width, height);
};

// Draw all
const draw = () => {
  // Draw border
  drawBorder();
  // Title
  drawTitle(width, 30);
  // The rectangles
  drawRectFill("red", 20, 70, 50, 50);
  drawRectStroke("blue", 95, 70, 50, 50);
  drawRectFill("green", 165, 70, 50, 50);
  drawRectStroke("yellow", 235, 70, 50, 50);
  // Draw image in center
  // Src - cutX - cutY - cutWidth - cutHeight - ImgWidth - ImgHeight
  drawImg("chaton.jpg", 200, 10, 400, 400, 200, 200);
};

draw();
