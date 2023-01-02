function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}


// const registerPassword = document.querySelector('form.register #password');
// const registerConfirmPassword = document.querySelector('form.register #confirm-pass');

// registerPassword.addEventListener('input', function () {
// 	registerConfirmPassword.pattern = `${this.value}`;
// })
// let container = document.querySelector(".container"),
// pwShowHide = document.querySelectorAll(".showHidePw"),
// pwFields = document.querySelectorAll(".password"),
// signUp = document.querySelector(".signup-link"),
// login = document.querySelector(".login-link");

// //   js code to show/hide password and change icon
// pwShowHide.forEach(eyeIcon =>{
//   eyeIcon.addEventListener("click", ()=>{
//       pwFields.forEach(pwField =>{
//           if(pwField.type ==="password"){
//               pwField.type = "text";

//               pwShowHide.forEach(icon =>{
//                   icon.classList.replace("uil-eye-slash", "uil-eye");
//               })
//           }else{
//               pwField.type = "password";

//               pwShowHide.forEach(icon =>{
//                   icon.classList.replace("uil-eye", "uil-eye-slash");
//               })
//           }
//       }) 
//   })
// })



var email = document.getElementById("login-email").value;
var password = document.getElementById("login-password").value;
let signUpPassword=document.getElementById("signup-password").value;
let signupEmail=document.getElementById('signup-email').value;
console.log(signUpPassword);
console.log(signupEmail);

function signup() {
	console.log('working');
// storing input from register-form
const userInfo={
    email:signupEmail,
    password:signUpPassword
};
var userInfoJson =  JSON.stringify(userInfo);
localStorage.setItem('userInfo',userInfoJson);
window.location.href='/index.html'
}

function loginFunc(){
let lsPass=JSON.parse(localStorage.getItem('userInfo')).password;
let lsEmail=JSON.parse(localStorage.getItem('userInfo')).email;
if(email==lsEmail && password==lsPass){
// console.log('is login');
window.location.href='/index.html'

}
}