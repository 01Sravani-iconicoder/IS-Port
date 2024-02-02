
const regForm = document.getElementById('regForm');
regForm.addEventListener('submit', regCall)
const name = document.getElementById('na')
const email = document.getElementById('em')
const username = document.getElementById('un')
const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')
document.getElementById('eye').addEventListener('click', function ()
{
   if (pwd.type == "password")
   {
      pwd.type = "text"
      document.getElementById('eye').classList.remove('fa-eye')
      document.getElementById('eye').classList.add('fa-eye-slash')
   }
   else
   {
      pwd.type = "password"
      document.getElementById("eye").classList.add("fa-eye")
      document.getElementById("eye").classList.remove("fa-eye-slash")
   }
})
document.getElementById('eyec').addEventListener('click', function ()
{
   if (cpwd.type == "password")
   {
      cpwd.type = "text"
      document.getElementById('eyec').classList.remove('fa-eye')
      document.getElementById('eyec').classList.add('fa-eye-slash')
   }
   else
   {
      cpwd.type = "password"
      document.getElementById("eyec").classList.add("fa-eye")
      document.getElementById("eyec").classList.remove("fa-eye-slash")
   }
})

 function validation()
{   
   if (name.value.trim() === '')
   {
      document.getElementById("nameError").style.display='block'
      document.getElementById('nameError').textContent="Please enter the name"
  }
    if (email.value.trim() == "")
    {
       document.getElementById("emailError").style.display = "block";
     document.getElementById("emailError").textContent = "Please enter valid email"  
    }
    if (!username.value.length >= 8)
    {
       document.getElementById("userError").style.display = "block";
     document.getElementById("userError").textContent = "Please enter valid Username"  
    }
    if (!pwd.value.length >= 8)
    {
       document.getElementById("pwdError").style.display = "block";
					document.getElementById("pwdError").textContent =
						"Please enter password of minimum eight characters" 
    }
    if (cpwd.value !== pwd.value)
    {
        document.getElementById("cpwdError").style.display = "block"
				document.getElementById("cpwdError").textContent =
					"Please enter password of minimum eight characters" 
       }
}
function regCall(e)
{
   console.log(e)
   e.preventDefault();
   validation();
   let user = {
      name: name.value, email: email.value, username:username.value, pwd: pwd.value
   }
   localStorage.setItem("user",JSON.stringify(user))
   clearItems();
   
}
function clearItems ()
{
   name.value= ""
   email.value= ""
   username.value = ""
   pwd.value = ""
   cpwd.value=""
}
const signup_submit = document.getElementById('signup_submit')
signup_submit.addEventListener('click',validation())
function redirectToLogin() {
   // You can change "login.html" to the actual URL of your login page
   window.location.href = "./login.html";
}
