function validateForm(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let form = document.getElementById("input-form");
    let mail = document.getElementById("mail");

    // Validate each input fields data
    // If there is an issue, change label colors to red
    // If everything works, change to green.
    if (fname == ""){
        form.style.color = "red";
        setTimeout(function() { //to make text change happen before alert, pause JS
            alert("Please fill out the first name field.");
          }, 10)
    }
    else if (lname == ""){
        form.style.color = "red";
        setTimeout(function() {
            alert("Please fill out the last name field.");
          }, 10)
    }
    else if (email == ""){
        form.style.color = "red";
        setTimeout(function() {
            alert("Please fill out the email field.");
          }, 10)
    }
    else{
        form.style.color = "white";
        mail.innerHTML="Thank you for Joining!";
        setTimeout(function() {
            alert("Thank you for your patronage!");
          }, 10)
    }

}