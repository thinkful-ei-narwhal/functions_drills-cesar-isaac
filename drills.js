'use strict';

function getYearOfBirth (age){
  if(age < 0){
    throw new Error('Age can not be negative');
  }
 return 2020 - age;
}

function createGreeting(name, age) {
  let yearOfBirth = 2020 - age;

  return `I was born in ${yearOfBirth}`;
}

try{
const greeting1 = createGreeting('Isaac', -22);
}catch(error){
  console.log(error);
}

console.log(getYearOfBirth(22));
