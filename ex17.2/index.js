const clickme= document.querySelector(`.clickme`),
      text = document.querySelector(`.text`);
      text1 = document.querySelector(`.text1`);

clickme.addEventListener(`click`, () => {
    checkinputlength();
})

function checkinputlength() {
    if ( text.value.length < 100) {
       text1.innerHTML = (" you need to input more that 100 letters !");
    }
    else{
        text1.innerHTML = ("");
    }
}
