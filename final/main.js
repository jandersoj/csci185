const saints = [

    { title: "St. Anthony", name: "anthony", back: "../final/pics/anthonybackfrancis.jpg", front: "../final/pics/anthonyfront.jpg",
        desc: "st anthony desc"},
    {title: "St. Anthony", name: "anthony", back:" ../final/pics/anthonyroundback.jpg", front: "../final/pics/anthonyroundfront.jpg",
        desc: "desc"},
    {title: "Tiny Crucifix", name: "jesus", back:"../final/pics/crucifixback.jpg", front: "../final/pics/crucifixfront.jpg",
        desc: "descr"},
    {title: "Crusade Medal", name: "jesus", back:"../final/pics/crusadeplainbackmary.jpg", front:"../final/pics/crusadeplainfrontjesus.jpg",
        desc: "sdesa"},
    {title: "Crusade Medal w/ Red", name: "jesus", back: "../final/pics/crusaderedbackmary.jpg", front:"../final/pics/crusaderedfrontjesus.jpg",
        desc: "kajfs"},
    {title: "St. Cure D'Ars", name: "cure dars", back:"../final/pics/curedarsback.jpg", front:"../final/pics/curedarsfront.jpg",
        desc: "sffsrfe"},
    {title: "St. Dymphna", name: "dymphna", back: "../final/pics/dymphnaback.jpg", front:"../final/pics/dymphnafront.jpg",
        desc:"afdssg"},
    {title: "Large Four-way Cross", name: "four way", back: "../final/pics/fourwaylargeback.jpg", front: "../final/pics/fourwaylargefront.jpg",
        desc: "asfgetrhetjr"},
    {title: "Four-way Medal", name: "four way", back: "../final/pics/fourwaymedalback.jpg", front: "../final/pics/fourwaymedalfront.jpg",
        desc: "!DASFD"},
    {title: "Small Four-way Cross", name: "four way", back: "../final/pics/fourwaysmallback.jpg", front:"../final/pics/fourwaysmallfront.jpg",
        desc: "FSREAGE"},
    {title: "St. Gerard", name: "gerard", back: "../final/pics/gerardback.jpg", front: "../final/pics/gerardfront.jpg",
        desc: "pighs"},
    {title: "St. Gertrude", name: "gertrude", back: "../final/pics/gertrudeback.jpg", front: "../final/pics/gertrudefront.jpg",
        desc: "fgdsdsgh"},
    {title: "the Virgin of Guadalupe", name: "mary", back: "../final/pics/guadalupeback.jpg", front: "../final/pics/guadalupefront.jpg",
        desc: "asig"},
    {title: "The Virgin of Guadalupe", name: "mary", back: "../final/pics/guadalupemedalback.jpg", front: "../final/pics/guadalupemedalfront.jpg",
        desc: "qw4ge"},
    {title: "St. Joseph", name: "joseph", back: "../final/pics/josephback.jpg", front: "../final/pics/josephfront.jpg",
        desc: "afsg"},
    {title: "St. Jude", name: "jude", back: "../final/pics/judeback.jpg", front: "../final/pics/judefront.jpg",
        desc: "afshagh"}, 
    {title: "Golden Miraculous Medal", name: "mary", back: "../final/pics/miraculousgoldback.jpg", front: "../final/pics/miraculousgoldfront.jpg", 
        desc: "sdgdh"},
    {title: "Small Miraculous Medal", name: "mary", back: "../final/pics/miraculoussmallback.jpg", front: "../final/pics/miraculoussmallfront.jpg",
        desc: "akdfg"},
    {title: "Infant of Prague", name: "jesus", back: "../final/pics/pragueback.jpg", front: "../final/pics/praguefront.jpg",
        desc: "fsalkg"},
    {title: "St. Theresa", name: "theresa", back: "../final/pics/theresaback.jpg", front: "../final/pics/theresafront.jpg",
        desc:"sagrhyjtu"},
    {title: "Tiny Mary Medals", name: "mary", back: "../final/pics/tinymaryback.jpg", front: "../final/pics/tinymaryfront.jpg",
        desc: "asgd"},
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
            
            document.querySelector('#search-items').insertAdjacentHTML(
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
    
        // shoutout to w3 schools for this next bit and with the span part up there 
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
        
        console.log("clicked open");
        modal.style.display = "block";

    };
    
    
    // -----

    // again, shoutout to w3 schools for this next bit
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
