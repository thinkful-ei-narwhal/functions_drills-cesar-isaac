'use strict';

function jediName(firstName, lastName) {
  let fullname = lastName.slice(0, 3) + firstName.slice(0, 2);
  return fullname;
}

console.log(jediName('Cesar', 'Morales'));

function decode(word){
  let arr= word.split(' ');
  let decoded='';
  arr.forEach(element => {
    switch (element[0]) {
    case 'a':
      decoded += element[1];
      break;
    case 'b':
      decoded += element[2];
      break; 
    
    case 'c':
      decoded += element[3];

      break;
    
    case 'd':
      decoded += element[4];
      break; 
    
    default:
      decoded +=' ';
      break;
    }
  });
  return decoded;
}

console.log(decode('craft block argon meter bells brown croon droop'));


function beyond(num) {
  if (typeof num === 'number') {
    console.log('And beyond');

    if (num > 0) {
      console.log('To infinity');
    }

    if (num < 0) {
      console.log('To negative infinity');
    }

    if (num === 0) {
      console.log('Staying home');
    }
  }
}

beyond(-2);

