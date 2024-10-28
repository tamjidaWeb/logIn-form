let signinBtn = document.getElementById('signinBtn');
let signupBtn = document.getElementById('signupBtn');

let nameField = document.getElementById('nameField');
let title = document.getElementById('title');




signinBtn.onclick = function(){
    nameField.style.maxHeight = '0';
    title.innerText = 'Sign In';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    signinBtn.classList.add('disable');
    signupBtn.classList.remove('disable');
}















// let nameField = document.getElementById('nameField');
// let title = document.getElementById('title');
// function signUpBtn(){
//     let signupBtn = document.getElementById('signupBtn');
//     let signinBtn = document.getElementById('signinBtn');
//     nameField.style.maxHeight = '60px';
//     title.innerHTML = 'Sign Up';
//     signinBtn.classList.add('disable');
//     signupBtn.classList.remove('disable');
// }

// function signInBtn(){
//     let signinBtn = document.getElementById('signinBtn');
//     let signupBtn = document.getElementById('signupBtn');
//     nameField.style.maxHeight = '0px';
//     title.innerHTML = 'Sign In';
//     signupBtn.classList.add('disable');
//     signinBtn.classList.remove('disable');
// }