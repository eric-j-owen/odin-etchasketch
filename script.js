const ROWS = 16;
const COLUMNS = 16;

const container = document.querySelector("#container");
let grid = [];
let div = document.createElement('div');

for(i=0; i < ROWS; i++){
    grid.push([])
    for(j=0; j < COLUMNS; j++){
        grid[i].push("%");
    }
}

console.log(grid);