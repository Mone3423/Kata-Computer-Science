function procesarCola(cola) {
    let colaFinal = [];
    let retirados = [];

    while (cola.length > 0) {
        let usuario = cola.shift(); 
        if (usuario.ticket) {
            colaFinal.push(usuario); 
        } else {
            retirados.push(usuario); 
        }
    }

    return { colaFinal, retirados };
}

// Ejemplo
let colaInicial = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true },
];

let { colaFinal, retirados } = procesarCola(colaInicial);

console.log("Cola inicial:", colaInicial);
console.log("Elementos retirados:", retirados);
console.log("Cola final:", colaFinal);


