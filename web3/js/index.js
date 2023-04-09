// Object

let person = {
    name: "John",
    age: 30,
    hobbies: ["music", "movies", "sports"],
}

let Project = {
    img : "img/1.jpg",
    nnom: "Project 1",
    disc: "some text",
}


// Print the name
console.log("Person Name---------------------");
console.log(person.name);

// Print the Object
console.log("Person Object---------------------");
console.log(person);

let array = [
    10,
    "Hello",
    true,
    person,
    "Hi",
    12.5
]

for (let index = 0; index < array.length; index++) {
    if(index < array.length/2){
        console.log("first half:" + array[index])
    }
    else{
        console.log("second half:" + array[index])
    }
}

//using while loop
console.log("using while loop");
let index = 0;
while (index < array.length) {
    
    if(index < array.length/2){
        console.log("first half:" + array[index])
    }
    else{
        console.log("second half:" + array[index])
    }
    index++;
}

//using do while loop
console.log("using do while loop");
index = 0;
do {
    if(index < array.length/2){
        console.log("first half:" + array[index])
    }
    else{
        console.log("second half:" + array[index])
    }
    index++;
}while (index < array.length);