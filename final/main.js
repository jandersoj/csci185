const saints = [

    { title: "St. Anthony", name: "anthony", back: "../final/pics/anthonybackfrancis.jpg", front: "../final/pics/anthonyfront.jpg",
        desc: "Patron of miracles, lost things, travelers, the poor, the sick, and many other things."},
    {title: "St. Anthony", name: "anthony", back:" ../final/pics/anthonyroundback.jpg", front: "../final/pics/anthonyroundfront.jpg",
        desc: "Patron of miracles, lost things, travelers, the poor, the sick, and many other things. "},
    {title: "Tiny Crucifix", name: "jesus", back:"../final/pics/crucifixback.jpg", front: "../final/pics/crucifixfront.jpg",
        desc: "A cross with a figure of Jesus Christ, representing his death and resurrection."},
    {title: "Crusade Medal", name: "jesus", back:"../final/pics/crusadeplainbackmary.jpg", front:"../final/pics/crusadeplainfrontjesus.jpg",
        desc: "AKA a Jerusalem Cross, represents the spread of Christianity (for better or worse)."},
    {title: "Crusade Medal w/ Red", name: "jesus", back: "../final/pics/crusaderedbackmary.jpg", front:"../final/pics/crusaderedfrontjesus.jpg",
        desc: "AKA a Jerusalem Cross, represents the spread of Christianity."},
    {title: "St. Cure D'Ars", name: "cure dars", back:"../final/pics/curedarsback.jpg", front:"../final/pics/curedarsfront.jpg",
        desc: "AKA John Vianney, a French saint known for his pastoral work, and patron of parish priests."},
    {title: "St. Dymphna", name: "dymphna", back: "../final/pics/dymphnaback.jpg", front:"../final/pics/dymphnafront.jpg",
        desc:"Patron of those suffering nervous and mental afflictions, and victims of incest."},
    {title: "Large Four-way Cross", name: "four way", back: "../final/pics/fourwaylargeback.jpg", front: "../final/pics/fourwaylargefront.jpg",
        desc: "The Sacred Heart, St. Christopher, a Miraculous Medal, St. Joseph, and a dove as the Holy Spirit."},
    {title: "Four-way Medal", name: "four way", back: "../final/pics/fourwaymedalback.jpg", front: "../final/pics/fourwaymedalfront.jpg",
        desc: "A crucifix, Mary, St. Christopher, St. Joseph, The Sacred Heart, and a dove as the Holy Spirit."},
    {title: "Small Four-way Cross", name: "four way", back: "../final/pics/fourwaysmallback.jpg", front:"../final/pics/fourwaysmallfront.jpg",
        desc: "The Sacred Heart, St. Christopher, a Miraculous Medal, St. Joseph, and a dove as the Holy Spirit."},
    {title: "St. Gerard", name: "gerard", back: "../final/pics/gerardback.jpg", front: "../final/pics/gerardfront.jpg",
        desc: "Gerard Majella, Italian saint and patron of expectant mothers and children."},
    {title: "St. Gertrude", name: "gertrude", back: "../final/pics/gertrudeback.jpg", front: "../final/pics/gertrudefront.jpg",
        desc: "St. Gertrude of Nivelles, patron against mice and of gardeners, mental illness, and cats."},
    {title: "Our Lady of Guadalupe", name: "mary", back: "../final/pics/guadalupeback.jpg", front: "../final/pics/guadalupefront.jpg",
        desc: "A title of the Virgin Mary, associated with a series of apparitions in Mexico City."},
    {title: "Our Lady of Guadalupe", name: "mary", back: "../final/pics/guadalupemedalback.jpg", front: "../final/pics/guadalupemedalfront.jpg",
        desc: "A title of the Virgin Mary, associated with a series of apparitions in Mexico City."},
    {title: "St. Joseph", name: "joseph", back: "../final/pics/josephback.jpg", front: "../final/pics/josephfront.jpg",
        desc: "Father of Jesus, and patron of workers, fathers, parried people, and for a happy death"},
    {title: "St. Jude", name: "jude", back: "../final/pics/judeback.jpg", front: "../final/pics/judefront.jpg",
        desc: "One of the twelve Apostles, patron of desperate situations, impossible causes, and hope."}, 
    {title: "Golden Miraculous Medal", name: "mary", back: "../final/pics/miraculousgoldback.jpg", front: "../final/pics/miraculousgoldfront.jpg", 
        desc: "Picturing Our Lady of Graces, representing a series of Marian apparitions and her grace."},
    {title: "Small Miraculous Medal", name: "mary", back: "../final/pics/miraculoussmallback.jpg", front: "../final/pics/miraculoussmallfront.jpg",
        desc: "Picturing Our Lady of Graces, representing a series of Marian apparitions and her grace."},
    {title: "Infant of Prague", name: "jesus", back: "../final/pics/pragueback.jpg", front: "../final/pics/praguefront.jpg",
        desc: "A statue of an infant Jesus located in a church in Prague in the Czech Republic"},
    {title: "St. Theresa", name: "theresa", back: "../final/pics/theresaback.jpg", front: "../final/pics/theresafront.jpg",
        desc:"St. Thérèse of Lisieux, or Little Flower. Patron of orphaned children and HIV/AIDS survivors."},
    {title: "Tiny Mary Medals", name: "mary", back: "../final/pics/tinymaryback.jpg", front: "../final/pics/tinymaryfront.jpg",
        desc: "These are just two tiny Mary medals that came together and that I like."},
    // {title: "idk", name: "idk", back: "../final/pics/willspendback.jpg", front: "../final/pics/willspendfront.jpg",
    //     desc: "sadgdhf"}
        
]

function search() {
    console.log(saints);
    const searchTerm = document.querySelector('#search_term').value;
    // const outputElement = document.querySelector('.items');
    document.querySelector('#search-items').innerHTML = '';
    for (let i = 0; i < saints.length; i++){
        if (saints[i].name === searchTerm) {
            const template = ` 
                <div class="card" onclick="showModal()">
                    <img src= ${saints[i].front} />
                    <h3> ${saints[i].title} </h3>
                    <p> ${saints[i].desc} </p>
                </div>
            `;
        
            //     <div class="modal">
            //             <div class="modal-content">
            //             <span class="close">&times;</span>
            //             <section class ="modal-change">
            //                 <img src= ""/>
            //                 <h3> ${saints[i].title} </h3>
            //                 <p>words</p>
            //             </section>
            //         </div>
            //     </div>
            // `;
            
            document.querySelector('#search-items').insertAdjacentHTML(
                "beforeend", template
            );
    
        //     const modal = document.querySelector(".modal");
    
        //     function showModal(){
        //         
        //         console.log("clicked open");
        //         modal.style.display = "block";
        //     };
        
        
        // // -----
    
        //     const span = document.getElementsByClassName("close")[0];
    
        //     span.onclick = function() {
        //         modal.style.display = "none";
        //     };
    
        //     window.onclick = function(event) {
        //         if (event.target == modal) {
        //             modal.style.display = "none";
        //         }
        //     }
        }
    }
} 


for (let i = 0; i < saints.length; i++){
    const template = ` 
        <div class="card" onclick="showModal()">
            <img src= ${saints[i].front} />
            <h3> ${saints[i].title} </h3>
            <p> ${saints[i].desc} </p>
        </div>

        <div class="modal">
                <div class="modal-content">
                <span class="close">&times;</span>
                <section class ="modal-change">
                    <img src= ""/>
                    <h3> ${saints[i].title} </h3>
                    <p>words</p>
                </section>
            </div>
        </div>
    `;
    
    document.querySelector('#all-items').insertAdjacentHTML(
        "beforeend", template
    );

    const modal = document.querySelector(".modal");

    function showModal(){
        
        // const modal = document.querySelector(".modal");
    
            // const modal = document.querySelector(".modal");
    
            //     // so maybe i could put a modal itself in the html and just make it change the contents, same way 
            // it changes inside the section for the cards, just itll change inside the modal card thing itself. 
            // so same outside in the html with different words iin the javascript
    
            // no thats not working with the i, idk what to do now

        console.log("clicked open");
        modal.style.display = "block";

    };
    
    
    // -----

    // shoutout to w3 schools for this next bit and also the span part
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
