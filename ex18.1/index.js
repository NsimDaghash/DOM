const clickme= document.querySelector(`.clickme`),
      text = document.querySelector(`.text`),
      show_img =  document.querySelector(`.show_img`);

 
clickme.addEventListener(`click`, () => {
    show_img.innerHTML = "";
    showImage();
    text.value=""; 
})

function showImage() {
    
    let amount = (Number(text.value))
    for(let i=0 ; i< amount ; i++){
        myFunction();
        }
}

function myFunction() {
    let x = document.createElement("IMG");
    x.setAttribute("src", "33480-smiley-face-emoji.jpg");
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    show_img.appendChild(x);
  }

