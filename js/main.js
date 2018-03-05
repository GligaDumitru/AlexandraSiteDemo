document.getElementById("checkBoxId").addEventListener("click", changeType);

function changeType() {

    var valuePassword = document.getElementById('password');
   if(valuePassword.type == "text")
     valuePassword.type = "password";
   else
     valuePassword.type = "text";    
}