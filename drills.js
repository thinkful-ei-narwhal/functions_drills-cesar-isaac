'use strict';

function getYearOfBirth (age){
  if(typeof age === 'string'){
    throw new Error('age cannot be string');
  }
  if(age < 0){
    throw new Error('Age can not be negative');
  }
  return 2020 - age;
}

function createGreeting(name, fn) {
  if(typeof name === 'number'){
    throw new Error('name cannot be number');
  }
  if(typeof name === 'undefined' || typeof fn === 'undefined'){
    throw new Error('argument not valid');
  }
  return `Hi, my name is ${name}, I was born in ${fn}`;
}

try{
  const greeting1 = createGreeting(29,getYearOfBirth(29));
  console.log(greeting1);
}catch(error){
  console.log(error.message);
}

