function validateForm(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let fnameLabel = document.getElementById("fname-label");
    let lnameLabel = document.getElementById("lname-label");
    let emailLabel = document.getElementById("email-label");
    let mail = document.getElementById("mail");

    // Validate each input fields data
    // If there is an issue, change incorrect input label color to red
    // If everything works, change to green.
    if (fname == "" && lname == "" && email == ""){     //all 3 inputs blank, change label colors to red, change mail text to default, display related alert 
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "red";
        lnameLabel.style.color = "red";
        emailLabel.style.color = "red";
        setTimeout(function() { //to make text change happen before alert, pause JS
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname == "" && lname=="" && email!==""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "red";
        lnameLabel.style.color = "red";
        emailLabel.style.color = "white";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname == "" && lname !== "" && email==""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "red";
        lnameLabel.style.color = "white";
        emailLabel.style.color = "red";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname !== "" && lname == "" && email == ""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "white";
        lnameLabel.style.color = "red";
        emailLabel.style.color = "red";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname !== "" && lname !== "" && email==""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "white";
        lnameLabel.style.color = "white";
        emailLabel.style.color = "red";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname !== "" && lname == "" && email!==""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "white";
        lnameLabel.style.color = "red";
        emailLabel.style.color = "white";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname == "" && lname !== "" && email!==""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "red";
        lnameLabel.style.color = "white";
        emailLabel.style.color = "white";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else if (fname !== "" && lname == "" && email!==""){
        mail.innerHTML="Join our Mailing List!";
        mail.style.textDecoration = "underline";
        fnameLabel.style.color = "white";
        lnameLabel.style.color = "red";
        emailLabel.style.color = "white";
        setTimeout(function() {
            alert("Please fill out all the fields.");
            }, 10)
    }
    else{
        fnameLabel.style.color = "white";
        lnameLabel.style.color = "white";
        emailLabel.style.color = "white";
        mail.innerHTML="Thank you for Joining!";
        mail.style.textDecoration = "underline";
        setTimeout(function() {
            alert("Thank you for your patronage!");
            }, 10)
    }    
}

