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
            
            // document.querySelector('#search-items').insertAdjacentHTML(
            //     "beforeend", template
            // ) this one puts them all down but does not replace when you search again

            document.querySelector('#search-items').innerHTML=template;

            // ok great i have it replacing but i need it now to add all not just one
            // and i know that trouble is with the template and the id its going into but hmmmmmmmm
        }
    }
} 


for (let i = 0; i < saints.length; i++){
    const template = ` 
        <div class="card">
            <img src= ${saints[i].pic} />
            <h3> ${saints[i].title}</h3>
            <p> ${saints[i].desc} </p>
        </div>
    `;
        
    document.querySelector('#all-items').insertAdjacentHTML(
        "beforeend", template

    )

}
