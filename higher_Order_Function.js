'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);

repeat(goodbye, 5);

/* *****************************
        Filter Function
********************************/
function filter(arr, fn) {
  // TASK: Define your function here
  const newArray = [];

  arr.forEach(element => {
    if (fn === 'true') {
      newArray.push(element);
    }
  });
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
  let warningCounter= 0;
  return  function (location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tsunamiWarning = hazardWarningCreator('Tsunami in coming');
const hurcaneWarning = hazardWarningCreator('hurcane near by');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
tsunamiWarning ('Centinela Ave and Olympic Blvd');
tsunamiWarning ('camino de la playa');
hurcaneWarning ('Centinela Ave and Olympic Blvd');
hurcaneWarning('Main St and Pacific Ave');