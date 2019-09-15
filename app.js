const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting () {
    painting = false;
}

function onMouseUp() {
    stopPainting();
}

function onMouseDown(event) {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function init() {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}

init();