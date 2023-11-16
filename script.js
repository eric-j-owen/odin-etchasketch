
function generateGrid(rows, cols){
    const grid = document.querySelector("#grid");
    
    if(rows > 100 || cols > 100) return "ERROR: Must be below 100 squares."
    
    for(i=0; i < rows; i++){
        let divCol = document.createElement('div');
        divCol.classList.add('col');
        divCol.classList.add('square');
        grid.append(divCol);
        for(j=0; j < cols-1; j++){
            let divRow = document.createElement('div');
            divRow.classList.add('row');
            divRow.classList.add('square');
            divCol.append(divRow);
        }
    }
    
}

generateGrid(16, 16);