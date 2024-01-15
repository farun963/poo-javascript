const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctivo Definitivo de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctivo Definitivo de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Introducción a la Producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ],
        },
    ],
};

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Databusiness",
        "Curso Dataviz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctivo Definitivo de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso Databusiness",
                "Curso DataViz",
                "Curso de Tableau",
            ],
        },
    ],
};


class LearningPath {
    constructor({
      id,
      name,
      courses = [],
    }) {
      this.id = id;
      this.name = name;
      this.courses = courses;
    }
};

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctivo Definitivo de HTML y CSS",
        "Curso de Responsive Design",
    ],
},);
const escuelaData = new LearningPath();
const escuelaVgs = new LearningPath();

// transformar estos objetos en clases

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    
};

const juan2 = new Student({
    name: "juanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelitoc",
});