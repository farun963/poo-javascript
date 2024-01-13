const students_platzirank = [
    'Juan',
    'Juanita',
    'Nath',
    'Nora',
    'Luisa'
];

// Objetos Literales
const students_platzirank = {
    'Juan': 110,
    'Juanita': 300,
    'Nath': 700,
    'Nora': 150,
    'Luisa': 0,
};

// Prototipo en javascript (homólogo de una clase común en POO)
// con un instanciamiento de ese prototipo
function Student() {
    this.name = 'Nombre';
    this.age = 18;
    this.points = 750;
};

const juanita = new Student();   

// objeto literal ejemplo
const natalia = {
    name: 'Natalia',
    age: 20,
    points: 700,
};

