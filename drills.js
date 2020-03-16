'use strict';

const getYearOfBirth = age => 2020 - age;

function createGreeting(name, age) {
  let yearOfBirth = 2020 - age;

  return `I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Isaac', 22);

console.log(greeting1);

console.log(getYearOfBirth(22));
