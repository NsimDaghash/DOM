const storm = { 

    superPower: "fly",
    printSuperPower:printSuperPower
    // add code here 
   } 
   function printSuperPower() {
    console.log("my superpower is " + this.superPower); 
   }

   storm.printSuperPower();
