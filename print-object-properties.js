function pluck(objs, name) {
var newArray = [];

  for (var key in objs) {
    newArray.push(objs[key][name]);
  }
  return newArray
}





/**
*
  
  Title: Pluck 
  Skill Level: 7kyu
  
  Description:

  Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

  For example:

	pluck([{a:1}, {a:2}], 'a') // -> [1,2]
  
  If an object is missing the property, you should just leave it as undefined in the output array.


  Provided code: 
  ------------------------
  function pluck(objs, name) {

  }  
  ------------------------

*
**/






