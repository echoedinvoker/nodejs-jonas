## Define all Steps of function "resetPassword"\*\*

![Alt define steps of function "resestPassword"](pic/01.jpg)

## **Step 1: Get user based on the reset token**

![Alt 1) Get user based on the reset token](pic/02.jpg)

![Alt additional query condition: expired or not](pic/03.jpg)

![Alt asynchronous](pic/04.jpg)

## **Step 2: If reset token has not expired, and there is user, set the new password**

![Alt 2) If reset token has not expired, and there is user, set the new password](pic/05.jpg)

## **Step 4: Response JWT to client**

![Alt 4) response JWT to client](pic/06.jpg)

## **Test**

![Alt Postman test forgotPassword](pic/07.jpg)

![Alt Copy reset token from Mailtrap](pic/08.jpg)

![Alt Postman test resetPassword](pic/09.jpg)

![Alt set Postman script to auto assign JWT to env variable](pic/10.jpg)

![Alt send request and get new JWT token ](pic/11.jpg)

![Alt check database if password updated](pic/12.jpg)

## **Test again, the reason we use ".save" to update user document**

![Alt send request with old reset token again](pic/13.jpg)

![Alt Postman forgetPassword](pic/14.jpg)

![Alt Copy reset token from Mailtrap](pic/15.jpg)

![Alt send request with diff password and confirm and get validation error](pic/16.jpg)

## **Step 3: Update "changedPasswordAt" for the user**

![Alt 3) Update changedPasswordAt for the user](pic/17.jpg)

![Alt implement it by pre-save-hook middleware](pic/18.jpg)

![Alt minus 1 second of "passwordChangedAt"](pic/19.jpg)

## **Test for property "passwordChangedAt"**

![Alt Postman test "forgotPassword"](pic/20.jpg)

![Alt Copy reset token from Mailtrap](pic/21.jpg)

![Alt Postman test "resetPassword"](pic/22.jpg)

![Alt check database if "passwordChangedAt" exist](pic/23.jpg)
