class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Método para insertar al final sin permitir duplicados
    insertar(valor) {
        if (this.existe(valor)) {
            return;
        }

        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    // Método para verificar si un valor ya existe en la lista
    existe(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor === valor) {
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    // Método para mostrar todos los valores de la lista
    mostrar() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }

    // Método para mostrar valores mayores que un valor dado
    mostrarMayoresQue(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor > valor) {
                console.log(actual.valor);
            }
            actual = actual.siguiente;
        }
    }

    // Método para obtener la longitud de la lista
    obtenerLongitud() {
        let actual = this.cabeza;
        let longitud = 0;
        while (actual) {
            longitud++;
            actual = actual.siguiente;
        }
        return longitud;
    }
}

// Función para generar una lista de números al azar
function generarListaAzar(longitud, maxValor) {
    const lista = new ListaEnlazada();
    while (lista.obtenerLongitud() < longitud) {
        const valorAzar = Math.floor(Math.random() * maxValor) + 1;
        lista.insertar(valorAzar);
    }
    return lista;
}

// Crear una lista enlazada y mostrar los nodos que superen un valor determinado
const longitudLista = 10;
const maxValor = 100;
const valorFiltrar = 50;

const lista = generarListaAzar(longitudLista, maxValor);
console.log("Lista completa:");
lista.mostrar();

console.log(`Nodos con valores mayores a ${valorFiltrar}:`);
lista.mostrarMayoresQue(valorFiltrar);
