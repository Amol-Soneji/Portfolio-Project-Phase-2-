let drawingArea = document.getElementById("drawingArea");
let clearButton = document.getElementById("clearButton");
let saveButton = document.getElementById("saveButton");

//Setting up the canvas element, as it uses properties that are different to CSS.  Using only CSS would infact scale everything on canvas.
let xSize = (90 * window.innerWidth) / 100;
let ySize = (62 * window.innerHeight) / 100;
drawingArea.width = xSize;
drawingArea.height = ySize;
const drawingViewProperties = drawingArea.getBoundingClientRect();

let drawRendering = drawingArea.getContext("2d");
let canvasPresenting;

async function initializeCanvasPresenter() {
    const inkInstance = navigator.ink;
    canvasPresenting = await inkInstance.requestPresenter({ presentationArea: drawingArea });
}
initializeCanvasPresenter();
let pressingDraw = false;

drawingArea.addEventListener("pointerdown", () => pressingDraw = true);
drawingArea.addEventListener("pointermove", drawOnCanvas);
drawingArea.addEventListener("pointerup", () => pressingDraw = false);
clearButton.addEventListener("click", clearDrawingArea);
saveButton.addEventListener("click", saveDrawing);

async function drawOnCanvas(event) {
    if (!pressingDraw) {
        //Do nothing.  
        return;
    }
    let fillColor = {
        color: "#2B2B2B",
        diameter: 10
    };
    drawRendering.fillStyle = fillColor.color;
    drawRendering.beginPath();
    //drawRendering.roundRect(event.offsetx, event.offsetY, 4, 4, 4, 4, [2]);
    drawRendering.roundRect(event.pageX - drawingViewProperties.left, event.pageY - drawingViewProperties.top, 4, 4, 4, 4, [2]);
    drawRendering.fill();
    await canvasPresenting.updateInkTrailStartPoint(event, fillColor);
}

function clearDrawingArea() {
    drawRendering.clearRect(0, 0, drawingArea.width, drawingArea.height);
}

function saveDrawing() {
    let imgURLData = null;
    drawingArea.toBlob((blob) => {
        imgURLData = URL.createObjectURL(blob);
        window.open(imgURLData);
    }, "image/png");
    setTimeout(() => {
        URL.revokeObjectURL(imgURLData);
    }, 5000);
}

