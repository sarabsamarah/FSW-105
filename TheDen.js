//role playing game

const readlineSync = require('readline-sync');

const name = readlineSync.question('Are you lost little stranger? What shall I call you? ');

readlineSync.question('Well ' + name + ' Seems you have stumbled upon THE DEN, this is a Vampyre Den-you will need to find your way before sun down. Press enter to begin.');


 const vampyres = ['Lucien ' , 'Sydia ' , 'Carlysl ' , 'Jovine '  , 'Draco'];
 const relics = ['Silver ', 'Werewolf ', 'Stake ', 'Elixer ', 'Armor '];
 var golds = [];
 let userHealth = 25;
 const options = ['Hide', 'Bail', 'Print'];
 let acquire = relics[Math.floor(Math.random()*relics.length)];

 function game(){
     const wrathPower = Math.floor(Math.random()*(5 - 2 + 1) + 3);
     const vampyre = vampyres[Math.floor(Math.random()* vampyres.length)];
     let vampyresHealth = 20;
     const vampyresWrath = Math.floor(Math.random()* (3 - 3 + 4) + 3);

     const index = readlineSync.keyInSelect(options, 'What comes next?');
     if(options[index] == 'Hide'){
        console.log("You have been located, it did not work well for you...DECEASED!!!");
         return userHealth = 0;
         
     } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nRelics: ' + acquire);
     } else if (options[index] == 'Bail'){
         let key = Math.random();
         if (key <= .3) {
             console.log('Bailing...');
     } else if (key >= .3) {
         console.log(vampyres + ' have found you');

            while(vampyresHealth > 0 && userHealth > 0) {

                const user = readlineSync.question('This is the moment, what shall you do? Enter "b" to take your chances and BREAKOUT of THE DEN or "s" to SLAY, click "h" to see health status of you and your enemy, may the odds be ever in your favor!');
            
                switch (user){
                    case 'b' : //escape
                    const breakout = Math.random();
                    if ( breakout < .5) {
                        console.log("Attempting to escape catches the attention of  " + vampyre + " he suddenly appears in front of you, ready to claim his prey, he attacks you with " + vampyresWrath + " of his power!!");
                     } else {
                         console.log('You made it! What luck you have!!');
                        return userHealth = 0;
                            
                        }
                       break; 

                    case 's' : //slay
                     vampyresHealth -= wrathPower;
                     console.log('You have begun to slay ' + vampyre + ' with ' + wrathPower + ' of your power, now your enemies health is: ' + vampyresHealth);

                     userHealth -= vampyresHealth;
                     console.log( vampyre + ' has unleashed his wrath with  ' + vampyresWrath + ' of his superhuman power');

                     if(vampyresHealth <= 0){
                         console.log("You slayed " + vampyre + '\n' + vampyre + ' releases: ' + acquire + ' which will help you escape ');
                         let gold = Math.random();
                         if(gold <= .4){
                             golds.push(acquire);
                         }
                     } else if(userHealth <= 0){
                         console.log(vampyre + " power is unimaginable, you have succumbed to your final breath");
                     }
                     case 'h':
                    vampyresHealth = vampyresHealth
                    console.log('your enemies health is ' + vampyresHealth + ' Your health is at: ' + userHealth);
                }
            
            }
        }
    }
 }
while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 25;
    };
    userRestore();
    game();
}
 
