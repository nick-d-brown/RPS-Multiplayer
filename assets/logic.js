// Psuedo Code Section

//============================================================
/*
    Firebase structure:

    multirps
    |
    |--Players
    |    |
    |    |--1
    |    |  |--choice
    |    |  |--losses
    |    |  |--name
    |    |  |--wins
    |    |
    |    |--2
    |    |  |--choice
    |    |  |--losses
    |    |  |--name
    |    |  |--wins
    |
    |--turn


*/
//============================================================

// 1-on main start screen

 // A--start button at the top (id="initializePlayer") is listening for a click.

 // B--if clicked, gets the value (.val().trim()) from the text box next to it (id="userDisplayName") and stores it in a variable

 // C--checks firebase to see if players -> 1 -> name  is null

  // i---if null, initializes the value as player one in firebase and also assigns properties of wins=0, losses=0, and userChoice(to determine what choice they pic in the game)
  // ii---else if players -> 1 -> name is not null AND players -> 2 -> name is null, the initialize the same information under the name player 2
  // iii--- else, (player 1 and player 2 are technically populated) alert the user that 2 players are already playing

 // D--if player 1 does not equal null, then select the player1 box (id="player1Box") set id="displayNameRow" to display: none
  // i---delete the content inside of the div
  // ii---create a new variable that creates an h2 element showing the player's name
  // iii---append a div to the h2 element (this div will be used to show the player their options to choose when it is their turn and what their choice was)
  // iv---append a paragraph element as well (should look something like <p>"Wins: " + wins " Losses: " + losses) that shwos wins and losses that change as the players continue
  // v---append an h3 element below the title to the (id="announcementsBoard") div that says "Hi " + player1name + "! You are Player 1"
 
 // E--if player 1 does not equal null AND player 2 is null then select the player2 box (id="player2Box")
  // i---delete the content inside of the div
  // ii---create a new variable that creates an h2 element showing the player's name
  // iii---append a div to the h2 element (this div will be used to show the player their options to choose when it is their turn and what their choice was)
  // iv---append a paragraph element as well (should look something like <p>"Wins: " + wins " Losses: " + losses) that shwos wins and losses that change as the players continue
  // v---append an h3 element below the title to the (id="announcementsBoard") div that says "Hi " + player2name + "! You are Player 2"

 // F--if player 1 does not equal null AND player 2 does not equal null
  // i---change player 1 text on div with (id="playerTurnAnnouncements") to "It's your turn!""
  // ii---change player 2 text on div with (id="playerTurnAnnouncements") to "Waiting for " + player1name + " to choose."

  //============================================================

// 2-after two players are set
 //A--player 1 box changes to show choices
  //i---box changes to show what option the player chooses on their screen
 //B--player 2 box changes to show choices
  //i---box changes to show what option the player choses on their screen
 //C--when both players choose both boxes show the choices and the middle box shows who wins
  //i---updates wins losses for each player on firebase and on the screen 
  //waits 3 seconds then restarts the screen back to A ^^^^

  //============================================================

// CHATBOX

//when a player types a message and clicks send, it appends the message (<p>username + ": " + message</p>) to the chatbox


// Start of logic
$(document).ready(function(){

    // initialize Firebase

var config = {
    apiKey: "AIzaSyAAlO4NSIia0ToUHhmAwixEVv_N7okCdl8",
    authDomain: "player-rock-paper-scissors.firebaseapp.com",
    databaseURL: "https://player-rock-paper-scissors.firebaseio.com",
    projectId: "player-rock-paper-scissors",
    storageBucket: "player-rock-paper-scissors.appspot.com",
    messagingSenderId: "2637313956"
};
firebase.initializeApp(config);

// Initializes variables to reference Firebase
var database = firebaser.database();

var player1 = {
    name: "",
    choice: "",
    wins: 0,
    losses: 0
}
var player2 = {
    name: "",
    choice: "",
    wins: 0,
    losses: 0
}



// Captres the button click for the username

    $("#initializePlayer").on("click", function(){
        event.preventDefault(); //prevents page from reloading
        
        if (database.1 === null) {
            player1.name = $("#userDisplayName");
            
            database.ref().push({
                1: player1,
            });

        } else if (database.1 !== null && database.2 === null) {
            player2.name = $("#userDisplayName");

        database.ref().push({
            1: player1,
        })

        } 
    });



    database.ref().on("value", function (snapshot) {

        if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
            highBidder = snapshot.val().highBidder;
            highPrice = parseInt(snapshot.val().highPrice);

            $("#highest-bidder").text(snapshot.val().highBidder);
            $("#highest-price").text("$" + snapshot.val().highPrice);

            console.log(snapshot.val().highBidder);
            console.log(snapshot.val().highPrice);
        }
        else {
            $("#highest-bidder").text(highBidder);
            $("#highest-price").text("$" + highPrice);

            console.log("Current High Price");
            console.log(highBidder);
            console.log(highPrice);
        }

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });



}); // closes the document.ready at the top of the page
