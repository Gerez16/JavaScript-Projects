function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
    seconds = seconds - 1;
    TimeRanges.innerHTML = seconds;
    var time =setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");
        clearTimeout(time);
        TimeRanges.innerHTML = "";
            }
    }
    tick();
}


function countdown() {
    var minutes = document.getElementById("minutos").value;

    function tick() {
        minutes = minutes - 60,
        TimeRanges.innerHTML = minutes;
        var time = setTimeout(tick,1000);
        if(minutes == -60) {
            alert("Time is up" );
            clearTimeout(time);
            TimeRanges.innerHTML = "";
        }
    tick();
    }
}