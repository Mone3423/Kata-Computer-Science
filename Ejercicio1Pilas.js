function mifuncion(pila, numero) {
    return pila.slice(0, numero);
}

// Ejemplo 
const resultado = mifuncion(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'], 4);
console.log(resultado);  
