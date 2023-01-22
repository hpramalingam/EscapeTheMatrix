// Getting the canvas element and content
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Variables
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const fontSize = 20;
const columns = canvas.width / fontSize;

// An array used to create raindrops in the draw function, initially filled with zeros
const raindrops = new Array(columns).fill(0);

// These were the Kanji that were used in the Movie for it's animation of the Matrix Rain
const charectersUsedInMatrix = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ010101";

// Function clears the canvas then sets the color, font and size of text that rains 
function canvasFiller() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = `${fontSize}px Consolas`;
  context.fillStyle = "#00cc33";
}

// Draw function
function draw() {
  canvasFiller()
  let i = columns 
  while (i > 0) {
    // to chose a random charecter in the charectersUsedInMatrix string
    const index = Math.floor(Math.random() * charectersUsedInMatrix.length);
    const x = i * fontSize;
    const y = raindrops[i] * fontSize;

    // to draw on the canvas
    context.fillText(charectersUsedInMatrix[index], x, y);

    // to check whether the drop has reached the bottom of screen
    if (y >= canvas.height && Math.random() > 0.99) {
      raindrops[i] = 0;
    }
    // Reset position of drop 
    raindrops[i] += Math.random()*2+1;
    i--;
  }

}

// Call to function draw, and the interval at which it runs
draw();
setInterval(draw, 70);

