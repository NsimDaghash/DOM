//https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple

const jokeEl = document.querySelector('.joke'),
     get_joke = document.querySelector('.btn');

get_joke.addEventListener('click', generateJoke);

async function generateJoke() {

    try{
        const jokeRes = await fetch(`https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`,{
         /* headers:{
            Accept: 'application/json'
          }*/
        });
        console.log("jokeRes:",jokeRes)
        const {joke} = await jokeRes.json()
        console.log("joke:",joke)

        jokeEl.textContent = joke;
    }catch (err) {
      jokeEl.innerHTML = "we cant apply tour request !";
    }
}       
generateJoke();