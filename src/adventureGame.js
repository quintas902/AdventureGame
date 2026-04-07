const readline = require('readline-sync');

// Display the game title 
console.log("Welcome to the Adventure Game!");

// Add welcome message
console.log("Prepare yourself for an epic journey!");

let playerName = "";

let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let weaponDamage = 0;
let monsterDefense = 5;
let healingPotionValue = 20;

let inventory = [];

// Create variables for player stats
let playerStats = {
    health: playerHealth,
    gold: playerGold,
    location: currentLocation,
    inventory: inventory
};      

// Get player's name using readline-sync
playerName = readline.question("Please enter your name: ");

console.log(`Welcome to the most awesome adventure, ${playerName}!`); 
console.log(`You start you adventure with ${playerGold} gold;`);
console.log(`Your initial weapon damage to this point is ${weaponDamage}.`);
console.log(`One you buy the sword the weapon damage will increase to 10.`);
console.log(`Every monster you encounter will have a defense of ${monsterDefense}.`);
console.log(`A potion will heal you for ${healingPotionValue} health points.`);