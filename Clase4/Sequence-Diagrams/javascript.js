$(document).ready(function() { 
    // var sample = 'Entrada->Salida: Función';
    // var sample = 'Title: Esto es un título';
    // var sample = 'Izquierda-->Derecha: Ir en este sentido';
    // var sample = 'Izquierda->>Derecha: Ir en este sentido';
    // var sample = 'Izquierda-->>Derecha: Ir en este sentido';
    var sample = 'A->C: Uno \n B->C: Dos';


    var diagram = Diagram.parse(sample);

    diagram.drawSVG('diagram', {
        theme: 'hand'    // o 'simple'
    });
});
