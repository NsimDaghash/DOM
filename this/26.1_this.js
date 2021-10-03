
// 1.
 console.log(this);
// this referes to the global object 


//2.

const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
   };
   myObj.greet();


// this referes to the global object couse the errow function is treated as a regular function ( dont belong to the object)

/*the solution is : */

const myObj = {
 name: "Timmy",
 greet: function(){
 console.log(`Hello ${this.name}`);
 },
};
myObj.greet()

// 3.

const myFuncDec = function () {
    console.log(this);
   }
// it refers to the function 


// 4. 

const myFuncArrow = () => {
    console.log(this);
   };
   myFuncArrow();

// it will referes to the global object , couse in arrow fonction this behaive like a regular function

// 5.

document.querySelector(".element").addEventListener('click',function(){
    console.log(this);
   })

// this refere to the element that operate the function
