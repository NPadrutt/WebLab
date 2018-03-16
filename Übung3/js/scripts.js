$(document).ready(function() {

    var minutesStart = 0;
    var secondsStart = 0;

    var minutesCurrentValue = 0;
    var secondsCurrentValue = 0;

    var myInterval;

    $("#btnStart").click(startTimer);
    $("#btnStop").click(stopTimer);
    $("#btnReset").click(resetTimer);


    function startTimer() {
        minutesStart = $("#timeLabelMinutes").text();
        secondsStart = $("#timeLabelSeconds").text();

        minutesCurrentValue = $("#timeLabelMinutes").text();
        secondsCurrentValue = $("#timeLabelSeconds").text();

        myInterval = setInterval(reduceTime, 1000)
    }

    function reduceTime(){

        if(secondsCurrentValue == 0){
            minutesCurrentValue --;
            secondsCurrentValue = 59;
        } else {
            secondsCurrentValue--;
        }

        $("#timeLabelMinutes").text(minutesCurrentValue);
        $("#timeLabelSeconds").text(secondsCurrentValue);
    }

    function stopTimer() {
        clearInterval(myInterval);
    }

    function resetTimer() {
        stopTimer();

        $("#timeLabelMinutes").text(minutesStart);
        $("#timeLabelSeconds").text(secondsStart);
    }
});