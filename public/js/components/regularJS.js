webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Database
var pokemonDB = [{
  name: 'charmander',
  type: 'fire',
  hp: 39,
  attack: 52,
  defense: 39,
  level: 1,
  img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
}, {
  name: 'bulbasaur',
  type: 'grass',
  hp: 45,
  attack: 49,
  defense: 49,
  level: 1,
  img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
}, {
  name: 'squirtle',
  type: 'water',
  hp: 44,
  attack: 48,
  defense: 65,
  level: 1,
  img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
}];

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
var attackBtnsEl = document.getElementById('battle-screen').querySelectorAll('.attack');
console.log(attackBtnsEl);

// this is the initial loop
var i = 0;
while (i < pokemonEl.length) {
  // add function to all characters on the screen select
  pokemonEl[i].onclick = function () {
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
    gameState.currentPokemon = pokemonDB.filter(function (pokemon) {
      return pokemon.name == gameState.userPokemon;
    });
    player1Img[0].src = gameState.currentPokemon[0].img;

    // select data from current cpu pokemon
    gameState.currentRivalPokemon = pokemonDB.filter(function (pokemon) {
      return pokemon.name == gameState.rivalPokemon;
    });
    player2Img[0].src = gameState.currentRivalPokemon[0].img;

    console.log(calculateInitialHealth(gameState.currentPokemon));

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
  i++;
};

var a = 0;
while (a < attackBtnsEl.length) {
  attackBtnsEl[a].onclick = function () {
    var attackName = this.dataset.attack;
    gameState.currentUserAttack = attackName;

    play(attackName, cpuAttack());
  };
  a++;
};

var cpuAttack = function cpuAttack() {
  var attacks = ['rock', 'paper', 'scissors'];
  return attacks[randomNumber(0, 3)];
};

var calculateInitialHealth = function calculateInitialHealth(user) {
  return 0.20 * Math.sqrt(user[0].level) * user[0].defense * user[0].hp;
};

var play = function play(userAttack, cpuAttack) {
  switch (userAttack) {
    case 'rock':
      if (cpuAttack == 'paper') {
        console.log('paper killed rock');
      }
      if (cpuAttack == 'scissors') {
        console.log('rock killed scissors');
      }
      if (cpuAttack == 'rock') {
        console.log('its a draw');
      }

      console.log(userAttack);
      break;
    case 'paper':
      console.log(userAttack);
      break;
    case 'scissors':
      console.log(userAttack);
      break;
  }
};

var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var cpuPick = function cpuPick() {
  gameState.rivalPokemon = pokemonEl[randomNumber(0, 3)].dataset.starterPokemon;
};

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

/***/ })
],[0]);