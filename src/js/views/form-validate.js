//import { elements } from '../models/dom-elements';

// const form = elements.form;
// const username = elements.username;
// const password = elements.password;
// const password2 = elements.password2;
// const email = elements.email;

//show input error messege
function showError(input, messege) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = messege;
}

//show input success messege
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid

function checkEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, `Please enter a valid email id!`);
    return false;
  }
}

//check both password match
function CheckPassMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Both password should be same!`);
    return false;
  } else {
    showSuccess(input2);
    return true;
  }
}
//check required
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required!`);
    } else {
      showSuccess(input);
    }
  });

  if (inputArr.every((input) => input.value.trim().length > 0)) {
    return true;
  } else {
    return false;
  }
};

//get input name
function getFieldName(input) {
  return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
}

//check field length
function checkLength(input, minLength, maxLength) {
  if (input.value.length > 0) {
    if (input.value.length < minLength || input.value.length > maxLength) {
      showError(
        input,
        `${getFieldName(
          input
        )} should be between ${minLength} and ${maxLength}!`
      );
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  } else {
    return false;
  }
}

export const validateCreateFormData = (data) => {
  if (
    checkRequired([
      data.username,
      data.email,
      data.password,
      data.password2,
    ]) === true &&
    checkLength(data.username, 3, 15) === true &&
    checkEmail(data.email) === true &&
    CheckPassMatch(data.password, data.password2) === true
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateLoginFormData = (data) => {
  if (
    checkRequired([data.email, data.password]) === true &&
    checkEmail(data.email) === true
  ) {
    return true;
  } else {
    return false;
  }
};
