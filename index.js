const formContainer = document.querySelector('.form-container');
const loginForm = document.querySelector('#sign-in-form');
const registerForm = document.querySelector('#sign-up-form');

const switchForm = (form)=> {
    if(form == 'register'){
        if(window.innerWidth > 800){
            formContainer.style.left = '50%';
        }
        loginForm.style.marginLeft = '-150%';
        registerForm.style.marginLeft ='-100%';
        }else {
            if(window.innerWidth > 800){
                formContainer.style.left = '0%';
            }
            loginForm.style.marginLeft = '-0%';
            registerForm.style.marginLeft ='50%';
            }
}
