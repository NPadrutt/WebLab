$(document).ready(function() {

    var currentMinutes = $("#timeLabelMinutes").text();
    var currentSeconds = $("#timeLabelSeconds").text();

    var myInterval;

    $("#btnTimeUpLeft").click(timeUp);
    $("#btnTimeUpRight").click(timeUp);

    $("#btnTimeDownLeft").click(timeDown);
    $("#btnTimeDownRight").click(timeDown);

    $("#btnStart").click(startTimer);
    $("#btnStop").click(stopTimer);
    $("#btnReset").click(resetTimer);

    function timeUp() {
        if(currentSeconds === 55){
            currentSeconds = 00;
            currentMinutes++;
        }
        else{
            currentSeconds = parseInt(currentSeconds) + 5;
        }

        updateTimerUI();
    }

    function timeDown() {

        if(currentMinutes === 0 && currentSeconds === 0){
            alert("Timer kann nicht in den negativen Bereich gestellt werden");
            return;
        }

        if(currentSeconds === 5){
            currentSeconds = 0;
            if(currentMinutes === 0){
                return;
            }
            currentMinutes--;
        }
        else if(currentSeconds === 0 && currentMinutes !== 0) {
            currentSeconds = 55
        }
        else{
            currentSeconds = parseInt(currentSeconds) - 5;
        }

        updateTimerUI();
    }


    function startTimer() {
        myInterval = setInterval(reduceTime, 1000)
    }

    function reduceTime(){

        if(currentSeconds === 0){
            currentMinutes --;
            currentSeconds = 59;
        } else {
            currentSeconds--;
        }

        $("#timeLabelMinutes").text(currentMinutes);
        $("#timeLabelSeconds").text(currentSeconds);

        if(currentMinutes === 0 && currentSeconds === 0){
            stopTimer();
            alert("Timer fertig!");
        }
    }

    function stopTimer() {
        clearInterval(myInterval);
    }

    function resetTimer() {
        stopTimer();

        $("#timeLabelMinutes").text(2);
        $("#timeLabelSeconds").text(30);
    }

    function updateTimerUI(){
        $("#timeLabelMinutes").text(currentMinutes);
        $("#timeLabelSeconds").text(currentSeconds);
    }
});