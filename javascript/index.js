function updateTime(){
let londonElement = document.querySelector("#ldn");
let londonDateElement=londonElement.querySelector(".date");
let londonTimeElement=londonElement.querySelector(".time");
let londonTime=moment().tz("Europe/London");

londonDateElement.innerHTML=londonTime.format("Do [of] MMMM YYYY");
londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small]");

let jakartaElement = document.querySelector("#jkr");
let jakartaDateElement=jakartaElement.querySelector(".date");
let jakartaTimeElement=jakartaElement.querySelector(".time");
let jakartaTime=moment().tz("Asia/Jakarta");

jakartaDateElement.innerHTML=jakartaTime.format("Do [of] MMMM YYYY");
jakartaTimeElement.innerHTML=jakartaTime.format("h:mm:ss [<small>]A[</small]");
}

function updateCity (event){
    let timeZoneCity=event.target.value;
    let cityName=timeZoneCity.replace("_", " ").split("/")[1];
    let cityTime=moment().tz(timeZoneCity);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=`
    <div class="city"> 
    <div>
        <h3>${cityName} </h3>
        <div class="date"> ${cityTime.format("Do [of] MMMM YYYY")}</div>
        </div>
        <div class="time"> ${cityTime.format("h:mm")} <small>${cityTime.format("A")}</small> </div>
    </div>
    `
}

updateTime();
setInterval(updateTime, 1000);

// add event listener to select
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

// replace (change innerhtml) when city is chosen