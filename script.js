
function generateGrid (squares) {
    const grid = document.querySelector("#grid");
    grid.innerHTML = '';

    if(squares > 100 || squares < 0) return alert("ERROR: Must be between 1 and 100 squares.");
    
    for(i=0; i < squares; i++){
        let divCol = document.createElement('div');
        divCol.classList.add('col');
        grid.append(divCol);
        for(j=0; j < squares; j++){
            let divSquare = document.createElement('div');
            divSquare.classList.add('square');
            divCol.append(divSquare);
            divSquare.addEventListener('pointerover', (e) => {
                let randRGB1 = Math.floor(Math.random() * 255)+1;
                let randRGB2 = Math.floor(Math.random() * 255)+1;
                let randRGB3 = Math.floor(Math.random()*255)+1;

                e.target.style.setProperty("background-color", `rgb(${randRGB1},${randRGB2},${randRGB3})`);
            })
        }
    }
}

generateGrid(16);