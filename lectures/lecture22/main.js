// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    data = await fetch(url).then(response => response.json());
} 
fetchCourses();

/* Your Tasks:
    1. Output the title of the first course to the console.
    2. Output the name of the course's instructor to the console.
    3. Output the title of the first course to the #results section.
    4. Output the title and the instructor of the first course to the #results section.
    5. Output ALL of the course titles to the console.
    6. Output ALL of the course titles to the #results section.
    7. Output ALL of the diversity intensive courses to the results section.
    8. Questions to ponder:
        * How could you make this interface 
          more useful and engaging?
        * How could you allow your user to...
            * Select which department they want to view?
            * Select which term they want to view?
            * Only view classes that meet on Tuesdays and Thursdays? 
*/


function search() {
    console.log(data);
    const searchTerm = document.querySelector('#search_term').value;
    
    
    for (let i = 0; i < data.length; i++){

        if (data[i].Department === searchTerm) {
            let instructor = 'TBD';
            if (data[i].Instructors.length > 0) {
                instructor = data[i].Instructors[0].Name;
            }

            const template = `
            
            <section class="course">
            <h2>${data[i].Code}: ${data[i].Title} </h2>
            <p>
            ${data[i].Days} &bull; ${data[i].Location.FullLocation} &bull; ${data[i].Hours} credit hour(s)
            </p>
            <p><strong>${instructor}</strong></p>

            `;
            document.querySelector('.courses').insertAdjacentHTML(
                "beforeend", template
            )
        }
    }
} 