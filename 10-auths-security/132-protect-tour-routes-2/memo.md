## **JWT Verifications**

![Alt jwt.verify](pic/01.jpg)

![Alt promisify](pic/02.jpg)

![Alt console.log(decode)](pic/03.jpg)

![Alt Postman send request for tours](pic/04.jpg)

![Alt decode on the console](pic/05.jpg)

## **Editted JWT Token**

![Alt jwt.io to edit payload](pic/06.jpg)

![Alt Postman send request with editted token](pic/07.jpg)

![Alt catch error name "JsonWebTokenError"](pic/08.jpg)

![Alt run production](pic/09.jpg)

![Alt Postman send request with editted token again](pic/10.jpg)

## **Expired JWT Token**

![Alt edit expired time of JWT](pic/11.jpg)

![Alt login to get new token](pic/12.jpg)

![Alt Postman send request with expired token](pic/13.jpg)

![Alt error name on the console](pic/14.jpg)

![Alt catch error name "TokenExpiredError"](pic/15.jpg)

![Alt Postman send request with expired token again](pic/16.jpg)

## **Step3: Check if User still Exist**

![Alt step 3: check if user still exist](pic/17.jpg)

![Alt Postman signup a new account](pic/18.jpg)

![Alt delete new account from database website](pic/19.jpg)

![Alt Postman send request for tours with new account's token](pic/20.jpg)

## **Step4: Check if User Changed Password After the Token was issued**

![Alt step 4: check if user changed password after the token was issued](pic/21.jpg)

![Alt new field "passwordChangedAt", instance method: changedPasswordAfter](pic/22.jpg)

![Alt call it in step4 of protect funtion in the authControllers.js ](pic/23.jpg)

![Alt edit signup function for testing](pic/24.jpg)

![Alt Postman signup a new account with fake property value "passwordChangedAt"](pic/25.jpg)

![Alt Postman send request for tours with token of new account](pic/26.jpg)

## **Finish "changedPasswordAfter" and "protect" functions**

![Alt check times on the console](pic/27.jpg)

![Alt edit/finish instance method: changedPasswordAfter](pic/28.jpg)

![Alt edit/finish step4 of function "protect" in the authController](pic/29.jpg)

![Alt Postman send request for tours](pic/30.jpg)

## **Recovery Codes and Final Test**

![Alt recovery signup function](pic/31.jpg)

![Alt Postman signup new account normally](pic/32.jpg)

![Alt Postman request tours with new account token](pic/33.jpg)
