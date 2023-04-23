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
    else if(option == "color-blind"){
        colorlessMode();
        sessionStorage.theme = "color-blind";
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
    if(element.classList.contains("light-body")){
        element.classList.remove("light-body");
    }
    if(element.classList.contains("colorless-body")){
        element.classList.remove("colorless-body");
    }
    var boxes = document.getElementsByClassName("box");
    for(i = 0; i < boxes.length; i++){
        if(boxes[i].classList.contains("dark-box")){
            boxes[i].classList.remove("dark-box");
        }
        if(boxes[i].classList.contains("light-box")){
            boxes[i].classList.remove("light-box");
        }
        if(boxes[i].classList.contains("colorless-box")){
            boxes[i].classList.remove("colorless-box");
        }
    }
    var shadows = document.getElementsByClassName("shadow");
    for(i = 0; i < shadows.length; i++){
        if(shadows[i].classList.contains("dark-shadow")){
            shadows[i].classList.remove("dark-shadow");
        }
        if(shadows[i].classList.contains("light-shadow")){
            shadows[i].classList.remove("light-shadow");
        }
        if(shadows[i].classList.contains("colorless-shadow")){
            shadows[i].classList.remove("colorless-shadow");
        }
    }
    var videos = document.getElementsByClassName("video");
    for(i = 0; i < videos.length; i++){
        if(videos[i].classList.contains("dark-video")){
            videos[i].classList.remove("dark-video");
        }
        if(videos[i].classList.contains("light-video")){
            videos[i].classList.remove("light-video");
        }
        if(videos[i].classList.contains("colorless-video")){
            videos[i].classList.remove("colorless-video");
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
    var videos = document.getElementsByClassName("video");
    for(i = 0; i < videos.length; i++){
        if(!videos[i].classList.contains("dark-video")){
            videos[i].classList.add("dark-video");
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
    var videos = document.getElementsByClassName("video");
    for(i = 0; i < videos.length; i++){
        if(!videos[i].classList.contains("light-video")){
            videos[i].classList.add("light-video");
        }
    }
}

function colorlessMode() {
    var element = document.getElementById("body");
    if(!element.classList.contains("colorless-body")){
        element.classList.add("colorless-body");
    }
    var boxes = document.getElementsByClassName("box");
    for(i = 0; i < boxes.length; i++){
        if(!boxes[i].classList.contains("colorless-box")){
            boxes[i].classList.add("colorless-box");
        }
    }
    var shadows = document.getElementsByClassName("shadow");
    for(i = 0; i < shadows.length; i++){
        if(!shadows[i].classList.contains("colorless-shadow")){
            shadows[i].classList.add("colorless-shadow");
        }
    }
    var videos = document.getElementsByClassName("video");
    for(i = 0; i < videos.length; i++){
        if(!videos[i].classList.contains("colorless-video")){
            videos[i].classList.add("colorless-video");
        }
    }
}