// Initializes the slide index
let slideIndex = 1;
showSlides(slideIndex);

// Used to move from slide to slide
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Used when the user clicks on an element within the gallery.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // initializes a local counter
    let i;

    // establishes arrays corresponding to each set of classes
    let slides = document.getElementsByClassName("slideShow");
    let gallery = document.getElementsByClassName("gallery");
    let description = document.getElementsByClassName("description")

    // used to refers to the caption of the slideshow
    let captionText = document.getElementById("caption");

    // This will allow the slideshow to go from its last element to its first element
    if (n > slides.length){
        slideIndex = 1
    }

    // This will allow the slideshow to go from its first element to its last element
    if (n < 1){
        slideIndex = slides.length
    }

    // This will go through all the slides within the class slideShow and set their display style to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        description[i].style.display = "none"
    }

    // This will go through all the galleries within the class gallery and remove the active class.
    for (i = 0; i < gallery.length; i++) {
        gallery[i].className = gallery[i].className.replace(" active", "");
    }

    // This will display, in block style, the corresponding slide and description based on the index value.
    slides[slideIndex-1].style.display = "block";
    description[slideIndex-1].style.display = "block";

    // This will add the active class to the corresponding gallery based on the index value.
    gallery[slideIndex-1].className += " active";
    
    // This will set the caption of the slideshow to the corresponding alt text of the current gallery selection.
    captionText.innerHTML = gallery[slideIndex-1].alt;
}

// Stores the current theme to be kept across other pages
function initialTheme() {
    if (!sessionStorage.theme) {
        sessionStorage.theme = "default";
    }
    document.getElementById("mode").value = sessionStorage.theme;
}

// Used to switch between themes
function themeSelector() {
    defaultMode();
    var option = document.getElementById("mode").value;
    if(option == "default"){
        sessionStorage.theme = "default";
    }
    else if(option == "dark"){
        darkMode();
        sessionStorage.theme = "dark";
    }
    else if(option == "light"){
        lightMode();
        sessionStorage.theme = "light";
    }
}

// Necessary to initialize the option if it was changed in a previous page
initialTheme();
themeSelector();

// Used to switch back to the default theme
function defaultMode() {
    var element = document.getElementById("body");
    if(element.classList.contains("dark-body")){
        element.classList.remove("dark-body");
    }
    else if(element.classList.contains("light-body")){
        element.classList.remove("light-body");
    }
    var boxes = document.getElementsByClassName("box");
    for(i = 0; i < boxes.length; i++){
        if(boxes[i].classList.contains("dark-box")){
            boxes[i].classList.remove("dark-box");
        }
        else if(boxes[i].classList.contains("light-box")){
            boxes[i].classList.remove("light-box");
        }
    }
    var shadows = document.getElementsByClassName("shadow");
    for(i = 0; i < shadows.length; i++){
        if(shadows[i].classList.contains("dark-shadow")){
            shadows[i].classList.remove("dark-shadow");
        }
        else if(shadows[i].classList.contains("light-shadow")){
            shadows[i].classList.remove("light-shadow");
        }
    }
}

// Used to switch to dark mode
function darkMode() {
    var element = document.getElementById("body");
    if(!element.classList.contains("dark-body")){
        element.classList.add("dark-body");
    }
    var boxes = document.getElementsByClassName("box");
    for(i = 0; i < boxes.length; i++){
        if(!boxes[i].classList.contains("dark-box")){
            boxes[i].classList.add("dark-box");
        }
    }
    var shadows = document.getElementsByClassName("shadow");
    for(i = 0; i < shadows.length; i++){
        if(!shadows[i].classList.contains("dark-shadow")){
            shadows[i].classList.add("dark-shadow");
        }
    }
}

// Used to switch to light mode
function lightMode() {
    var element = document.getElementById("body");
    if(!element.classList.contains("light-body")){
        element.classList.add("light-body");
    }
    var boxes = document.getElementsByClassName("box");
    for(i = 0; i < boxes.length; i++){
        if(!boxes[i].classList.contains("light-box")){
            boxes[i].classList.add("light-box");
        }
    }
    var shadows = document.getElementsByClassName("shadow");
    for(i = 0; i < shadows.length; i++){
        if(!shadows[i].classList.contains("light-shadow")){
            shadows[i].classList.add("light-shadow");
        }
    }
}