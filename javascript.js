console.log("Hello world!");

let container = document.querySelector('.container')

for (i = 0; i < 16; i++) {
    let column = document.createElement('div')
    container.appendChild(column);
    column.classList.add("column");
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div')
        column.appendChild(square);
        square.classList.add("square");
    };
};

let coloredSquares = document.querySelectorAll('.square')
console.log(coloredSquares);

coloredSquares.forEach((coloredSquare) => (coloredSquare.addEventListener('mouseover', () => {
    console.log("Hover");
    coloredSquare.classList.add("coloredSquare");

})))

let btn = document.querySelector('button');
let containerContainer = document.querySelector('#containerContainer')

btn.addEventListener('click', () => {
    
    let resolution = prompt("Number of squares per side?", "16");
    
    if (resolution > 100) {
        alert('Too many squares!');
    } 
    
    else {
        let newContainer = document.createElement('div');
        newContainer.classList.add('container');
        containerContainer.removeChild(containerContainer.lastElementChild);
        containerContainer.appendChild(newContainer);
        
        for (i = 0; i < resolution; i++) {
            let column = document.createElement('div')
            newContainer.appendChild(column);
            column.classList.add("column");
            for (j = 0; j < resolution; j++) {
                let square = document.createElement('div')
                column.appendChild(square);
                square.classList.add("square");
            };
        };

        let coloredSquares = document.querySelectorAll('.square')
        console.log(coloredSquares);

        coloredSquares.forEach((coloredSquare) => (coloredSquare.addEventListener('mouseover', () => {
            console.log("Hover");
            coloredSquare.classList.add("coloredSquare");
        
        })))  }
})