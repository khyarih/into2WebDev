let div = document.getElementById('myID');


let colorsList = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', ,'white'];

//change the background color of the div
setInterval(function () {
    let rand = Math.random();
    console.log(rand);
    let randomColor = colorsList[Math.floor(rand * colorsList.length)];
    div.style.backgroundColor = randomColor;
}, 1000);


//create div
let newDiv = document.createElement('div');

newDiv.style.backgroundColor = 'black';
newDiv.style.width = '100px';
newDiv.style.height = '100px';

//add div to body
div.appendChild(newDiv);