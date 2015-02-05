/*** Solution: ***/

function solveQuadratic(a, b, c) {
  if ( (4*a*c > b*b) || ((a === 0) && (b === 0)) ) { 
    return undefined;
  } else if (a === 0) {
    return [-c/b];
  }
  else {
    var xVals = [];
    var sqrt = (c == 0) ? Math.abs(b) : Math.sqrt(b*b - 4*a*c);
    
    xVals.push((-b - sqrt)/(2*a));
    xVals.push((-b + sqrt)/(2*a));   
    
    if (xVals[0] === xVals[1]) {
      xVals.pop();
    }
    return xVals;
  }
}  





/*
*
  
  Title: Solving Quadratics
  Skill Level: 6kyu
  
  Description: Quadratic equations are equations in the form: Ax2 + Bx + C. 
  You can find x's value in terms of A, B, and C, using the formula:

    x = (-b +- sqrt(b^2 - 4ac)) / 2a 

  Your job is to write a function that takes A, B, and C, and returns either 
  undefined (x cannot be found; the equation is unsolveable), or an array of 
  possible values for x (one or two numerical values).

  NOTE: A, B, or C, can be 0. In these cases, x should still be found. 
  This may not require the full quadratic formula to solve, but it's up to 
  you how to find the answer.

  You should do this as efficiently as possible; square-rooting is a pretty 
  CPU-intensive thing, so we want to use Math.sqrt as few times as possible. 
  If you use Math.sqrt more than is necessary, you won't pass the kata.
  

  Provided code: 
  ------------------------
  function Person(name){
    this.name = name;
  }

  Person.prototype.greet = function(otherName){
    return "Hi " + otherName + ", my name is " + name;
  }
  ------------------------

*
**/


