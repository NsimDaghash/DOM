//https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple

const question = document.querySelector('.quistion'),
   //  animalpics = document.querySelector('.animal_pics'),
     nxt_qustion = document.querySelector('.btn');

     nxt_qustion.addEventListener('click', generatequestione);

async function generatequestione() {
  const urlTemplate= "https://opentdb.com/api.php?amount=1";
  let all =[];
        console.log(urlTemplate)
     //   for(let i=0;i<10;i++){
          const nxt_qustion = await (await fetch(`${urlTemplate}`)).json()
          console.log(nxt_qustion);
        //  const correct_answer = await ( await fetch(nxt_qustion.correct_answer)).json()
               
            ///   console.log(correct_answer);
        // console.log(nxt_qustion.results.question)
        // let answerearr= nxt_qustion.results
        //  all.push(answerearr)
          //all.question
         // console.log(all);

}

generatequestione()
