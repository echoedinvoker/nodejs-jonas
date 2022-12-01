## **Check if email and password exist in request body**

![Alt login function structure](pic/01.jpg)

![Alt 1) check if email and password exist](pic/02.jpg)

### _create fake token to response(test purpose)_

![Alt create a fake token to response for the test in advanced](pic/03.jpg)

### _route_

![Alt build route for login](pic/04.jpg)

![Alt test with email and password](pic/05.jpg)

![Alt test only with email](pic/06.jpg)

## **Avoid PASSWORD being queried**

### _build query function_

![Alt build function getUsers](pic/07.jpg)

![Alt test but expose password](pic/08.jpg)

### _select: false_

![Alt Schema - select: false](pic/09.jpg)

![Alt test and password won't be queried anymore](pic/10.jpg)

- Note that the option "select" is to make the field "password" unavailable to all queries, not just hidden.

## **Query User and Explicitly SELECT**

![Alt query user and explicitly select password](pic/11.jpg)

![Alt asynchronous things and console test](pic/12.jpg)

![Alt send request with postman](pic/13.jpg)

![Alt check "user" in the console](pic/14.jpg)

## **Instance Method: correctPassword**

![Alt build instance method: correctPassword in the userModel.js](pic/15.jpg)

- It is important to note that we write the code to compare passwords in the model, instead of controller.
- It is also because of the "select: false" in the Schema that we cannot use "this.password" directly, so the effect of the option "select" is comprehensive and should be used with care.

![Alt use correctPassword in the authControllers.js](pic/16.jpg)

![Alt if-condition](pic/17.jpg)

![Alt add await ](pic/18.jpg)

![Alt move correctPassword into condition](pic/19.jpg)

- We put line 38 directly into the condition so that if the user does not exist, it will not be executed and no error will occur. It is very tricky :)

## **Signing TOKEN**

![Alt analyze signing token will be repeately used](pic/20.jpg)

![Alt refactor signing token as function](pic/21.jpg)

## **Final TEST**

![Alt test with postman(signup new account)](pic/22.jpg)

![Alt test with postman(login with it)](pic/23.jpg)
