// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
   
  };

//   1.
const [players1,players2] = game.players; /*array destructuring*/
  console.log(players1,players2);
//   2.
const[gk,...fieldPlayers]= players1;   /* ...fieldplayers rest operator*/
console.log(gk, fieldPlayers)
// 3.
const allPlayers= [...players1, ...players2];  /*spread operator*/
  console.log(allPlayers)
//   4.
const players1Final= [...players1,'Thiago', 'Coutinho','Perisic'] /*...players1 spread operator */
console.log(players1Final);
// 5.
const {team1,draw,team2} = game.odds;
console.log(team1,draw,team2);
// 6.
const printGoals=(...players)=>{
  console.log(players);
  console.log(`${players.length} goals were scored`);
}
printGoals(...game.scored)
// 7.
console.log((team1 > team2) ? 'team 1 will likely to win' : 'team2 likely to win');

// Code Challenge 2
// 1.Loop over the game.scored array and print each player name to the console, 
// along with the goal number (example: "goal 1: name")

for([i,playernames] of game.scored.entries()){
  console.log(`Goal ${i+1}:${playernames}`)
}

// 2.Use a loop to calculate average odd and log it to the console 
let avg = 0;
const odds = Object.values(game.odds);
for(const odd of odds){
   avg =avg+odd; 
}
avg /= odds.length;
console.log(avg);
// 3. Print 3 odds to the console , but in a nice formatted way like this, odd of name : value
// get the team names directly from the game object, dont hardcode them (except for "draw")
// Hint: Note how the odds and the game objects have the same property names.
for([playername,value] of Object.entries(game.odds)){
 const teamPlayerName = (playername==='x')? 'draw' : playername;
 console.log(`Odd of ${teamPlayerName} : ${value}`);
}
console.log(`Odd of ${game.team1} : ${game.odds.team1}`)
console.log(`Odd of ${game.team2} : ${game.odds.team2}`)
console.log(`Odd of draw : ${game.odds.x}`)
//  4.  create an object called scorers which contains the names of the players who scored as properties and the number of goals as the value. in this game it will look like this {ganby:1,hummels:1}
const scorers = {};
console.log(scorers)
for(scorername of Object.values(game.scored)){
   (scorers[scorername])? scorers[scorername]++ : scorers[scorername]=1
}
console.log(scorers)

// coding challenge 3
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events
//  that happened during the game. The values are the events themselves, 
and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened
 (no duplicates)
2. After the game has finished, is was found that the yellow card 
from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, 
on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, 
like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.  Create an array 'events' of the different game events that happened
//  (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2.After the game has finished, is was found that the yellow card 
// from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, 
// on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`)
const totaltime = ([...gameEvents.keys()].pop());
console.log(`An event happened, on average, every ${totaltime/gameEvents.size} minutes`)

// 4. Loop over the events and log them to the console, marking 
// whether it's in the first half or second half (after 45 min) of the game, 
// like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for([key,value] of gameEvents){
  console.log( (key > 45) ? `[Second Half] ${key} : ${value}`: `[First Half] ${key} : ${value}`);
}


