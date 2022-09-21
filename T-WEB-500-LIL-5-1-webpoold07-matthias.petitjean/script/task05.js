/*
 * EPITECH PROJECT, 2022
 * Web-pool Day 07
 * Task number : 05
 */

// Variables
canvas = document.getElementsByTagName("canvas")[0];
sound = new Audio("https://file-examples.com/storage/fe783a5cbb6323602a28c66/2017/11/file_example_MP3_700KB.mp3");
pauseButton = document.getElementsByTagName("button")[0];
stopButton = document.getElementsByTagName("button")[1];
muteButton = document.getElementsByTagName("button")[2];


// White triangle inside the canvas
if (canvas.getContext) {
    context = canvas.getContext("2d");

    // Perimeter
    context.beginPath();
    context.moveTo(6, 6);
    context.lineTo(14, 10);
    context.lineTo(6, 14);
    context.closePath();

    // Border
    context.lineWidth = 1;
    context.stroke();

    // Fill
    context.fillStyle = '#ffffff';
    context.fill();
}

// Events listener
canvas.addEventListener("click", function() {
    sound.play();
});

pauseButton.addEventListener("click", function() {
    sound.pause();
});

stopButton.addEventListener("click", function() {
    sound.pause();
    sound.currentTime = 0;
});

muteButton.addEventListener("click", function() {
    sound.muted = !sound.muted;
});