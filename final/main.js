const saints = [
    { name: "saint1", pic: "https://picsum.photos/300?random=1", desc:"patron st of 1" },
    { name: "saint2", pic: "https://picsum.photos/300?random=2", desc:"patron st of 2" },
    { name: "saint3", pic: "https://picsum.photos/300?random=3", desc:"patron st of 3" },
    { name: "saint4", pic: "https://picsum.photos/300?random=4", desc:"patron st of 4" },
];

counter = 0;
while (counter < saints.length) {
    const template = `
        <div class="card">
            <div>
                <img src="${saints[counter].pic}" />
                <h3> ${saints[counter].name} </h3>
                <p> is the ${saints[counter].desc} </p>
            </div>
        </div>
    `;
    document.querySelector('.items').insertAdjacentHTML('beforeend', template);
    counter++;
}