## **Step2: JWT Verifications**

### _jwt.verify_

![Alt jwt.verify](pic/01.jpg)

### _promisify_

![Alt promisify](pic/02.jpg)

- Here we use the NodeJS native method "promiseify" to convert "jwt.verify" to an asynchronous function that returns the promise (which it doesn't), so we can continue to write using the async/await pattern

### _check result of verification_

![Alt console.log(decode)](pic/03.jpg)

![Alt Postman send request for tours](pic/04.jpg)

![Alt decode on the console](pic/05.jpg)

- So if "jwt.verify" succeeds, you will get payload data, and if it fails, you will get one of the following two errors.

## **Editted JWT Token**

### _Deliberately generate an edited token for testing_

![Alt jwt.io to edit payload](pic/06.jpg)

![Alt Postman send request with editted token](pic/07.jpg)

### _Handling Errors_

![Alt catch error name "JsonWebTokenError"](pic/08.jpg)

![Alt run production](pic/09.jpg)

![Alt Postman send request with editted token again](pic/10.jpg)

## **Expired JWT Token**

### _Deliberately generate an expired token for testing_

![Alt edit expired time of JWT](pic/11.jpg)

![Alt login to get new token](pic/12.jpg)

![Alt Postman send request with expired token](pic/13.jpg)

![Alt error name on the console](pic/14.jpg)

### _Handling Errors_

![Alt catch error name "TokenExpiredError"](pic/15.jpg)

![Alt Postman send request with expired token again](pic/16.jpg)

## **Step3: Check if User still Exist**

![Alt step 3: check if user still exist](pic/17.jpg)

![Alt Postman signup a new account](pic/18.jpg)

![Alt delete new account from database website](pic/19.jpg)

![Alt Postman send request for tours with new account's token](pic/20.jpg)

## **Step4: Check if User Changed Password After the Token was issued**

![Alt step 4: check if user changed password after the token was issued](pic/21.jpg)

- As in the previous lecture on comparing passwords, password-related processing is more appropriate for the model and implemented using instance methods, so that each user document can call it directly.

![Alt new field "passwordChangedAt", instance method: changedPasswordAfter](pic/22.jpg)

- The logic for generating the new field "passwordChangedAt" will be implemented in a future lecture, but for now we are using fake data to generate it directly for testing.

![Alt call it in step4 of protect funtion in the authControllers.js ](pic/23.jpg)

![Alt edit signup function for testing](pic/24.jpg)

- function "signup" this side to add this line otherwise "passwordChangedAt" fake data will not be added into, here is to do a test, before the end of the course to remember to restore the original codes.

![Alt Postman signup a new account with fake property value "passwordChangedAt"](pic/25.jpg)

![Alt Postman send request for tours with token of new account](pic/26.jpg)

## **Finish "changedPasswordAfter" and "protect" functions**

![Alt check times on the console](pic/27.jpg)

- Both sides represent time but the format is different, so some modifications are needed to compare them to meet our needs.

![Alt edit/finish instance method: changedPasswordAfter](pic/28.jpg)

![Alt edit/finish step4 of function "protect" in the authController](pic/29.jpg)

![Alt Postman send request for tours](pic/30.jpg)

## **Recovery Codes and Final Test**

### _Recovery Codes_

![Alt recovery signup function](pic/31.jpg)

### _Run-through of the normal signup and request tours(final test)_

![Alt Postman signup new account normally](pic/32.jpg)

![Alt Postman request tours with new account token](pic/33.jpg)

- Above is a run-through of the normal sigup and reuqest tours to make sure our program is running properly.
