const form = document.querySelector('.verify'); 
const inputs = form.querySelectorAll('.inputs input');
const inputsArr = [...inputs];
const submitBtn = document.querySelector('.submit');

const selectIfNotEmpty = function(event) {     // e
  if (event.target.value) {
    event.target.select();
  }
}

const handleInput = function(event) {
  if (event.target.value && event.target.nextElementSibling) {
    event.target.nextElementSibling.focus();
  }
  if (!event.target.nextElementSibling && inputsArr.every(input => input.value)) {
    submitBtn.focus();
  }
}

const handleBackspace = function(event) {
  if (event.keyCode == 8 && event.target.value == '' && event.target.previousElementSibling) {  // keycode 8 = backspace
    event.target.previousElementSibling.focus(); 
  }
}

const handlePaste = function(event) {
  const data  = event.clipboardData.getData('text');
  inputs.forEach((input, i) => {
    input.value = data[i] || input.value
  })
  if (inputsArr.every(input => input.value)) {
    submitBtn.focus();
    console.log('ready for submit')
  }
  
}

const handleSubmit = function(event) {
    event.preventDefault();
  //console.log(completed)
}

const handleArrows = function(event) {
  if (event.keyCode == 37 && e.target.previousElementSibling) {  // keyCode 37 = arrow left
    event.preventDefault();
    event.target.previousElementSibling.focus()
  }
   
  if (event.keyCode == 39 && event.target.nextElementSibling) {   //  keyCode 39 = arrow right
    event.preventDefault();
    event.target.nextElementSibling.focus()
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', selectIfNotEmpty)
})

inputs.forEach(input => {
  input.addEventListener('input', handleInput);
})

inputs.forEach(input => {
  input.addEventListener('keyup', handleBackspace);
})

inputs.forEach(input => {
  input.addEventListener('paste', handlePaste);
})

inputs.forEach(input => {
  input.addEventListener('keydown', handleArrows);
})

form.addEventListener('submit', handleSubmit);

//123456