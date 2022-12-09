## **updateMe**

![Alt description](pic/01.jpg)

- Note that updatePassword is placed in authController, and updateMe is placed in userController, we are used to put the two functions in separate controllers with different resources, this is just a common design approach, and we just follow the convention.

## **Create Error if user POST password/passwordConfirm**

> Because update password is a function of updatePassword and not a function of updateMe here, so when the user request body provides password-related data, it must generate an appropriate error message to the client.

### _controller_

![Alt create error if user POSTs password data](pic/02.jpg)

### _router_

![Alt router](pic/03.jpg)

### _POSTMAN test_

![Alt create new folder in Postman](pic/04.jpg)

![Alt create new request "update my data" in Postman](pic/05.jpg)

![Alt send request "update my data" with password data](pic/06.jpg)

## **Update User Data with .save**

![Alt update user document with .save](pic/07.jpg)

![Alt send request and get validation error](pic/08.jpg)

- Because .save will directly validate the attached user object content, it will produce the above error result and is not suitable for this situation.

## **Replace .save with .findByIdAndUpdate**

![Alt replace .save with .findByIdAndUpdate](pic/09.jpg)

- We turn on validation in the third parameter option, but the difference with .save is that although there is validation, it doesn't generate error messages like require password.

## **Filter Request Body**

> Not every field except the password can be updated, for example, "role" is not suitable to be updated by the user himself, so we need to filter the body of the client request.

![Alt filteredBody](pic/10.jpg)

![Alt finish function filterObj](pic/11.jpg)

![Alt response updated user data to client](pic/12.jpg)

## **Final Test**

![Alt test with postman](pic/13.jpg)

![Alt test with unwanted field](pic/14.jpg)
