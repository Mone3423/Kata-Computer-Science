function dividirCola(colores) {
    let cola1 = []; 
    let cola2 = []; 

    // Iteramos
    for (let i = 0; i < colores.length; i++) {
        if (i % 2 === 0) {
           
            cola1.push(colores[i]);
        } else {
            cola2.push(colores[i]);
        }
    }

    return [cola1, cola2];
}

// Ejemplo 
const colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
const [cola1, cola2] = dividirCola(colaOriginal);

console.log("Cola original:", colaOriginal);
console.log("Cola 1:", cola1);
console.log("Cola 2:", cola2);


