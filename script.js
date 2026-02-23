var themeBtn = document.getElementById("themeBtn");
var changeTextBtn = document.getElementById("changeTextBtn");
var heroText = document.getElementById("heroText");
var toggleBtn = document.getElementById("toggleBtn");
var movieContainer = document.querySelector(".movieContainer");
var navLinks = document.querySelectorAll("nav ul li a");

// theme switcher 
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerText = "Dark Mode";
    }
    else {
        themeBtn.innerText = "Light Mode";
    }
});
changeTextBtn.addEventListener("click", function () {
    heroText.innerText = "Enjoy Watching on Netflix!";

});

// show and hide movies
toggleBtn.addEventListener("click", function () {
    if (movieContainer.style.display == "none") {
        movieContainer.style.display = "grid";
        toggleBtn.innerText = "Hide Movies";
    }
    else {
        movieContainer.style.display = "none";
        toggleBtn.innerText = "Show Movies";
    }
});

// active navigation bar
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        for (var j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }
        this.classList.add("active");
    });

}
