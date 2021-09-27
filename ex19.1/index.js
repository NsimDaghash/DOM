const start = document.querySelector(`.start-here`),
      outerul = document.querySelector(`.ul`);
      innerul = document.querySelector(`.innerul`);
      title =  document.querySelector(`.title`);
      prag =  document.querySelector(`.prag`);


start.innerHTML="main title";   // 1. 

let x = document.createElement("innerul");  // 2. 
    x.innerHTML = ("sub title 4") ;
    innerul.appendChild(x);

outerul.removeChild(outerul.lastElementChild);  // 3. remove the last element

title.innerHTML="Master Of The Dom"  // 4. 

prag.innerHTML = " I have made this paraghraph , i think its cool! "   //5.

