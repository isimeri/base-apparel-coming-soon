const form = document.querySelector(".mr-form");
const email = form.querySelector(".email-input");
const msg = document.querySelector(".error-msg");

form.addEventListener("submit", function(e){
    if(!email.validity.valid)
    {
        email.classList.add('error');
        email.parentElement.classList.add('error');
        msg.classList.add('error');
        e.preventDefault();
    }
});

email.addEventListener("input", function(){
    if(email.validity.valid)
    {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
        msg.classList.remove('error');
    }
})