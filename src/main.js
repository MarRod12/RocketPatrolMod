/*  Points
    60 - Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi)
    20 - Implement a new timing/scoring mechanism that adds time to the clock for successful hits
    10- Implement parallax scrolling
    10 -Display the time remaining (in seconds) on the screen
*/

/* 
    Margarita Rodriguez  04/17/22
    Title: Fishing Patrol
    Time Worked on: about 10 hrs
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;