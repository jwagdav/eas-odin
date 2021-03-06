const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const div = document.querySelector('#container');

    div.innerHTML = '';

    let grid = window.prompt("Enter grid size");
    if(grid > 100){
        alert("Sorry, we can't do a grid that big");
    } else {
        createGrid(grid);
    }

});

function createGrid(x){

    const container = document.querySelector('#container');
    container.style.setProperty('--grid-size', x);

    
    
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <=x; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-items');
            container.appendChild(newDiv);

            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = makeRGB();
            });

            
        }
    }
    
}

function randomNum(num){
    const randomNumber = Math.floor(Math.random() * (num + 1));
    return randomNumber;
}

function makeRGB(){
    let newRGB = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)}, ${randomNum(100)})`;
    return newRGB;
}



createGrid(16);

