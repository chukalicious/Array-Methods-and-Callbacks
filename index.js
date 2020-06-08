import { fifaData } from './fifa.js';
console.log(fifaData);

/* console.log('its working'); */
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

//(a) Home Team name for 2014 world cup final
function homeFinal2014(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].Stage === 'Final' && array[i].Year === 2014) {
            return array[i]["Home Team Name"];
        }
    }
}
console.log(homeFinal2014(fifaData))

//(b) Away Team name for 2014 world cup final
function awayFinal2014(array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].Stage === 'Final' && array[i].Year === 2014) {
            return array[i]["Away Team Name"];
        }
    }
}
console.log(awayFinal2014(fifaData));

//(c) Home Team goals for 2014 world cup final
function homeTeamGoals2014(array) {
    for (var i = 0; i < array.length; i++) {
        if(array[i].Stage === 'Final' && array[i].Year === 2014) {
            return array[i]['Home Team Goals'];
        }
    }
}
console.log(homeTeamGoals2014(fifaData) +' -home team scores'); 

//(d) Away Team goals for 2014 world cup final
function awayTeamGoals2014(array) {
    for (var i = 0; i < array.length; i++) {
        if(array[i].Stage === 'Final' && array[i].Year === 2014) {
            return array[i]['Away Team Goals'];
        }
    }
}
console.log(awayTeamGoals2014(fifaData) + ' -away team goals');

//(e) Winner of 2014 world cup final 
function fifa2014Winner(array) {
    let homeTeamScore;
    let awayTeamScore;
    let homeTeamName; 
    let awayTeamName;
    for (var i = 0; i < array.length; i++) {
        if(array[i].Stage === 'Final' && array[i].Year === 2014) {
        homeTeamName = array[i]['Home Team Name']; 
        awayTeamName = array[i]['Away Team Name']
        homeTeamScore = array[i]['Home Team Goals'];
        awayTeamScore = array[i]['Away Team Goals'];
        }
    }
    if(homeTeamScore > awayTeamScore) {
        return `The Fifa World Cup winner of 2014 was ${homeTeamName} with ${homeTeamScore} scored goals.`;
    } else {
        return `The Fifa World Cup winner of 2014 was ${awayTeamName} with ${awayTeamScore} scored goals.`;
    }   
}
console.log(fifa2014Winner(fifaData)); 

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let finals = data.filter(item => item.Stage === 'Final');
    return finals; 
}
console.log(getFinals(fifaData)); 

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let data = callback(fifaData);
    let years = data.map(item => item.Year);
    return years 
}
console.log(getYears(getFinals), '<-- getYears'); 

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let finals = callback(fifaData);
    let homeScore;
    let awayScore;
    let winners = [];
    for (var i = 0; i < finals.length; i++) {
        homeScore = finals[i]["Home Team Goals"];
        awayScore = finals[i]['Away Team Goals'];
        if(homeScore > awayScore) {
            winners.push(`${finals[i]["Home Team Name"]}`);
        } else {
            winners.push(`${finals[i]['Away Team Name']}`);
        }
    }
    return winners; 
}
console.log(getWinners(getFinals), '<-- getWinners'); 

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(year, winner) {
    for(var i = 0; i < year(getFinals).length; i++){
    console.log(`In ${year(getFinals)[i]}, ${winner(getFinals)[i]} won the world cup!`); 
    }
}
getWinnersByYear(getYears, getWinners);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeGoals = [];
    let awayGoals = []; 
    data.forEach(element => homeGoals.push(element['Home Team Goals']));
    data.forEach(element => awayGoals.push(element['Away Team Goals'])); 
    //perform reduce on the arrays with the scores
    let homeSum = homeGoals.reduce((num, sum) => num + sum);
    let awaySum = awayGoals.reduce((num, sum) => num + sum)
    let homeAvg = homeSum / data.length; 
    let awayAvg = awaySum / data.length;
    return [{'home average' : homeAvg.toFixed(2)}, {'away average' : awayAvg.toFixed(2)}]; 
}
console.log(getAverageGoals(fifaData)); 

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */



let fruit = ['apple', 'apple', 'pear', 'grapes','orange', 'apple', 'apple', 'apple', 'apple', 'guava', 'pineaple', 'cherry']

//put apples in basket
function applesInBasket() {
    let basket = []; 
    let ground = []; 
    for (var i = 0; i < fruit.length; i++) {
        //if the item is an apple put it in the basket
        if(fruit[i] === 'apple') {
            basket.push(fruit[i]); 
        } else {
            // if the fruit is not an apple throw it on the ground;
            ground.push(fruit[i]); 
        }
    }
    console.log(`There are ${basket.length} apples in the basket and on the ground are ${ground.join(', ')}`)
} 
applesInBasket() 

//////// Other exercise//////////

//fill 3 arrays with number if they meet certain criteria
let numbers = [32, 21, 4, 5, 3, 45, 21, 32, 654,43, 87, 54]
let array1 = []; 
let array2 = []; 
let array3 = []; 
for(var i = 0; i < numbers.length; i++) {
  if(numbers[i] < 10) {
    array1.push(numbers[i]);
  } else if (numbers[i] >= 11 && numbers[i] < 100) {
    array2.push(numbers[i]); 
  } else {
    array3.push(numbers[i]); 
  }
}
console.log(`These numbers are less than 10: ${array1.join(', ')}`); 
console.log(`These numbers are more than 10 but less than 100: ${array2.join(', ')}`); 
console.log(`These numbers are over 100: ${array3.join(', ')}`); 


/////////////////////////////
let colors = ['red', 'red', 'red', 'green', 'blue', 'yellow', 'pink', 'white', 'black', 'brown'] 


//////////////
//Filter 

let feverIsDown = colors.filter(color => color === 'red');
console.log(`The fever has been contained, look: ${feverIsDown.join(', ')}`); 

let pickUpThatFruit = fruit.filter(fruit => fruit !== 'apple');
console.log(`Pick up that ${pickUpThatFruit.join(', ')}. There's too much food wasting as it is!`);

let inThePoorHouse = numbers.filter(number => number < 10);
console.log(`I only got $${inThePoorHouse.join(', $')} available in my savings, checking and credit card accounts`);

let gotARaise = numbers.filter(number => number >= 10 && number < 100);

//////map 


let toWords = inThePoorHouse.map(number => number.toString()); 
console.log(toWords); 

let fromRagsToRiches = inThePoorHouse.map(number => number * 100);
console.log(`I invented a map and now I've got $${fromRagsToRiches.join(', $')} available in my savings, checking and credit card accounts`); 

let littleAcorns = pickUpThatFruit.map(fruit => fruit = 'acorn'); 
console.log(`These are my problems in little pieces: ${littleAcorns.join(', ')}`)

//reduce 

let allMyMoney = fromRagsToRiches.reduce((base, add) => base + add); 
console.log(`I got $${allMyMoney}. Let's fix the car `); 

let ImMiddleClass = gotARaise.reduce((base, add) => base + add); 
console.log(`I just make a quick purchase of essentials at Sephora for $${ImMiddleClass}`)






















