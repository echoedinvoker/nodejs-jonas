## **Description: Mongoose Id un-recognized error**

![Alt problem and goal](pic/01.jpg)

- So we need to use the property "name: CastError" to catch this type of Mongoose error.
- Then use AppError to create a new error with "isOperational" and a more appropriate error message for the client.

![Alt only care about ...](pic/02.jpg)

## **Mark Error with "isOperational" (Create new Error with AppError)**

### _catch Mongoose error by "name: CastError"_

![Alt catch name: "CastError" Mongoose error](pic/03.jpg)

### _Fix bad practice (assign value to arg) with hard copy_

![Alt fix bad practice with copy object with object destructure](pic/04.jpg)

### _Create new error by AppError_

![Alt create custom error by AppError](pic/05.jpg)

## **Bug: error.name disapper**

![Alt start app in production mode to test](pic/06.jpg)

![Alt bug happen...](pic/07.jpg)

![Alt reason why bug](pic/08.jpg)

- The result of the console.log test shows that in production mode, the name property of the Mongoose error object disappears, and "CastError" appears directly in the AppError's constructor property name.
  - You can details Q&A here:
    - https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15065218#questions/11651594

## **Fix Bug: Copy with "Object.assign" and Test**

![Alt fix way: copy with "Object.assign"](pic/09.jpg)

- Using "Object.assign" instead of object destructure's copy will get us the property "name: CastError" we need back.

![Alt recover our codes with new copy way](pic/10.jpg)

![Alt final test: pass](pic/11.jpg)
