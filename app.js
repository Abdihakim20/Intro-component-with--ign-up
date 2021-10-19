const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Error function
function showError(input,message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// check required
function checkRequired(inputArr) {
    inputArr.forEach( function(input){
        if(input.value.trim() === ''){
          showError(input,`${getFieldName(input)} is required`);
        }else{
          showSuccess(input);
        }
      }); 
}
// get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toLocaleUpperCase() + input.id.slice(1);
  }

// Validity check
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    }else{
      showError(input, 'Looks like this is not an email');
    }
}
// Event listener
form.addEventListener('submit', (e)=>{
    checkRequired([firstName,lastName,email,password]);
    validateEmail(email); 
  e.preventDefault();

});