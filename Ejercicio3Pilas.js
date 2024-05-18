<<<<<<< HEAD
function mostrarRecorrido(pueblos) {
    // Camino de ida
    let caminoIda = [...pueblos];
    
    // Camino de vuelta
    let caminoVuelta = [...pueblos].reverse();
    
    //Camino de ida
    console.log("Recorrido de ida:", caminoIda.join(" → "));
    
    // Camino de vuelta
    console.log("Recorrido de vuelta:", caminoVuelta.join(" → "));
}

// Ejemplo
let pueblos = ["Pueblo Origen", "pueblo 1", "pueblo 2", "destino"];
mostrarRecorrido(pueblos);


=======
function mostrarRecorrido(pueblos) {
    // Camino de ida
    let caminoIda = [...pueblos];
    
    // Camino de vuelta
    let caminoVuelta = [...pueblos].reverse();
    
    //Camino de ida
    console.log("Recorrido de ida:", caminoIda.join(" → "));
    
    // Camino de vuelta
    console.log("Recorrido de vuelta:", caminoVuelta.join(" → "));
}

// Ejemplo
let pueblos = ["Pueblo Origen", "pueblo 1", "pueblo 2", "destino"];
mostrarRecorrido(pueblos);


>>>>>>> 497d40520f8be009c52b9b27c54f9d9b17e956fb
