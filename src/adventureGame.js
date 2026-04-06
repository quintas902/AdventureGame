const readline = require('readline-sync');

// Display the game title 
console.log("Welcome to the Adventure Game!");

// Add welcome message
console.log("Prepara yourself for an epic journey!");

let playerName = "";

// Get player's name using readline-sync
while (playerName.trim() === "") {
    playerName = readline.question("Please enter your name: ");
}
console.log(`Welcome, ${playerName}!`); 

let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;

let inventory = [];

// Create variables for player stats
let playerStats = {
    health: playerHealth,
    gold: playerGold,
    location: currentLocation,
    inventory: inventory
};      
