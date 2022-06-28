const increment = 30;
for (let i = 0; i < 12; i++) {
    const w = i * increment;
    const hours = document.querySelectorAll(".hours");
    (hours[i].style.transform = "rotate(" + w + "deg)");
}




setInterval(time, 1000);

function time() {
    const arms = document.querySelectorAll(".arms")
    const date = new Date();
    const hour = date.getHours() * 30;
    const min = date.getMinutes() * 6;
    const sec = date.getSeconds() * 6;
    arms[0].style.transform = "rotateZ(" + hour + "deg)";
    arms[1].style.transform = "rotateZ(" + min + "deg)";
    arms[2].style.transform = "rotateZ(" + sec + "deg)";
}

for (let i = 0; i < 12; i++) {
    const w = i * increment;
    const hoursSecondy = document.querySelectorAll(".hours-secondy");
    (hoursSecondy[i].style.transform = "rotate(" + w + "deg)");
}

setInterval(time2, 1000);


function time2() {
    const arms = document.querySelectorAll(".arms2")
    const date = new Date();
    const hour = date.getHours() * 30;
    const min = date.getMinutes() * 6;
    const sec = date.getSeconds() * 6;
    arms[0].style.transform = "rotateZ(" + hour + "deg)";
    arms[1].style.transform = "rotateZ(" + min + "deg)";
    arms[2].style.transform = "rotateZ(" + sec + "deg)";
}