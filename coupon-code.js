/*** Solution: ***/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  
  var convertCurrent = new Date(currentDate);
  var convertExpire = new Date(expirationDate);  
  
  if ((enteredCode === correctCode) && (convertCurrent <= convertExpire)) {
    return true;
  }
  return false;
};


/*
*
  
  Title: The Coupon Code
  Skill Level: 7kyu
  
  Description: Your online store likes to give out coupons for special occasions. 
  Some customers try to cheat the system by entering invalid codes or using expired coupons.

  Your mission: Write a function called checkCoupon to verify that a coupon is valid and not 
  expired. If the coupon is good, return true. Otherwise, return false.

  A coupon expires at the END of the expiration date. All dates will be passed in as strings 
  in this format: "June 15, 2014"

  
  Provided code: 
  ------------------------
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  }

  Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
  Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);  
  ------------------------

*
**/





