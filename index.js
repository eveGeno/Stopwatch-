let startTime, updatedTime, elapsedTime = 0;
let interval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to format time as 00:00:00
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Start the timer
startBtn.addEventListener('click', function() {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(function() {
        updatedTime = Date.now() - startTime;
        display.textContent = formatTime(updatedTime);
    }, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
});

// Stop the timer
stopBtn.addEventListener('click', function() {
    clearInterval(interval);
    elapsedTime = updatedTime;

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
});

// Reset the timer
resetBtn.addEventListener('click', function() {
    clearInterval(interval);
    display.textContent = "00:00:00";
    elapsedTime = 0;
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});







// let timer = 0;

// let interval; 

// setTimeout(() => {
//     intervall = setInterval(() => {
//         console.log(++timer);
//     }, 1000);
// }, 10000);

// const clearTimer = () => {
//     clearInterval(interval);
// }