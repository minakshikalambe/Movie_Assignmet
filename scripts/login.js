document.querySelector("form").addEventListener("submit", signin);
  
var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

function signin(event) {
  event.preventDefault();
  var pass = document.querySelector("#pass").value;
  var email = document.querySelector("#useremail").value;

  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i].userName, regdUsers[i].passwd);
    if (regdUsers[i].emailAdd == email && regdUsers[i].passwd == pass) {
      window.location.href = "index.html";
      alert("login successful")
      break;
    }
    else{
      alert("invalid Credentials")
       window.location.href="Signup.html";
       break;
    }
  }
}