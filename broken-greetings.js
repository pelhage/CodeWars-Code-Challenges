/*** Solution: ***/

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}




/*
*
  
  Title: Broken Greetings
  Skill Level: 8kyu
  
  Description: Correct this code, so that the greet function returns the expected value. 
  

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


