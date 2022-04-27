
  document.querySelector("form").addEventListener("submit", formSubmit);
  var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
  function formSubmit(event) {
    event.preventDefault();
    var email = document.querySelector(".email").value;
    var pass = document.querySelector("#pass").value;
    var user = document.querySelector("#user").value;
    var mbl = document.querySelector("#mbl").value;

    var userData = {
      emailAdd: email,
      passwd: pass,
      userName: user,
      mblNum: mbl,
    };
    
   
    userStack.push(userData);

    localStorage.setItem("userDataBase", JSON.stringify(userStack));
    for(let i=0;i<userStack.length;i++)
    {
      if(userStack[i].emailAdd==email)
      {
         alert("Account has already exist")
         window.location.href = "Signup.html";
         break;
      }
      else if(email==""||pass==""||user==""||mbl=="")
      {
          alert("Fill complete datail")
          break;
      }
      else{
        alert("signup successful");
    window.location.href = "Login.html";
    break;
      }
    }
   
  }