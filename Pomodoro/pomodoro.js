window.onload = () => {
  
  /* Timer */
  let currentTime; // Tiempo que dure cada ciclo
  let seconds = 0; // Con esta variable avanzamos en el timer

  /* Pomodoro */
  let workTime;
  let breakTime;
  let restTime;
  let timesCompleted; /*Cuanto tiempos completamos */
  let cyclesGoal; /*Cantidad de ciclos que quiera hacer el usuario */
  let cyclesCompleted = 0; // Variable que nos indica el receso largo

  /*Con esta funcion seteamos e iniciamos el timer */

  function timer() {
    if (currentTime > 0 || seconds > 0) {
      if (seconds == 0) {
        seconds = 59;
        currentTime--;
      } else {
        seconds--;
      }
      updateClock();
      /*Con esto lo vemos en la consola para hacer 
        el debugging de ser necesario  */
      console.log(currentTime, seconds);
      interval = setTimeout(timer, 1000);
    } else {
      pomodoroController();
      //console.log("El temporizador termino");
    }
  }

  /* Con esto controlamos los ciclos y sesiones */

  function pomodoroController() {
    if (isRestTime()) {
      cyclesCompleted++;
      if (!goalReached()) {
        currentTime = restTime;
        timer();
        timesCompleted = 0;
      } else {
        console.log("Pomodoro Finished!");
      }
      return;
    }

    if (timesCompleted % 2 == 0) {
      currentTime = workTime;
      timesCompleted++;
      timer();
      console.log(
        "Time to Work! TC:" + timesCompleted + ", cycles:" + cyclesCompleted
      );
    } else {
      currentTime = breakTime;
      timesCompleted++;
      timer();
      console.log(
        "Time to Break! TC:" + timesCompleted + ", cycles:" + cyclesCompleted
      );
    }
  }

  /* Verificaciones */

  function isRestTime() {
    return timesCompleted == 7;
  }

  function goalReached() {
    return cyclesGoal == cyclesCompleted;
  }

  /* Conexion con el frontend  */
  let clock = document.getElementById("clock");
  let cyclesInput = document.getElementById("cycles-input");
  let startButton = document.getElementById("start-button");
  let workTimeInput = document.getElementById("work-time");
  let breakTimeInput = document.getElementById("break-time");
  let restTimeInput = document.getElementById("rest-time");


  function populatedVariables() {
    console.log("populated variables");
    workTime = workTimeInput.value;
    breakTime = breakTimeInput.value;
    restTime = restTimeInput.value;
    cyclesGoal = cyclesInput.value;
    timesCompleted = 0;
  }

     /*Funcionalidad del boton */
     startButton.onclick = () => {
        populatedVariables();
        startPomodoro();
      };
    
      function startPomodoro() {
        console.log("started pomodoro");
        pomodoroController();
      }
      

  /*Clock*/
  let clockMinutes;
  let clockSeconds;

  function updateClock() {
    clockMinutes = formatNumbers(currentTime);
    clockSeconds = formatNumbers(seconds);
    clock.innerHTML = clockMinutes + ":" + clockSeconds;
  }

  function formatNumbers(time) {
    let formattedDigits;
    if (time < 10) {
      formattedDigits = "0" + time;
    } else {
      formattedDigits = time;
    }
    return formattedDigits;
  }
};
