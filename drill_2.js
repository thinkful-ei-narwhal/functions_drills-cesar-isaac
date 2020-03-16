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

function rockPaperScissors(number){
  if(number <0 && number >3){
    throw new Error('enter valid number');
  }
  const randomNo = Math.floor(Math.random() * 3) + 1;

  switch (number) {
  case 1:
    if(randomNo===1){
      return 'you tied: opponent picked rock';
    }
    if(randomNo===2){
      return 'you lose: opponent picked paper';
    }
    if(randomNo===3){
      return 'you win: opponent picked scissors';
    }
    break;

  case 2:
    if(randomNo===1){
      return 'you win: opponent picked rock';
    }
    if(randomNo===2){
      return 'you tied: opponent picked paper';
    }
    if(randomNo===3){
      return 'you lose: opponent picked scissors';
    }
    break;
    
  case 3:
    if(randomNo===1){
      return 'you lose: opponent picked rock';
    }
    if(randomNo===2){
      return 'you tied: opponent picked paper';
    }
    if(randomNo===3){
      return 'you win: opponent picked scissors';
    }
    break;
  }

}
// rock =1 paper=2 scissors=3
try{
  console.log(rockPaperScissors(2));
}catch(error){
  console.log(error.message);
}
