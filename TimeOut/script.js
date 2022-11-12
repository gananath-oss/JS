// setTimeout()    --> method to auto time out after some time period
// setInterval()   --> method use to display count down 
// window.location --> property use to load logout page

setTimeout(logoutUser, 60000);

function logoutUser (){
    window.location = "logout.html";
}

var timer = document.getElementById("timer");
var duration = 60;

setInterval(updateTimer, 1000);

function updateTimer(){
    duration--;
    timer.innerText = duration;
}

window.addEventListener("mousemove", function(){
    duration = 60;
})