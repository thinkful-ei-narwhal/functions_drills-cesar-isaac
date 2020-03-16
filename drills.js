'use strict';

function getYearOfBirth (age){
  if(age < 0){
    throw new Error('Age can not be negative');
  }
  return 2020 - age;
}

function createGreeting(name, fn) {
  if(typeof name === 'undefined' || typeof fn === 'undefined'){
    throw new Error('argument not valid');
  }
  return `Hi, my name is ${name}, I was born in ${fn}`;
}

try{
  const greeting1 = createGreeting('cesar',getYearOfBirth(22));
  console.log(greeting1);
}catch(error){
  console.log(error.message);
}

