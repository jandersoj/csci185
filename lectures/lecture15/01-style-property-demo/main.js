
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
    document.querySelector('h1').style.border = 'dotted 15px';
    document.querySelector('h1').style.padding = '15px';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.color = 'white';
    document.querySelector('h1').style.border = 'dashed';
    document.querySelector('h1').style.padding = '20px';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.color = 'black';
    document.querySelector('h1').style.border = 'dotted';
    document.querySelector('h1').style.padding = '10px';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.color = 'black';
    document.querySelector('h1').style.border = 'dashed 10px';
    document.querySelector('h1').style.padding = '10px';
};

function clearScreen() {
    // your code here...
    console.log('Clear all (no bg, font color white, no border)');
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section1').style.color = 'black';
    document.querySelector('#section2').style.color = 'black';
    document.querySelector('h1').style.border = 'none';
    
};
