function createGrid(x){

    const container = document.querySelector('#container');

    
    for(let i = 0; i <= x; i++) {
        for(let j = 0; j <=x; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            container.appendChild(newDiv);
        }
    }
    
}

createGrid(16);