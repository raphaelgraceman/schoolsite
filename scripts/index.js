addEventListener("load", () => {
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const hideslides = "slides-hidden", count = slides.length;

    nextSlide();
    function nextSlide(){
        slides[(index ++) % count].classList.add(hideslides);
        slides[index % count].classList.remove(hideslides);
        setTimeout(nextSlide, 3000);
    }
})

//Accessing the welcome_banner DOM 
document.getElementById("welcome_banner").style.background = "red";
//Change back to normal after 3 second
setTimeout(() => document.getElementById("welcome_banner").style.background = "", 3000);
//change the color to blue
setTimeout(() => document.getElementById("welcome_banner").style.background = "Blue", 3000);

//Access the hamburger and the navimenu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//Add event listener to the hamburger to activate the menu
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//Also, add a click event to each of the page links.
//Now when the user  clicks on a link, the menu goes into hiding.
document.querySelectorAll(".nav-items").forEach(n => n.addEventListener("click", () => {
    document.querySelector(".nav-link").style.color = "Red";

}))

//Now when the user  clicks on a link, the link color changes.
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}))

//Display the Current Date of the Home Region
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Fridays",
    "Saturday"
];
//month long details
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Äugust",
    "September",
    "October",
    "November",
    "December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = monthNames[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
document.getElementById("currentyear").textContent = year;
const currentdate = "     " + dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById("currentdate").textContent = currentdate;
document.getElementById("currentDate").textContent = currentdate;
