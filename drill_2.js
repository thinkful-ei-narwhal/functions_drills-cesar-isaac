'use strict';

function jediName(firstName, lastName){
  let fullname =  lastName.slice(0,3)+firstName.slice(0,2);
  return fullname;
}

console.log(jediName('Cesa', 'Morales'));