## **Check if email and password exist in request body**

![Alt login function structure](pic/01.jpg)

![Alt 1) check if email and password exist](pic/02.jpg)

![Alt create a fake token to response for the test in advanced](pic/03.jpg)

![Alt build route for login](pic/04.jpg)

![Alt test with email and password](pic/05.jpg)

![Alt test only with email](pic/06.jpg)

## **Avoid PASSWORD being queried**

![Alt build function getUsers](pic/07.jpg)

![Alt test but expose password](pic/08.jpg)

![Alt Schema - select: false](pic/09.jpg)

![Alt test and password won't be queried anymore](pic/10.jpg)

## **Query User and Explicitly SELECT**

![Alt query user and explicitly select password](pic/11.jpg)

![Alt asynchronous things and console test](pic/12.jpg)

![Alt send request with postman](pic/13.jpg)

![Alt check "user" in the console](pic/14.jpg)

## **Instance Method: correctPassword**

![Alt build instance method: correctPassword in the userModel.js](pic/15.jpg)

![Alt use correctPassword in the authControllers.js](pic/16.jpg)

![Alt if-condition](pic/17.jpg)

![Alt add await ](pic/18.jpg)

![Alt move correctPassword into condition](pic/19.jpg)

## **Signing TOKEN**

![Alt analyze signing token will be repeately used](pic/20.jpg)

![Alt refactor signing token as function](pic/21.jpg)

## **Final TEST**

![Alt test with postman(signup new account)](pic/22.jpg)

![Alt test with postman(login with it)](pic/23.jpg)
