let div = document.createElement("div");
let header= document.createElement("h1");
let text = document.createTextNode("my first js web page");
header.appendChild(text);
let p = document.createElement("p");
let text2 = document.createTextNode(" i made it simple and easy ");
p.appendChild(text2);

let input = document.createElement("textarea");
input.name = "post";
input.maxLength = "500";
input.cols = "60";
input.rows = "10";


let button = document.createElement("button");
button.style.width = '60px';
button.style.height = '20px';
button.value = 'click here';  ///  i tried to write on the button
let img = document.createElement("img")
img.src = "pic.png"
img.style.height='250px';
img.style.width='400px';

document.body.appendChild(div);
div.appendChild(header);
div.appendChild(img);
div.appendChild(p);

div.appendChild(input); //appendChild
div.appendChild(button);



