function Student(nom, prenom, mark) {
  this.nom = nom;
  this.prenom = prenom;
  this.mark = mark;
}

Student.prototype.print = function () { 
    console.log(this.nom + " " + this.prenom + " " + this.mark);
}

function Module(nom, Students) {
  this.nom = nom;
  this.Students = Students;
}

Module.prototype.average = function () { 

    let sum = 0;
    for (let i = 0; i < this.Students.length; i++) {
        sum += this.Students[i].mark;
    }
    return sum / this.Students.length;
}

Module.prototype.printStudents = function () { 
    for (let i = 0; i < this.Students.length; i++) {
        students[i].print();
    }
}


//list of 5 students
let students = [
    new Student("Doe", "John", 10),
    new Student("Doe", "Jane", 12),
    new Student("Doe", "Jack", 14),
    new Student("Doe", "Jill", 16),
    new Student("Doe", "Joker", 18)
];

let module = new Module("JS", students);

console.log(module.average());
module.printStudents();
