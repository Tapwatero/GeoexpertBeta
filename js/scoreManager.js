function updateScore(maxScore) {
    if (localStorage.getItem("score")) {
      localStorage.setItem("score", (parseInt(localStorage.getItem("score"))+1));
      if (localStorage.getItem("score") == maxScore) {
        start();
        endTimer();
        document.getElementById("query").disabled = true;
      }
    } else {
      if (hideTimer) {
        startTimer();
      }
      localStorage.setItem("score", 1);
    }
    setScore(localStorage.getItem("score"), maxScore);
  }
  
  
   function setScore(s, maxScore)
   {
    if (s)
    {
       document.getElementsByClassName("score")[0].textContent = s + "/" + maxScore;
    }
   }