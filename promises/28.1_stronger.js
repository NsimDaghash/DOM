//1. the code wasn't will orgenized
const hero = {
    health: 5,
    power: 68,
    getStrength: function(){  
        if (hero.health <= 5)
        {            
            return this.power - 10;
        } 
        else
        {
            return this.power;
        }
    }
}
function whoIsStronger(getStrength){
    const myStrength = 82;
    //getStrength.bind(hero);
    
    if (getStrength() < myStrength){
        return "I am stronger";
    } 
    else return "You are stronger";
}
let result =  hero.getStrength.bind(hero);
console.log(whoIsStronger(result));
