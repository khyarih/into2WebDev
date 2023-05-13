let projects = document.getElementById('projects')

function createProjectCard(img, alt, title, description) {
    let projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    let projectImg = document.createElement('img');
    projectImg.classList.add('project-img');
    projectImg.src = img
    projectImg.alt = alt

    let project_title = document.createElement('h3');
    project_title.textContent = title;

    let project_description = document.createElement('p');
    project_description.textContent = description;

    projectCard.appendChild(projectImg);
    projectCard.appendChild(project_title) // h3
    projectCard.appendChild(project_description) // p

    return projectCard;
    
}


//load projects

fetch('http://127.0.0.1:3000/projects')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
                let project = createProjectCard(
                    data[index].img,
                    data[index].alt,
                    data[index].title,
                    data[index].description);
                
                projects.appendChild(project);
            }
        }
            
)