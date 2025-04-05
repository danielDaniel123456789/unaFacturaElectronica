function colorTexto() {
    const color = document.getElementById('colorPicker').value; // Obtén el color seleccionado
    const puzzlePieces = document.querySelectorAll('.puzzle-piece'); // Selecciona todas las piezas del rompecabezas

    puzzlePieces.forEach(piece => {
        piece.style.color = color; // Cambia el color del texto de cada pieza
    });
}
