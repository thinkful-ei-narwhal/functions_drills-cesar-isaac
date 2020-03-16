'use strict';

function jediName(firstName, lastName) {
  let fullname = lastName.slice(0, 3) + firstName.slice(0, 2);
  return fullname;
}

console.log(jediName('Cesa', 'Morales'));

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
