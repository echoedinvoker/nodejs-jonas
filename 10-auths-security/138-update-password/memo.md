## **Define all steps of function "updatePassword**

![Alt frame of updatePassword](pic/01.jpg)

- The difference from forgotPassword/resetPassword is that updatePassword changes the password while the user is logged in, so it should be a lot easier.

## **Challenge**

![Alt 1) router](pic/02.jpg)

- I choose to use the middleware "protect" before the function "updatePassword" to check if there is a token and get the user information into the req.

![Alt finish codees of updatePassword](pic/03.jpg)

![Alt Test login to get JWT](pic/04.jpg)

![Alt test updatePassword](pic/05.jpg)

![Alt updatePassword again](pic/06.jpg)

![Alt fix a bug about decoded.iat](pic/07.jpg)

## **Answer by Lecturer**

> Generally speaking, the solution is the same as my own, except that there is a further step to refactor sign Token codes.

### _Refactor Signing Token and Response_

![Alt](pic/08.jpg)

![Alt](pic/09.jpg)

![Alt](pic/10.jpg)

![Alt](pic/11.jpg)

![Alt](pic/12.jpg)

![Alt](pic/13.jpg)

![Alt](pic/14.jpg)

### _lecturer use PATCH_

- Another difference is that the lecturer uses PATCH instead of POST, but both results are the same, and both should work, because the user data we get after using findOne to modify the user information and save back is also the complete user data.
