const Check_me= document.querySelector(`.Check_me`),
    show_img =  document.querySelector(`.show_img`);

console.log("start !")
console.log(Check_me.checked)
Check_me.addEventListener(`change`, () => {
    console.log(Check_me.checked)
    //console.log(Check_me.value)
    if (Check_me.checked == true){
        console.log("yaba");
        myFunction();
    } else {
        console.log("baba");
       show_img.innerHTML = "";
    }
})

//function check_stat(Check_me)

function myFunction() {
    let x = document.createElement("IMG");
    x.setAttribute("src", "pic.png");
    //x.setAttribute("width", "100");
    //x.setAttribute("height", "100");
    show_img.appendChild(x);
  }
