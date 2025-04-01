
function updateclock(){
const dateElement=document.getElementById("date")
const timeElement=document.getElementById("time")
const now =new Date();
console.log(now)
const  hours=now.getHours()%12 ||12;
const minutes=now.getMinutes().toString().padStart(2,"0")
const second=now.getSeconds().toString().padStart(2,"0")
const ampm=now.getHours() >=12 ?"PM":"AM"

timeElement.textContent=` ${hours} :${minutes}:${second}:${ampm}`
const options={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
}

dateElement.textContent=now.toLocaleDateString(undefined,options)
}

setInterval(updateclock,1000)
updateclock()
