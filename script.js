function register(e){
     e.preventDefault()
    const name=document.getElementById("registeredname").value;
    const email=document.getElementById("registeredemail").value;
    const password=document.getElementById("registeredpassword").value;
    const confirm=document.getElementById("confirmpassword").value;
    if(!name||!email||!password||!confirm){
        alert("Please fill all fields");
        return;
    }
    if(password!==confirm){
        alert("password don't match")
        return;
    }
    const user={name,email,password,confirm};
    localStorage.setItem("usercopy",JSON.stringify(user));
    alert("User Registered Successfully Now login with your credentials");
    window.location.href="login.html"
}
function login(e){
    e.preventDefault()
   const loginmail= document.getElementById("loginemail").value;
   const loginpassword =document.getElementById("loginpassword").value;
   const stored=JSON.parse(localStorage.getItem("usercopy"))
   if (loginmail===stored.email&& loginpassword==stored.password){
    alert("User login Successfully")
    window.location.href="welcome.html"
   }
   else{
    alert("Please fill valid credentiasl")
    return;
   }   
}