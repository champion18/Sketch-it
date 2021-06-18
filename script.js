function createGrid(numOfCellsInEachRow = 16) {
    const container = document.querySelector('#container');

    for (let i = 0; i < numOfCellsInEachRow; i++) {
        for (let j = 0; j < numOfCellsInEachRow; j++) {
            let cell = document.createElement("div");
            cell.classList.add('cell');
            // cell.textContent=num;
            //cell.setAttribute('style', 'background: black; height: 20px; width:20px ;outline:2px yellow');
            console.log('adding cells');
            let sizeOfCell = 960/numOfCellsInEachRow;
            size = sizeOfCell + "px";
            cell.style.height = size;
            cell.style.width = size;
            cell.style.backgroundColor = 'white';
            container.appendChild(cell);
        }
    }
}

function defaultColour(){
// let colour = document.querySelector('#container');
// colour.addEventListener('mouseover', function (e) {
//     e.target.style.backgroundColor = '#1e1eab';
// });
let cells = document.querySelectorAll('.cell');
//let random_colour = random_rgb();
cells.forEach(cell => {
    cell.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = '#1e1eab';
        });
    });
}

function clearGrid() {
    //console.log("clear grid");
    // container.style.backgroundColor = 'white';
    const cells = document.querySelectorAll('.cell');
    // cells.style.backgroundColor = 'white';
    // console.log("clear grid");
    cells.forEach(cell => {
    //    console.log(cell);
        cell.style.backgroundColor = 'white';
    });
}

function makeNewGrid() {
    let numOfCellsInEachRow = prompt("Enter number of cells per row and column for new grid[1-100]:");
    if (numOfCellsInEachRow <= 100) {
        numOfCellsInEachRow = parseInt(numOfCellsInEachRow);
        removeGrid();
        createGrid(numOfCellsInEachRow);
    }
    else {
        const numOfCellsInEachRow = confirm("Enter a size less than or equal to 100.");
        makeNewGrid();
    }
}

function removeGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.remove();
        console.log('removing');
    });
}

function randomColour(){
    function random_rgb(){
        let o = Math.round, r = Math.random, n = 255;
        return 'rgb(' + o(r()*n) +',' + o(r()*n) +',' + o(r()*n) +')';
    }

    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = random_rgb();
        });
    });
}

function eraseCellColour(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'white';
        });
    });
}

window.onload=createGrid();
window.onload=defaultColour();

