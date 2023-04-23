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