function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();


    let y = 0;
    let width = 10;
    let x1 = 100;
    let x2 = 400;
    let x3 = 600;
    let x4 = 800;
 
    while (y <= 650) {

        fill('lightgreen'); circle(x1, y, width-100);
        fill('lavender');circle(x2, y, width - 200);
        fill('lightblue');circle(x3, y, width - 100);
        fill('pink');circle(x4, y, width - 300);
        
        y += 10;
        width += 10;

        x1 += 5;
        x2 += 10;
        x3 -= 5;
        x4 -= 10;

    }



    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
