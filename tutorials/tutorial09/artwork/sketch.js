const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#4E4187", "#3083DC", "#D36135", "#7DDE92", "#2EBFA5"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2);
    
    // fill("#08415c");

    let i=0;
    while (i < 50) {
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let x1 = randomInt(0, canvasWidth);
        let y1 = randomInt(0, canvasHeight);
        let x2 = randomInt(0, canvasWidth);
        let y2 = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);

        fill(colors[randomInt(0, 4)]);
        circle(x, y, size); 

        // fill(colors[1]);
        triangle(
                x1, y1 - size / 2, 
                x1 - size / 2.25, y1 + size / 4.3,
                x1 + size / 2.25, y1 + size / 4.3
            ); 

        // fill(colors[2]);
        square(x2, y2, size);

        stroke(colors[randomInt(0, 4)]);
        let coefX = randomFloat(-3, 3);
        let coefY = randomFloat(-3, 3);
        line(x, y, x + size * coefX, y + size * coefY);

        ++i;
    };
}


// // anything that you want to animate goes in this function:  
// function draw() {
//     clear();

// }

 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

