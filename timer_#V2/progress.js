const circle = document.querySelector(".progress-ring_circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference; //Border style that allows you to define the width of the dashes and the gap between them
circle.style.strokeDashoffset = circumference; //decreasing strokeDasharray

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}
