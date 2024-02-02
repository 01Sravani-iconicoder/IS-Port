
document.getElementById("login").addEventListener("submit", login)
const lemail = document.getElementById("lem")
const lpwd = document.getElementById("lpwd")
const lusername = document.getElementById('lun')
function login(e) {
	e.preventDefault()

	let values = JSON.parse(localStorage.getItem("user"))
	console.log(values.email)
    console.log(values.username)
    console.log(values.pwd)
    console.log(lemail.value)
    console.log(lusername.value)
        console.log(lpwd.value)

        if (lemail.value == "" && lusername.value=="" && lpwd.value == "" )
        {
           alert('Give the login details')
        }
        else if((lemail.value == values.email) && (lusername.value == values.username) && (lpwd.value == values.pwd))
        {
         window.location.href = "./infinitystore.html";
        }
        else
        {
            alert("invalid login detail")
        }
}
document.getElementById('eye').addEventListener('click', function ()
{
   if (lpwd.type == "password")
   {
      lpwd.type = "text"
      document.getElementById('eye').classList.remove('fa-eye')
      document.getElementById('eye').classList.add('fa-eye-slash')
   }
   else
   {
      lpwd.type = "password"
      document.getElementById("eye").classList.add("fa-eye")
      document.getElementById("eye").classList.remove("fa-eye-slash")
   }
})
function redirectToLogin() {
   // You can change "login.html" to the actual URL of your login page
   window.location.href = "./is.html";
}