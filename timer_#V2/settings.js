const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("focusTime", focusTimeInput.value);
    localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
})

pauseBtn.addEventListener("click", () => {
    if (paused === undefined) {
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout("decrementT()", 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");
    } else {
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        paused = true;
    }
})

pauseBtn.addEventListener("click", () => {

})