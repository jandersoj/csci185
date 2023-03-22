function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);


    // https://p5js.org/reference/#/p5/rect
    fill('brown')
    rect(200, 200, 50, 300);

    // https://p5js.org/reference/#/p5/circle
    fill("green")
    circle(225, 200, 200);


    // https://p5js.org/reference/#/p5/ellipse
    fill('navy');
    ellipse(350, 400, 200, 100);
    rect(300, 425, 20, 70);
    
    // https://p5js.org/reference/#/p5/ellipse
    fill('navy');
    ellipse(350, 400, 200, 100);
    rect(400, 425, 20, 70);

    // https://p5js.org/reference/#/p5/text
    fill('white');
    text("O)           O)", 300, 375, 200, 200);
    text("O", 325, 400, 200, 200);



     
    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}