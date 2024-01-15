const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    // crear método para aprobar curso
    // aprobarCurso: function() {}
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

// Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");


// Crear un prototipo
function Student(name,age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function (nuevoCursito) {
    //    this.cursosAprobados.push(nuevoCursito);
    //}

}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

// crear instancia de student
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);

// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

const miguelito = new Student2({
    email: "miguelito@platzi.com",
    name: "Miguel",
    age: 28,
});

miguelito.aprobarCurso("Curso de Tableau");
