 const animalpics = document.querySelector('.animal_pics'),
    nxt_pic = document.querySelector('.btn');

    nxt_pic.addEventListener('click', showpictures);

async function showpictures(){
    try{
        const requestpic =await( await fetch(`https://dog.ceo/api/breeds/image/random`)).json()
        nxt_pic.innerHTML = `<img src="${requestpic.message}" width="500" hight="500">`
        console.log(requestpic)

    }catch (err) {
        animalpics.innerHTML = "we cant apply tour request !";
    }
}     
