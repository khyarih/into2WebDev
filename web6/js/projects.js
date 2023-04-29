let projects = document.getElementById('projects')

function createProjectCard(img, alt, title, description) {
    // create a project card
    let projectCard = document.createElement('div');

    //add class project-card to projectCard
    projectCard.classList.add('project-card');

    //create an image
    let projectImg = document.createElement('img');

    //add class project-img to projectImg
    projectImg.classList.add('project-img');

    //add src to projectImg
    projectImg.src = img

    //add alt to projectImg
    projectImg.alt = alt

    //create h3
    let project_title = document.createElement('h3');

    //add text to project_title
    project_title.textContent = title;

    //create p
    let project_description = document.createElement('p');

    //add text to project_description
    project_description.textContent = description;

    //add projectImg to projectCard
    projectCard.appendChild(projectImg);
    projectCard.appendChild(project_title) // h3
    projectCard.appendChild(project_description) // p

    return projectCard;
    
}

//project 1
let project1 = createProjectCard(
        'imgs/project1.jpeg',
        'Project 1',
        'Project 1: Responsive Website',
        
        'A responsive website built using HTML, CSS, and JavaScript, featuring smooth scrolling and a mobile-first design.'
    );

//project 2
let project2 = createProjectCard(
    'imgs/project2.png',
    'Project 2',
    'Project 2: Online Store',
    'An e-commerce website with a user-friendly interface, built using a modern web development framework and secure payment processing.'

);

//add projectCard to projects
projects.appendChild(project1);
projects.appendChild(project2);
/*

<div class="project-card"> <!-- project card -->
    <img class="project-img" src="imgs/project1.jpeg" alt="Project 1">
    <h3>Project 1: Responsive Website</h3>
    <p>A responsive website built using HTML, CSS, and JavaScript, featuring smooth scrolling and a mobile-first design.</p>
</div>


*/
