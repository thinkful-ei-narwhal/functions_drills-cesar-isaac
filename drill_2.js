'use strict';

function jediName(firstName, lastName){
  let fullname =  lastName.slice(0,3)+firstName.slice(0,2);
  return fullname;
}

console.log(jediName('Cesa', 'Morales'));

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