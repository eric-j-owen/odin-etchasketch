
function generateGrid (rows, cols) {
    const grid = document.querySelector("#grid");
    
    if(rows > 100 || cols > 100) return "ERROR: Must be below 100 squares.";
    
    for(i=0; i < rows; i++){
        let divCol = document.createElement('div');
        divCol.classList.add('col');
        grid.append(divCol);
        for(j=0; j < cols; j++){
            let divSquare = document.createElement('div');
            divSquare.classList.add('square');
            divCol.append(divSquare);
            divSquare.addEventListener('pointerover', (e) => {
                e.target.style.setProperty("background-color", "red");
            })
        }
    }
}

function hoverSquare(element){};
generateGrid(100, 100);