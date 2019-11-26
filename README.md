# Canvas Workshop

Hello!  
Welcome to the Canvas workshop to learn how to draw anything you want !

## Activities

We propose you different projects :

- Draw a title with 4 squares of different colors (drawing with **fill()** but also with **stroke()** ), and adding an image to the center of your canvas. Draw also a canvas border.
- Draw 3 triangles, one with its unclosed path.
- Draw an animated Pacman

## Explanation

Use the [MDN documentation](https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Formes_g%C3%A9om%C3%A9triques), it is very well done :)

### Draw with canvas

To draw in canvas, you must first create a sheet **index.html** and a **script.js** sheet, you can also add a sheet **style.css** if you want to stylize a little more your drawing.

In your **index.html**, you need to add a canvas tag :

```

<canvas id="canvas" width="600" height="400">You can add text if the canvas is not supported </canvas>

```

In your **script.js**, you will always need to do two things :

- recover the canvas
- define the context

```

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

```

To draw a path, do not forget to use **beginPath()** to start the path, write the drawing instructions, close the path **closePath()** , and trace or fill the shape.

If you can, use functions to simplify your code.

You will find a correction on the branch "corrections"

## Author

Scavezzoni Méloé  
Jessica Pirotte
