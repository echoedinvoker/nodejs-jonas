## **Mongoose Error: ValidationError**

![Alt run production mode directly](pic/01.jpg)

- lecture is using "npm start" (development mode) to do the analysis, it seems that you can see the err information more clearly on Postman.

![Alt patch with invalid values](pic/02.jpg)

- Because validation error is also an error that we expect to occur, it should be an operational error.

## **Try to get usefull info with console**

![Alt try to get usefull info with console](pic/03.jpg)

- Object.values takes the values underneath the object passing into it, split and regroup into an array
- We can try here until we get the information we want.

## **Catch Validation Error with "name: ValidationError"**

![Alt catch validation error with "name: ValidationError"](pic/04.jpg)

## **Create Error by Ourself with AppError**

![Alt written contents of handleValidationErrorDB](pic/05.jpg)

![Alt final test](pic/06.jpg)
