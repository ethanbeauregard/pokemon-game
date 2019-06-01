// Database
var pokemonDB = [
 {
  name: 'charmander',
  type: 'fire',
  hp: 39,
  attack: 52,
  defense: 39,
  level: 1,
  img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
 },
 {
  name: 'bulbasaur',
  type: 'grass',
  hp: 45,
  attack: 49,
  defense: 49,
  level: 1,
  img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
 },
 {
  name: 'squirtle',
  type: 'water',
  hp: 44,
  attack: 48,
  defense: 65,
  level: 1,
  img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
 }
];

// Game State
var gameState = {
 userPokemon: '',
 rivalPokemon: ''
};
console.log(gameState);

// Elements
var pokemonEl = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(pokemonEl);
var battleScreenEl = document.getElementById('battle-screen');
var i = 0;

// this is the initial loop
while(i < pokemonEl.length) {
 // add function to all characters on the screen select
 pokemonEl[i].onclick = function() {
  // current selected pokemons name
  var pokemonName = this.dataset.starterPokemon;

  // elements for images on battle screen
  var player1Img = document.querySelector('.player1').getElementsByTagName('img');
  var player2Img = document.querySelector('.player2').getElementsByTagName('img');

  // we save the current pokemon
  gameState.userPokemon = pokemonName;

  // cpu picks a pokemon
  cpuPick();
  // changes screen to battle scene 
  battleScreenEl.classList.toggle('active');

  // select data from current user pokemon
  var currentPokemon = pokemonDB.filter(function(pokemon) {
   return pokemon.name == gameState.userPokemon
  });
  player1Img[0].src = currentPokemon[0].img;

  // select data from current cpu pokemon
  var currentRivalPokemon = pokemonDB.filter(function(pokemon) {
   return pokemon.name == gameState.rivalPokemon
  });
  player2Img[0].src = currentRivalPokemon[0].img;

  console.log(currentPokemon);

  // user choose attack 

  // cpu health goes down

  // cpu attacks

  // user health goes down 


  // rock > scissors

  // paper > rock

  // scissors > paper

  // depending on the pokemon type and defense is how hard the attack is going to be and how much health it will take out

  // then who ever gets their health to <=0 loses
 };
 i++
};

var randomNumber = function(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
};

var cpuPick = function() {
 gameState.rivalPokemon = pokemonEl[randomNumber(0, 3)].dataset.starterPokemon;
}

































// // pokemon
// // create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)



// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var defense = 39;

// // create a formula for attacks
// console.log((attack * level ) * stack / 7)



// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * defense) * 15)




// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2




// // when one user loses all his health declare a winner

