class Comment {
    constructor ({
        content,
        studentName,
        studentRole = "Estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.likes + " likes");
        console.log(this.content);
    }


}




class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
});


class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});


// Clase Students con instancias

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

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }

};

class FreeStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés.")
        }
    }
}

class BasicStudent extends Student {
    constructor (props) {
        super(props);
    }
}

class ExpertStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor (props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }


}





const juan2 = new FreeStudent({
    name: "juanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelitoc",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
});