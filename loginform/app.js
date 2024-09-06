
function checkpass() {
    let pass = document.getElementById("pass").value;
    let cnfmpass = document.getElementById("cnfmpass").value;
    let email = document.getElementById("email").value;
    
    let register = document.getElementById("Registerone");

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (pass.length === 0 || cnfmpass.length === 0) {
        alert("Password fields cannot be empty!");
        return;
    }
    if (pass.length < 5) {
        alert("Password must be at least 5 characters long!");
        return;
    }
  if (pass.length != 0) {
    if(pass==cnfmpass){
    alert("password Are Match");
    window.location.href = "signin.html";
  } else {
    alert("Passwords do not match");
  }
}
}
function checkemail(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
   
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    // if (pass.length < 5) {
    //     alert("Password must be at least 5 characters long!");
    //     return false;
    // }
    if (pass.length > 5) {
        alert("Welcome to Home page");
        window.location.href = "home.html"; 
        return true;
    }
    else{
        alert("Password must be at least 5 characters long!");
        return false;
    }
    
}



