let x = 300;
let y = 200;
let width = 100;
let fillColor = 'orange';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill('fillColor');
    // noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    if (ev.code === 'ArrowLeft') {
        x = x - 10;
    }

    // right arrow moves circle right
    if (ev.code === 'ArrowRight') {
        x = x + 10;
    }

    // up arrow moves circle up
    if (ev.code === 'ArrowUp') {
        y = y - 10;
    }

    // down arrow moves circle down
    if (ev.code === 'ArrowDown') {
        y = y + 10;
    }

    if (ev.code === 'Space') {
        width = width + 10;
    }

    if (ev.code === 'ShiftLeft') {
        width = width - 10;
    }

    if (ev.code === 'KeyQ') {
        fillColor = 'lightblue';
    }

    if (ev.code === 'KeyW') {
        fillColor = 'darkgray';
    }

    if (ev.code === 'KeyE') {
        fillColor = 'lightgreen';
    }

    if (ev.code === 'KeyR') {
        fillColor = 'red';
    }

    if (ev.code === 'KeyT') {
        fillColor = 'teal';
    }

    if (ev.code === 'KeyY') {
        fillColor = 'yellow';
    }

    if (ev.code === 'KeyU') {
        fillColor = 'darkgreen';
    }

    if (ev.code === 'KeyI') {
        fillColor = 'indigo';
    }

    if (ev.code === 'KeyO') {
        fillColor = 'orange';
    }

    if (ev.code === 'KeyP') {
        fillColor = 'pink';
    }


    if (ev.code === 'KeyA') {
        fillColor = 'lightgray';
    }

    if (ev.code === 'KeyS') {
        fillColor = 'crimson';
    }

    if (ev.code === 'KeyD') {
        fillColor = 'lightgreen';
    }

    if (ev.code === 'KeyF') {
        fillColor = 'violet';
    }

    if (ev.code === 'KeyG') {
        fillColor = 'green';
    }

    if (ev.code === 'KeyH') {
        fillColor = 'darkorange';
    }

    if (ev.code === 'KeyJ') {
        fillColor = 'magenta';
    }

    if (ev.code === 'KeyK') {
        fillColor = 'darkred';
    }

    if (ev.code === 'KeyL') {
        fillColor = 'lightyellow';
    }


    // redraw circle:
    clear();
    fill(fillColor);
    // noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
