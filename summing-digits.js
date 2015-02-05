/*** Solution: ***/

function sumDigits(number) {
  var sum = 0,
      newValue = Math.abs(number).toString().split("");
    for (var i = 0, j = newValue.length; i < j; i++){
      sum += parseInt(newValue[i]);
    }
   return sum;
}



/**
*
  
  Title: Summing a number's digits
  Skill Level: 7kyu
  
  Description: Write a function named sumDigits which takes a number as input and returns 
  the sum of the absolute value of each of the number's decimal digits. For example:

    sumDigits(10);  // Returns 1
    sumDigits(99);  // Returns 18
    sumDigits(-32); // Returns 5
  
  Let's assume that all numbers in the input will be integer values.

  
  Provided code: 
  ------------------------
  function sumDigits(number) {
  
  }  
  ------------------------

*
**/
