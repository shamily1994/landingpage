const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


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
  } else {
    ShowError(input, "Email is not valid");
  }
}

function CheckPhone(input) {
  // const exp =  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
  const exp = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  if (exp.test(input.value.trim())) {
    ShowSuccess(input);
  } else {
    ShowError(input, "Phone number is not valid");
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
  inputErr.forEach(function (input) {
    if (input.value.trim() === "") {
      ShowError(input, `${getFieldName(input)} is required`);
    } else {
      ShowSuccess(input);
    }
  });
}

function CheckLenght(input, min, max) {
  if (input.value.length < min) {
    ShowError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    ShowError(input, `${getFieldName(input)} must be less then ${max} characters`);
  } else {
    ShowSuccess(input);
  }
}


function CheckPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    ShowError(input2, "Password do not match");
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

// function val(){
form.addEventListener('submit', function (e) {
  alert("entered");
  e.preventDefault();

  CheckRequired([username, email, password, password2]);
  CheckLenght(username, 3, 15);
  CheckLenght(password, 8, 25);
  checkPass(password);
  CheckEmail(email);
  CheckPhone(phone);
  CheckPasswordsMatch(password, password2);

  if (isformvalid()== true) {
    // alert("inside formvalid");
    form.submit();
    
  }
  else {
  
    e.preventDefault();
   
  }



});

// window.location.href= './home.html';}

// if(form.addEventListener == 'true')
// {
//  window.location.href= 'home.html';
// }else{
//   e.preventDefault();
// }
// }





// *******original******************************************
// form.addEventListener('submit', function (e){
//   alert("entered");
//   e.preventDefault();
//   CheckRequired([username, email, password, password2 ]);
//   CheckLenght(username, 3, 15);
//   CheckLenght(password, 8, 25);
//   CheckEmail(email);
//    CheckPhone(phone);
//   CheckPasswordsMatch(password, password2);
// });