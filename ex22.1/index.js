const uname = document.querySelector(`.name`),
      email = document.querySelector(`.email`),
      age = document.querySelector(`.age`),
      submitbtn = document.querySelector(`.submitbtn`);

const registrationconfirm = document.createElement('div'),
      regmane = document.createElement('div'),
      regage = document.createElement('div'),
      regmail = document.createElement('div');

registrationconfirm.style.position = "absolute";
registrationconfirm.style.background = "red";
registrationconfirm.style.left = 0;
registrationconfirm.style.top = 0 ;
registrationconfirm.style.width = "400px";
registrationconfirm.style.height = "250px";
registrationconfirm.style.textAlign = "center";
registrationconfirm.style.visibility= "hidden";


const registrationsuccess = document.createElement('div');
    registrationsuccess.style.position = "absolute";
    registrationsuccess.style.background = "cyan";
    registrationsuccess.style.left = 0;
    registrationsuccess.style.top = 0 ;
    registrationsuccess.style.width = "400px";
    registrationsuccess.style.height = "250px";
    registrationsuccess.style.textAlign = "center";
    registrationsuccess.style.paddingTop = "10%";
    registrationsuccess.style.fontSize = "18px";
    registrationsuccess.style.visibility= "hidden";

const regconfirmbtn = document.createElement('input');
regconfirmbtn.value = 'confirm';
regconfirmbtn.type = 'button';
regconfirmbtn.style.marginLeft= '15px';
regconfirmbtn.style.marginTop = '15px';
regconfirmbtn.addEventListener('click',() => {
    registrationconfirm.style.visibility= "hidden";
    registrationsuccess.style.visibility = "visible";
    registrationsuccess.textContent = "congratulations you successfully sent this form" ;

})

const regmodifybtn = document.createElement('input');
regmodifybtn.value = 'modify';
regmodifybtn.type = 'button';
regmodifybtn.style.marginLeft= '15px';
regmodifybtn.style.marginTop = '15px';
regmodifybtn.addEventListener('click',() => {
    registrationconfirm.style.visibility= "hidden"; 
})

document.body.appendChild(registrationconfirm);
document.body.appendChild(registrationsuccess);
registrationconfirm.append(regmane,regage,regmail,regconfirmbtn,regmodifybtn);

submitbtn.addEventListener('click',() => {
    registrationconfirm.style.visibility= "visible"; 
    regmane.textContent = `Name : " ${uname.value}`;
    regage.textContent = `Age : " ${age.value}`;
    regmail.textContent = `Email : ${email.value} `;
})