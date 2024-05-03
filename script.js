
const loginForm =document.getElementById('loginForm');

const registerForm=document.getElementById('registerForm');

const registerBtn=document.getElementById('registerBtn');

const loginBtn=document.getElementById('loginBtn');

registerBtn.addEventListener('click',function(){

    console.log('this worry')
    loginForm.style.translate='-100';

    loginForm.style.display='none';

    registerForm.style.display='flex'
   
});


loginBtn.addEventListener('click',function(){
    loginForm.style.display='flex';

    registerForm.style.display='none'
})
