/*** Solution: ***/

var isAnagram = function(test, original) {

//check to see if same length
  if (test.length != original.length) {
    return false
   }
    
  var origArr = original.toLowerCase().split('').sort();
  var testArr = test.toLowerCase().split('').sort();
    
  for (var i = 0, j = origArr.length; i < j; i++) {
    if (origArr[i] !== testArr[i]){
      return false;
    }
  }
  return true;
}



/**
*
  
  Title: Anagram Detection
  Skill Level: 7kyu
  
  Description: An anagram is the result of rearranging the letters of a word to produce a new word.

  Note: anagrams are case insensitive

  Examples: 

  'foefet' is an anagram of 'toffee'
  'Buckethead' is an anagram of 'DeathCubeK'
  
  The challenge is to write the function isAnagram to return true if the word test is an anagram of 
  the word original and false otherwise. The function prototype is as given below:

  
  Provided code: 
  ------------------------
  var isAnagram = function(test, original) {
  
  };
  
  ------------------------

*
**/





