const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


const elem = document.querySelector('#current-photo-id');
const outputElement = document.querySelector('.caption');

    

function showImage() {
    console.log('Show image');
    elem.src = photos[idx];
    // aahhhhhhh
    outputElement.innerHTML=`<p>Image ${idx + 1} of 10</p>`;
    // outputElement.innerHTML=`<p>hello</p>`;

}


function forward() {

    if (idx === photos.length - 1){
        idx = 0 
        console.log('forward jump');
    } else {
        ++idx;
        console.log('forward');
    }

    showImage();
}


function back() {
   
    if (idx === 0){
        idx = photos.length - 1;
        console.log('backward jump');
    } else {
        --idx;
        console.log('backward');   
    }

    showImage();
}
