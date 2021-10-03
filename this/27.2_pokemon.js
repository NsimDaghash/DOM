function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    this.callpokemon = function(){
        console.log( `I choose you : ${this.name}`)
    };
    this.attack = function(id){
        console.log(`${this.name} use ${this.attackList[id]}`)
    };

}

let pikachu = new Pokemon('Pikachu','Electric',['Shock','Thunder']);
let ditto = new Pokemon('Ditto','Normal',['Transform','Mirror']);
let mewtwo = new Pokemon('Mewtwo','Psychic',['Confusion','Psystrike']);
/*
console.log(ditto);
console.log(pikachu);
console.log(mewtwo);   */
pikachu.callpokemon();
pikachu.attack(0);
mewtwo.callpokemon();
mewtwo.attack(0);
