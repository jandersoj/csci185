function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(400, 200, 300, "orange");
    makeCreature(700, 400, 200, "green");
    makeCreature(350, 450, 75, "skyblue");
    makeCreature(900, 200, 400, "purple");
    


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, r, fillColor) {

    fill(fillColor);
    circle(x, y, r);

    fill('black');
    ellipse(x-r/5, y-r/5, r/10, r/8);
    ellipse(x+r/5, y-r/5, r/10, r/8);

}

function mouseDragged() {
    makeCreature(mouseX, mouseY, 200, "lightblue");
}