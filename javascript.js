console.log("Hello world!");

let container = document.querySelector('#container')

for (i = 0; i < 16; i++) {
    let column = document.createElement('div')
    container.appendChild(column);
    column.classList.add("column");
    for (j = 0; j < 16; j++) {
        let square = document.createElement('div')
        square.style.backgroundColor = 'grey';
        column.appendChild(square);
        square.classList.add("square");
    };
};

