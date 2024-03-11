let timer;
    let minutes = 30;
    let seconds = 0;

    function startTimer() {
      timer = setInterval(updateTimer, 1000);
      document.getElementById("startBtn").disabled = true;
    }

    function updateTimer() {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "00:00";
        beep();
        document.getElementById("startBtn").disabled = false;
      } else {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }

        document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    }

    function beep() {
      
      const beepSound = new Audio("alarmsound.mp3");
      beepSound.play();
    }