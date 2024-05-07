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

updateTime();
setInterval(updateTime, 1000);