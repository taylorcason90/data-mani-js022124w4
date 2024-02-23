// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
//this is checking if all #s are divisible by 5
let sum;
sum = n1 / 5;
sum = n2 / 5;
sum = n3 / 5;
sum = n4 / 5;


// console.log("the total is", sum);

// //this is checking if the first number is greater than the last number 
// console.log(n1 > n4);

// //arithmetic chain
// //this is subtracting the first number from the second number
// console.log(n2 - n1);

// //multiplication
// console.log(n3 * 5);

// //remaminder
// const remainder = 100 % 5;
// console.log(`The remainder is 0: ${remainder}.`);




// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
// console.log(isOver25);

// if (isOver25){
//   console.log("Over 25");
// } else{
//   console.log("Not over 25");
// }


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  //Part 2 Practical Math Part 

  let distance = 1500; //total miles for the trip
  let budget = 175; //fuel budget
  let gallon = 3; //$3 per gallon
  let scenario1 = 30; //miles per galllon
  let scenario2 = 28; //miles per gallon
  let scenario3 =23; //miles per gallon
  let mph1 = 55;
  let mph2 = 60;
  let mph3 = 75;

  //55mph at 30mpg
 const g = 50; //gallons of fuel for the entire trip
//  const fpg = 150; //cost of fuel for the entire trip
if  (distance / scenario1); {
  //console.log(g);
} 
//cost of fuel for the entire trip
// if (g * gallon); {
// console.log(fpg);
// }
// another way to find the total  fuel cost
let fpg;
fpg = g * gallon;
//console.log(fpg);

//how long will the trip take in hours 
let hours;
hours = distance / mph1;
//console.log(hours);




// 60 miles at 28 mph
// gallons of fuel for entire trip


const gas = distance / scenario2;
console.log(gas);
// cost of gas for the fuel expense
let fuel;
fuel = gas * gallon;
  console.log(fuel);

if (fuel > 175 ) {
  console.log('fuel is more than $175');
} else {
  console.log('fuel budget is good to go');
}

//how long in hours 
hours = distance / mph2;
console.log(hours);
console.log('the total hours is');


//75 miles per hour at 23 miles per gallon
let fuelforTrip;
fuelforTrip = distance / scenario3;
console.log(fuelforTrip);
// will budget be enough?
let fuelneeded; //fuel needed for trip
fuelneeded = fuelforTrip * gallon;

if (fuelneeded>175) {
  console.log('over budget');
} else {
  console.log('under budget as needed');
}

//how long will it take 
let hours3;
hours3 = distance / mph3;
console.log('the hours it will take is');

