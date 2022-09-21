/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 06
 */


window.onload = () => {
    // Variables
    const canvasDiv = document.getElementsByTagName("div")[2];
    const display = document.getElementsByTagName("div")[3];
    let canvas = null;
    let active = false;

    // Events
    canvasDiv.addEventListener("touchstart", start, false);
    canvasDiv.addEventListener("touchend", end, false);
    canvasDiv.addEventListener("touchmove", dragLoop, false);
    canvasDiv.addEventListener("mousedown", start, false);
    canvasDiv.addEventListener("mouseup", end, false);
    canvasDiv.addEventListener("mousemove", dragLoop, false);

    // Functions
    function start(element) {
        if (element.target !== element.currentTarget) {
            active = true;
            canvas = element.target;

            if (canvas) {
                if (!canvas.xOffset)
                    canvas.xOffset = 0;

                if (!canvas.yOffset)
                    canvas.yOffset = 0;

                if (element.type === "touchstart") {
                    canvas.initialX = element.touches[0].clientX - canvas.xOffset;
                    canvas.initialY = element.touches[0].clientY - canvas.yOffset;
                } else {
                    canvas.initialX = element.clientX - canvas.xOffset;
                    canvas.initialY = element.clientY - canvas.yOffset;
                }
            }
        }
    }

    function end() {
        if (canvas) {
            canvas.initialX = canvas.currentX;
            canvas.initialY = canvas.currentY;
        }
        active = false;
        canvas = null;
    }

    function dragLoop(e) {
        if (active) {
            if (e.type === "touchmove") {
                canvas.currentX = e.touches[0].clientX - canvas.initialX;
                canvas.currentY = e.touches[0].clientY - canvas.initialY;
            } else {
                canvas.currentX = e.clientX - canvas.initialX;
                canvas.currentY = e.clientY - canvas.initialY;
            }
            canvas.xOffset = canvas.currentX;
            canvas.yOffset = canvas.currentY;
            makeTranslate(canvas.currentX, canvas.currentY, canvas);
        }
    }

    function makeTranslate(xPosition, yPosition, element) {
        const x = ((canvasDiv.clientWidth + canvasDiv.style.padding) / 2) - 10;
        const y = ((canvasDiv.clientHeight) / 2) - 13;

        if (xPosition <= -x) {
            xPosition = -x;
        }
        if (yPosition <= -y) {
            yPosition = -y
        }
        if (xPosition >= x) {
            xPosition = x;
        }
        if (yPosition >= y + 6) {
            yPosition = y + 6;
        }
        element.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0)`;
        display.innerHTML = `New coordinates => {x:${x + canvas.xOffset}, y:${y + canvas.yOffset}}`;
    }
}