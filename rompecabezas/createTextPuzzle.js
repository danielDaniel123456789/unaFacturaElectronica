function createTextPuzzle(text) {
    const words = text.split(/\s+/);  // Divide el texto por espacios
    const puzzleContainer = document.getElementById('puzzle-container');

    // Verificar si ya se ha cargado el puzzle y no recargarlo
    if (puzzleContainer.children.length > 0) {
        // Limpiar solo las piezas existentes sin borrar otras configuraciones
        while (puzzleContainer.firstChild) {
            puzzleContainer.removeChild(puzzleContainer.firstChild);
        }
    }

    // Llenar las piezas hasta 9 palabras o más si es necesario
    while (words.length < 9) {
        words.push(""); // Agregar espacios vacíos para completar las piezas
    }

    // Crear las piezas del rompecabezas en el orden correcto
    let pieces = [];
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.textContent = words[i];  // Asignar la palabra a la pieza en el orden original
        piece.draggable = true;
        piece.dataset.index = i;
        pieces.push(piece);
    }

    pieces.forEach(piece => puzzleContainer.appendChild(piece));

    pieces.forEach(piece => {
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragover', dragOver);
        piece.addEventListener('drop', drop);
    });
}
