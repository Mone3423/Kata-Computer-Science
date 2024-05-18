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


