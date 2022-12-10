## **Implement Deleting user**

![Alt Schema "active"](pic/01.jpg)

![Alt function deleteMe](pic/02.jpg)

![Alt router '/deleteMe'](pic/03.jpg)

## **Test**

![Alt create request 'Delete My Account' in Postman](pic/04.jpg)

![Alt Query all users](pic/05.jpg)

![Alt login](pic/06.jpg)

![Alt delete my account](pic/07.jpg)

![Alt query all users, still exist](pic/08.jpg)

## **Use pre-query-hook Middleware to Filter Out inactive users**

### _Use regular expression to select all methods start with 'find'_

![Alt query middleware to filter out 'active: false' users](pic/09.jpg)

![Alt use regular expression to replace 'find' string](pic/10.jpg)

### _Instance method of current user documents and query condition_

![Alt contents of middleware](pic/11.jpg)

![Alt query all users, get nothing](pic/12.jpg)

![Alt modify query condition in the middleware a bit](pic/13.jpg)

### _Final Test_

![Alt query all users again, success](pic/14.jpg)

![Alt check database, user is still exist but 'active: false'](pic/15.jpg)
