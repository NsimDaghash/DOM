const clickme= document.querySelector(`.clickme`),
      text = document.querySelector(`.text`);

clickme.addEventListener(`click`, () => {
    checkinputlength();
})

function checkinputlength() {
    if ( text.value.length < 100) {
       text.innerHTML = (" you need to input more that 100 letters !");
    }
}
