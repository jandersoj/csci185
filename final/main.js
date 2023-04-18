const saints = [
    { title: "Lady of Guadalupe", name: "mary", pic: "https://picsum.photos/300?random=1", desc:"our lady of guadalupe" },
    { title: "Mary with Baby", name: "mary", pic: "https://picsum.photos/300?random=2", desc:"mary with bb jc" },
    { title: "Jesus One", name: "jesus", pic: "https://picsum.photos/300?random=3", desc:"jesus one!" },
    { title: "Jesus Two", name: "jesus", pic: "https://picsum.photos/300?random=4", desc:"jests 2!" },
    { title: "St. Christopher", name: "christopher", pic: "https://picsum.photos/300?random=3", desc:" st christopher protect us" },
    { title: "St. Anthony", name: "anthony", pic: "https://picsum.photos/300?random=4", desc:"st ant hony" },
];

// counter = 0;
// while (counter < saints.length) {
//     const template = `
//         <div class="card">
//             <div>
//                 <img src= ${saints[counter].pic} />
//                 <h3> "${saints[counter].title}, ${saints[counter].name}"</h3>
//                 <p> is the ${saints[counter].desc} </p>
//             </div>
//         </div>
//     `;
//     document.querySelector('.items').insertAdjacentHTML('beforeend', template);
//     counter++;
// }

function search() {
    console.log(saints);
    const searchTerm = document.querySelector('#search_term').value;
    // const outputElement = document.querySelector('.items');
    
    for (let i = 0; i < saints.length; i++){
        if (saints[i].name === searchTerm) {
            const template = ` 
                <div class="card">
                    <img src= ${saints[i].pic} />
                    <h3> ${saints[i].title}</h3>
                    <p> ${saints[i].desc} </p>
                </div>
            `;
            
            document.querySelector('.items').insertAdjacentHTML(
                "beforeend", template
            )
            // outputElement.innerHTML= template;
            // ok so im wanting it to make a bunch of cards but then replace the one group of a bunch of
            // cards with another group of a bunch of cards every time i search something new? tbd
        }
    }
} 