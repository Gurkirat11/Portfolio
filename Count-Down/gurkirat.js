const daysEl = document.getElementById("day");
const secondsEl = document.getElementById("sec");
const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minu");




 const year = "31 Dec 2021";

function countdown () {
	 const yearDate = new Date(year);
	 const currentDate  = new Date();
    const totalseconds = (yearDate-currentDate)/1000;

    
    const days = Math.floor(totalseconds/3600/24);

    const seconds = Math.floor(totalseconds)%60;

    const hours = Math.floor((totalseconds / 3600) % 24);

    const minutes = Math.floor(totalseconds / 60) % 60;



   

daysEl.innerHTML = days;
secondsEl.innerHTML = seconds;
minutesEl.innerHTML = minutes;
hoursEl.innerHTML = hours;

	
}



countdown();
setInterval(countdown,1000);