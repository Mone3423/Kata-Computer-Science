function reemplazar(pila, nuevo, viejo) {
    let pilaCopia = [...pila];
    let indice = pilaCopia.length - 1;
    while (indice >= 0) {
        if (pilaCopia[indice] === viejo) {

            pilaCopia[indice] = nuevo;
            
            return pilaCopia.slice(0, indice + 1);
        }
        indice--;
    }
    
    return pilaCopia;
}

// Ejemplo
const resultado = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2);
console.log(resultado);  
