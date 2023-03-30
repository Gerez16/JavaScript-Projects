function countdown() {
    var seconds = document.getElementById("segundos").value;

    function tick() {
        seconds = seconds - 5;
        TimeRanges.innerHTML = seconds;
        var time = setTimeout(tick,5000);
        if(seconds == -5) {
            alert("Time is up" );
            clearTimeout(time);
            TimeRanges.innerHTML = "";
        }
    }    
    tick();
    
    
}