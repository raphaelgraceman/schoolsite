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
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}))
