class Pila {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
        pop() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    printPila() {
        console.log(this.items.toString());
    }
}

function retirarContenedor(pila, id) {
    let pilaAuxiliar = new Pila();
    let encontrado = false;
    
    // Mover contenedores hasta encontrar el específico
    while (!pila.isEmpty()) {
        let contenedor = pila.pop();
        if (contenedor === id) {
            encontrado = true;
            break;
        } else {
            pilaAuxiliar.push(contenedor);
        }
    }
    
    // Si no se encontró el contenedor, regresar los contenedores a la pila principal
    if (!encontrado) {
        while (!pilaAuxiliar.isEmpty()) {
            pila.push(pilaAuxiliar.pop());
        }
        console.log(`El contenedor con id ${id} no se encontró.`);
        return;
    }
    
    // Regresar los contenedores de la pila auxiliar a la pila principal
    while (!pilaAuxiliar.isEmpty()) {
        pila.push(pilaAuxiliar.pop());
    }
    
    console.log(`El contenedor con id ${id} ha sido retirado.`);
}

// Ejemplo
let pilaContenedores = new Pila();
pilaContenedores.push(1);
pilaContenedores.push(2);
pilaContenedores.push(3);
pilaContenedores.push(4);
pilaContenedores.push(5);

console.log("Pila original:");
pilaContenedores.printPila();

retirarContenedor(pilaContenedores, 3);

console.log("Pila después de retirar el contenedor:");
pilaContenedores.printPila();
