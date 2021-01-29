var readlineSync = require('readline-sync');
var playerName = readlineSync.question('Welcome, what is your name? ');

var welcomeMessage = `Well, ${playerName},  you are locked in my puzzle room!`
console.log(welcomeMessage);

var isBreathing = true;
var withKey = false;

while(isBreathing == true){
    const menuOptions = readlineSync.keyIn('Press 1 to put hand in hole \n Press 2 to look for the key \n Press 3 to unlock the door', {limit: '$<1-3>'});
    console.log(menuOptions);
    if(menuOptions == 1){
    //they die if they out their hand in the hole.
    console.log(`${playerName}, well, now you are DECEASED, game is finished, over , done.....like you.`);
    isBreathing = false;
}
else if (menuOptions == 2 && withKey == false){ 
    //first time player chooses option 2
    console.log(`${playerName}, you have located the key, now is the time to find your way out!!!`);
    withKey = true;
}


else  if (menuOptions == 2 && withKey == true){
    console.log(`${playerName}, why are you standing there? You have the KEY!  Use it before it is too late!!`);
}

else  if(menuOptions == 3 && withKey == false){
    console.log(`${playerName}, the key is needed, keep looking for the key!"`);

}

else if(menuOptions == 3 && withKey == true){
    console.log(`DING DING!!! ${playerName}, I did not think you could do it, but you did, you win!! Run like the WIND!`);
    isBreathing = false;
}
}
