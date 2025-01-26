document.addEventListener("DOMContentLoaded", function (){




    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    //form event listener
    form.addEventListener("submit", function(){

      Event.preventDefault();

    });

    //Retrieve user inputs

   const username = document.getElementById("username").value.trim();
   const email = document.getElementById("email").value.trim();
   const password = document.getElementById("password").value.trim();


    //Validation logic

    //Validation variables

    const isValid = true;

    const messages = [];

    //Username validation

      if (username.length < 3){

        isValid = false;
        messages.push( "Username should have a minimum of 3 characters");

      };
    
    //Email Validation
      if (email.includes("@", ".") == false){
        isValid = false;
        messages.push("Please enter a valid email address") ;

      };

    //Password Validation
    if (password.length < 8 ){
      isValid = false;
      messages.push("Password should be 8 characters long") ;

    };    

    //Display feedback

    feedbackDiv = "style.display = 'block'";

    if (isValid === true){

      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } ;

    if (isValid === false){
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }







})