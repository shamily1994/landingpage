const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

//Show input error message
function ShowError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
  
  //Show input success
  function ShowSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  //Check email
function CheckEmail(input) {
    const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (char.test(input.value.trim())) {
      ShowSuccess(input);
    }else {
      ShowError(input, "Email is not valid");
    }
  }

  function checkPass(input){
    const exppass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(exppass.test(input.value.trim())){
      ShowSuccess(input);
    }else{
      ShowError(input,"password is not valid")
    }
  }

  function CheckRequired(inputErr) {
    inputErr.forEach(function(input){
      if (input.value.trim() === "") {
        ShowError(input, `${getFieldName(input)} is required`);
      }else {
        ShowSuccess(input);
      }
    });
  }

  function CheckLenght(input, min, max) {
    if (input.value.length < min) {
      ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
      ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
    }else {
      ShowSuccess(input);
    }
  }

  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
  }

  
function isformvalid() {
  const inputcontainers = form.querySelectorAll(".form-control");
  let result = true;
  inputcontainers.forEach((container) => {
    if (container.classList.contains('error')) {
      result = false;
    }
  });
  return result;
}

  form.addEventListener('submit', function (e){
    // alert("entered");
    e.preventDefault();
    CheckRequired([email, password]);
    //  CheckLenght(username, 3, 15);
    CheckEmail(email);
    CheckLenght(password, 8, 25);
    checkPass(password);
   

    if (isformvalid()== true) {
      // alert("inside formvalid");
      form.submit();
      
    }
    else {
    
      e.preventDefault();
     
    }
});