// setInterval() --> use for setInterval(functionName, Period(ms)) function to execute function withing period of time

setInterval(updateClock, 1000);

function updateClock(){
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var seconds = myDate.getSeconds();

    if(hour < 10) { hour = "0" + hour; }
    if(minute < 10) { minute = "0" + minute; }
    if(seconds < 10) { seconds = "0" + seconds; }

    var time = hour + ":" + minute + ":" + seconds

    document.getElementById("clock").innerText = time;
}