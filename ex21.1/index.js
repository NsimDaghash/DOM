const text = document.querySelector(`.txtage`),
    clickme= document.querySelector(`.clickme`),
    Message =  document.querySelector(`.Message`);

     
clickme.addEventListener(`click`, () => {
    calculateage();
})

function calculateage(){
    
    let yourage = (Number(text.value))
    if(yourage < 18){
        Message.innerHTML = " you're too young "
    }
    else{
        Message.innerHTML = "you can drink "
    }
}
