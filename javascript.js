console.log("Hello world!");

let container = document.querySelector('#container')

for (i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.style.backgroundColor = 'grey';
    container.appendChild(square);
};