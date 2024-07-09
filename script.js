const container = document.querySelector(".Container")
const CONTAINER_WIDTH = 800;
const CONTAINER_HEIGHT = 800;
const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener("click", () => {
    deleteChild(container);
    row = Math.min(input.value, 100);
    console.log(row);
    setup();
})

container.style.width = `${CONTAINER_WIDTH}px`;
container.style.height = `${CONTAINER_HEIGHT}px`;
let row = 16;
setup();


function setup () {
    for (let i = 0; i < row*row; i++) {
        let square = document.createElement("div");
        square.style.borderColor = "BLACK";
        square.style.height = `${CONTAINER_WIDTH/row}px`;
        square.style.width = `${CONTAINER_WIDTH/row}px`;
        square.style.borderStyle = "solid";
        square.addEventListener("mouseover", (e => {
            e.target.style.backgroundColor = "BLACK";
        }))
        container.appendChild(square);
    }
}

function deleteChild(e) {
    //e.firstElementChild can be used. 
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

console.log("hello");