document.addEventListener("DOMContentLoaded", function (){




    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    //form event listener
    form.addEventListener("submit", function(Event){

      Event.preventDefault();

    });

    //Retrieve user inputs

   const username = document.getElementById("username").value.trim();
   const email = document.getElementById("email").value.trim();
   const passsword = document.getElementById("password").value.trim();


    //Validation logic

    //Validation variables

    const isValid = true;

    const messages = [];

    //Username validation

      if (username.length < 3){

        isValid = false;
        messages += "Username should have a minimum of 3 characters";

      };
    
    //Email Validation
      if (email.includes("@", ".") === false){
        isValid = false;
        messages += "Please enter a valid email address";

      };

    //Password Validation
    if (passsword.length < 8 ){
      isValid = false;
      messages += "Password should be 8 characters long";

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