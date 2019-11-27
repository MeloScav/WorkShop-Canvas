const canvas = document.getElementById("canvas"); // We recover the canvas
const context = canvas.getContext("2d"); // We recover the context
const width = canvas.getAttribute("width"); // Width canvas
const height = canvas.getAttribute("height"); // Height canvas

// Draw the image
const DrawImg = (
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
const DrawBorder = () => {
  context.lineWidth = "5";
  context.strokeStyle = "green";
  context.strokeRect(0, 0, width, height); // Empty rectangle
};

// Draw the title
const DrawTitle = (width, y) => {
  let text = "Exercice 1";
  let mesure = context.measureText(text).width;
  context.font = "20px serif";
  context.fillText(text, width / 2 - mesure, y);
};

// Draw the filled rectangle
const DrawRectFill = (color, x, y, width, height) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height); // Rectangle plein
};

// Draw the empty rectangle
const DrawRectStroke = (color, x, y, width, height) => {
  context.lineWidth = "3";
  context.strokeStyle = color;
  context.strokeRect(x, y, width, height);
};

// Draw all
const Draw = () => {
  // Draw border
  DrawBorder();
  // Title
  DrawTitle(width, 30);
  // The rectangles
  DrawRectFill("red", 20, 70, 50, 50);
  DrawRectStroke("blue", 95, 70, 50, 50);
  DrawRectFill("green", 165, 70, 50, 50);
  DrawRectStroke("yellow", 235, 70, 50, 50);
  // Draw image in center
  // Src - cutX - cutY - cutWidth - cutHeight - ImgWidth - ImgHeight
  DrawImg("chaton.jpg", 200, 10, 400, 400, 200, 200);
};

Draw();
