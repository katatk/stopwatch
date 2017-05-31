// Stopwatch function

// Get the elements to print output to
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");

var msecCount = 0;
var secCount = 0;
var minCount = 0;

var currentTime;
// when start button clicked, do something every 10 miliseconds 

function startTimer() {
    clearInterval(currentTime);
    currentTime = setInterval(function () {
        // print ms to page
        msec.innerHTML = msecCount;

        // add 10 miliseconds (function runs every 10ms)
        msecCount = msecCount + 10;

        // check if msec is at 1000, if so reset msec to 0
        if (msecCount == 1000) {
            msecCount = 0;

            //if msec is at 1000, add 1 second
            secCount++;


        }

        // if seconds are less than 10 (0-9) then add a leading 0 to innerHTML
        if (secCount < 10) {
            sec.innerHTML = "0" + secCount;
        } else {
            sec.innerHTML = secCount;
        }



        // when seconds get to 60, reset seconds to 0
        if (secCount == 60) {
            secCount = 0;

            // if seconds at 60, add 1 minute
            minCount++;

        }
        // if minutes are less than 10 (0-9) then add a leading 0 to innerHTML
        if (minCount < 10) {
            min.innerHTML = "0" + minCount;
        } else {
            min.innerHTML = minCount;
        }




    }, 10);

}

// when stop button clicked, pause set interval function 
function stopTimer() {
    clearInterval(currentTime);

}

// when reset button clicked, set values to 0

function resetTimer() {
    stopTimer();
    msecCount = 0;
    secCount = 0;
    minCount = 0;

    msec.innerHTML = "0" + msecCount;
    sec.innerHTML = "0" + secCount;
    min.innerHTML = "0" + minCount;

}
/*
msec = 0;
sec = 0;
setInterval(function () {
    if (msec == 1000) {
        msec = 0;
        sec++;
        console.log("seconds: " + sec);
    }
    msec++;
}, 0.1);*/
