function createGrid(x){

    const container = document.querySelector('#container');
    container.style.setProperty('--grid-size', x);
    
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <=x; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-items');
            container.appendChild(newDiv);
        }
    }
    
}

createGrid(16);