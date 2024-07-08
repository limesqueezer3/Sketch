const container = document.querySelector(".Container")

for (let i = 0; i < 16; i++) {
    row = document.createElement("row");
    container.appendChild(row);
    row.style.display = "flex";
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.textContent = "hello";
        row.appendChild(div);
    }
}

console.log("hello");