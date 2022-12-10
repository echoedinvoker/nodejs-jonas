## **Implement Deleting user**

> This lecture will implement a router that allows users to delete their accounts.

### _Add new property 'active' into user Schema_

![Alt Schema "active"](pic/01.jpg)

### _function 'deleteMe' in userControllers_

![Alt function deleteMe](pic/02.jpg)

- status code 204 means 'no content', use this code to not response any message to the client side.
- Note that here we are using the method "findByIdAndUpdate" instead of "findByIdAndDelete", because we are not deleting the user data from the database

### _router '/deleteMe' in userRouters_

![Alt router '/deleteMe'](pic/03.jpg)

- Note that the router name is wrong in the above picture, it should be '/deleteMe'.

## **Test**

### _create request 'Delete My Account' in Postman_

![Alt create request 'Delete My Account' in Postman](pic/04.jpg)

### _Query all users data_

![Alt Query all users](pic/05.jpg)

### _Login_

![Alt login](pic/06.jpg)

### _Delete account_

![Alt delete my account](pic/07.jpg)

### _Check if account exist by Querying request_

![Alt query all users, still exist](pic/08.jpg)

## **Use pre-query-hook Middleware to Filter Out inactive users**

### _Use regular expression to select all methods start with 'find'_

![Alt query middleware to filter out 'active: false' users](pic/09.jpg)

- The method "find" used here is an instance method for current user documents, unlike User.find, which can change current user documents directly based on the query result.

![Alt use regular expression to replace 'find' string](pic/10.jpg)

### _Instance method of current user documents and query condition_

![Alt contents of middleware](pic/11.jpg)

![Alt query all users, get nothing](pic/12.jpg)

![Alt modify query condition in the middleware a bit](pic/13.jpg)

### _Final Test_

![Alt query all users again, success](pic/14.jpg)

![Alt check database, user is still exist but 'active: false'](pic/15.jpg)

- You can find that although you can't query inactive users anymore, the data of these inactive users still exists in the database.
