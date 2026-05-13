console.log("Hello day 7 js");

function check(){
    console.log("Button is working");
    let uname = document.getElementById("uname").value;

    let pass =document.getElementById("pass").value;

    if(uname =="Komal" && pass=="12345"){
        console.log("Login successful");
    }
    else{
        console.log("Login failed");
    }
}

//confirm and the alert box
// alert("This is an alert box");
//task  : create a form  with the username and password and a login button and on click of the login button check the username
// and password and if the username is "Komal" and password is "12345" then print login successful else print login failed
//check butten there all infornt of of the each input