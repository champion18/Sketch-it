const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        // cell.textContent=num;
        //cell.setAttribute('style', 'background: black; height: 20px; width:20px ;outline:2px yellow');
        console.log(cell);
        container.appendChild(cell);
    }
}