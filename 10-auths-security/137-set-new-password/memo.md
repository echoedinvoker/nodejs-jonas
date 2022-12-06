## **Define all Steps of function "resetPassword"**

![Alt define steps of function "resestPassword"](pic/01.jpg)

## **Step 1: Get user based on the reset token**

![Alt 1) Get user based on the reset token](pic/02.jpg)

- Crypto encryption is much simpler than bcrypt, so the reset token obtained from mailtrap can be used to query the user in the database directly after encryption, without the need to use special methods such as "compare" to compare as in JWT.

![Alt additional query condition: expired or not](pic/03.jpg)

- findOne is a native Mongo function that allows multiple query conditions, so we directly add the reset token expired query condition here, so that only when there is this reset token in the database and not yet expired will we get the user, otherwise we get the falcy value.

![Alt asynchronous](pic/04.jpg)

## **Step 2: If reset token has not expired, and there is user, set the new password**

![Alt 2) If reset token has not expired, and there is user, set the new password](pic/05.jpg)

- (2) is the main purpose of this function: to update the password
- (3) is also important because the reset token should not be able to be reused, so when the main purpose of (2) is completed, the propertes associated with the reset token should be removed from the database to avoid being used by someone with an intention to.
- Note that in (4) we use .save to update user data without adding any options. Here is actually a key point.

## **Step 4: Response JWT to client**

![Alt 4) response JWT to client](pic/06.jpg)

- We keep the volume of the lecture not too much, so we don't do refactor operation here.

## **Test**

![Alt Postman test forgotPassword](pic/07.jpg)

![Alt Copy reset token from Mailtrap](pic/08.jpg)

![Alt Postman test resetPassword](pic/09.jpg)

![Alt set Postman script to auto assign JWT to env variable](pic/10.jpg)

![Alt send request and get new JWT token ](pic/11.jpg)

![Alt check database if password updated](pic/12.jpg)

- The password is encrypted by the middleware before it is saved to the database, which is why we use .save to update the password, because only .save and .create can trigger the pre-save-hook middleware.

## **Test again, the reason we use ".save" to update user document**

![Alt send request with old reset token again](pic/13.jpg)

- As mentioned before, reset tokens should not be able to be used repeatedly.

![Alt Postman forgetPassword](pic/14.jpg)

![Alt Copy reset token from Mailtrap](pic/15.jpg)

![Alt send request with diff password and confirm and get validation error](pic/16.jpg)

- You can see that the validation mechanism of user Schema is working because we use .save to update the user data. this is important.

## **Step 3: Update "changedPasswordAt" for the user**

![Alt 3) Update changedPasswordAt for the user](pic/17.jpg)

![Alt implement it by pre-save-hook middleware](pic/18.jpg)

![Alt minus 1 second of "passwordChangedAt"](pic/19.jpg)

## **Test for property "passwordChangedAt"**

![Alt Postman test "forgotPassword"](pic/20.jpg)

![Alt Copy reset token from Mailtrap](pic/21.jpg)

![Alt Postman test "resetPassword"](pic/22.jpg)

![Alt check database if "passwordChangedAt" exist](pic/23.jpg)

- Successfully added the property "passwordChangedAt" to the user document, so that the token before the password update will not work anymore.
