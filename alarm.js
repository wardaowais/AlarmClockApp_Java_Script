
let audio
function populateSelect(elementId, range) {
    const select = document.getElementById(elementId);
    for (let i = 0; i < range; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i.toString().padStart(2, '0');
        select.appendChild(option);
    }
}
function playAlarm(){
    audio = new Audio('alarm/alarm.mp3')
    audio.play()
}


 //time printing
 setInterval(() => {
    let d = new Date()
    time.innerHTML = d.toDateString() + " " + d.toTimeString()
  
  }, 1000)



function stopAlarm(){
    audio.pause()
    

  }
function setAlarm(){

   

    const hours =parseInt( document.getElementById("hours").value)
    const minutes =parseInt( document.getElementById("minutes").value)
    const seconds =parseInt( document.getElementById("seconds").value)
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
        hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        alert("Please set a valid time for the alarm.");
        return;
    }

    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(seconds);

    document.getElementById('alarm').innerHTML = `Alarm set for ${alarmTime.toLocaleTimeString()}`;

    const alarmInterval = setInterval(() => {
        const currentTime = new Date();
        if (currentTime.getHours() === alarmTime.getHours() &&
            currentTime.getMinutes() === alarmTime.getMinutes() &&
            currentTime.getSeconds() === alarmTime.getSeconds()) {
          
            playAlarm()
            const stop = document.getElementById("stop").innerHTML = ' <button  class="btn btn-primary btn-lg px-4 gap-3"  onclick="stopAlarm()">Stop Alarm</button>'
        }
    }, 1000);
}
populateSelect('hours', 24);
populateSelect('minutes', 60);
populateSelect('seconds', 60);


