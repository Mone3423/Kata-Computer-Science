class Alumno {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = [];
        this.calificaciones = {};
    }

    inscribirMateria(materia) {
        if (!this.materias.includes(materia)) {
            this.materias.push(materia);
            this.calificaciones[materia] = null;
        }
    }

    asignarCalificacion(materia, calificacion) {
        if (this.materias.includes(materia)) {
            this.calificaciones[materia] = calificacion;
        }
    }

    obtenerPromedio() {
        let total = 0;
        let count = 0;
        for (let calificacion of Object.values(this.calificaciones)) {
            if (calificacion !== null) {
                total += calificacion;
                count++;
            }
        }
        return count > 0 ? (total / count).toFixed(2) : "N/A";
    }
}

let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

// Convertir objetos recuperados del localStorage a instancias de Alumno
alumnos = alumnos.map(obj => Object.setPrototypeOf(obj, Alumno.prototype));

document.getElementById('alumnoForm').addEventListener('submit', agregarAlumno);
document.getElementById('inscribirForm').addEventListener('submit', inscribirMateria);
document.getElementById('calificacionForm').addEventListener('submit', asignarCalificacion);

function agregarAlumno(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = parseInt(document.getElementById('edad').value);
    const alumno = new Alumno(nombre, apellidos, edad);
    alumnos.push(alumno);
    guardarAlumnos();
    document.getElementById('alumnoForm').reset();
    actualizarAlumnos();
}

function inscribirMateria(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreInscribir').value;
    const materia = document.getElementById('materiaInscribir').value;
    const alumno = alumnos.find(al => al.nombre === nombre);
    if (alumno) {
        alumno.inscribirMateria(materia);
        guardarAlumnos();
    }
    document.getElementById('inscribirForm').reset();
    actualizarAlumnos();
}

function asignarCalificacion(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreCalificar').value;
    const materia = document.getElementById('materiaCalificar').value;
    const calificacion = parseFloat(document.getElementById('calificacion').value);
    const alumno = alumnos.find(al => al.nombre === nombre);
    if (alumno) {
        alumno.asignarCalificacion(materia, calificacion);
        guardarAlumnos();
    }
    document.getElementById('calificacionForm').reset();
    actualizarAlumnos();
}

function actualizarAlumnos() {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    alumnos.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = `${alumno.nombre} ${alumno.apellidos} - Edad: ${alumno.edad}, Promedio: ${alumno.obtenerPromedio()}`;
        studentsList.appendChild(li);
    });
    document.getElementById('promedioGrupo').textContent = `Promedio: ${obtenerPromedioGrupo()}`;
}

function guardarAlumnos() {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

function buscarPorNombre(nombre) {
    return alumnos.filter(al => al.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

function buscarPorApellido(apellido) {
    return alumnos.filter(al => al.apellidos.toLowerCase().includes(apellido.toLowerCase()));
}

function obtenerPromedioGrupo() {
    let totalPromedio = 0;
    let count = 0;
    alumnos.forEach(alumno => {
        const promedio = parseFloat(alumno.obtenerPromedio());
        if (!isNaN(promedio)) {
            totalPromedio += promedio;
            count++;
        }
    });
    return count > 0 ? (totalPromedio / count).toFixed(2) : "N/A";
}

function ordenarAlumnosAscendente() {
    return alumnos.slice().sort((a, b) => a.obtenerPromedio() - b.obtenerPromedio());
}

function ordenarAlumnosDescendente() {
    return alumnos.slice().sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
}

function mostrarBusquedaPorNombre() {
    const nombre = document.getElementById('buscarNombre').value;
    const resultados = buscarPorNombre(nombre);
    actualizarListaBusqueda(resultados);
}

function mostrarBusquedaPorApellido() {
    const apellido = document.getElementById('buscarApellido').value;
    const resultados = buscarPorApellido(apellido);
    actualizarListaBusqueda(resultados);
}

function mostrarOrdenAscendente() {
    const ordenados = ordenarAlumnosAscendente();
    actualizarListaBusqueda(ordenados);
}

function mostrarOrdenDescendente() {
    const ordenados = ordenarAlumnosDescendente();
    actualizarListaBusqueda(ordenados);
}

function actualizarListaBusqueda(resultados) {
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    resultados.forEach(alumno => {
        const li = document.createElement('li');
        li.textContent = `${alumno.nombre} ${alumno.apellidos} - Edad: ${alumno.edad}, Promedio: ${alumno.obtenerPromedio()}`;
        studentsList.appendChild(li);
    });
}

document.getElementById('promedioGrupo').textContent = `Promedio: ${obtenerPromedioGrupo()}`;
