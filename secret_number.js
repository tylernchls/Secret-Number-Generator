'use strict';
module.exports = function() {

//private variable
 var number = Math.random();

//private method
function secretNumber(){
 return number;
}

// public return to expose whats in side
return secretNumber;

};
