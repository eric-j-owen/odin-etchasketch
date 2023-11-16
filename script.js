
function generateGrid (squares) {
    const grid = document.querySelector("#grid");
    grid.innerHTML = '';

    if(squares > 100) return console.log("ERROR: Must be below 100 squares.");
    
    for(i=0; i < squares; i++){
        let divCol = document.createElement('div');
        divCol.classList.add('col');
        grid.append(divCol);
        for(j=0; j < squares; j++){
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
generateGrid(100);