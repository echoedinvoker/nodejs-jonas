## **Custom validate**

![Alt goal](pic/01.jpg)

- Obviously the validator we need is not built in, so we have to design our own validator.

![Alt custom validate](pic/02.jpg)

- If the validation process does not need to call the current document, you can certainly use the arrow function to define the validator.

![Alt Postman test](pic/03.jpg)

### _add custom failed message_

![Alt add curly brackets](pic/04.jpg)

![Alt finish with keys](pic/05.jpg)

- So the previous is a more concise way of writing, and now in order to have custom failed message so use the full method of writing, the difference between the two in a curly bracket and the use of key names or not.

![Alt Postman custom failed message](pic/06.jpg)

## **Tiny but important things**

> Mongoose has some minor but important details that must be paid special attention to.

![Alt small piece point 1](pic/07.jpg)

- So this validator does not work in .update()

![Alt small piece point 2](pic/08.jpg)

- The above is an example from the previous lecture, which also does not work on .update(), and in fact the same factors lead to.

## **3rd-Party validator**

> In addition to the built-in and custom validator, we can also use the 3rd-party library to generate.

![Alt vlidator.js string only](pic/09.jpg)

![Alt vlidator.js function list](pic/10.jpg)

## **Import/use it in validate**

![Alt import validator](pic/11.jpg)

![Alt use its function in Schema validate](pic/12.jpg)

- The validator is a namespace, and the functions under it can generate various kinds of validators, which we can simply call as above.
  - But note that it is not called here, they will be called when appropriate timing.

![Alt Postman test](pic/13.jpg)

![Alt comment it and keep](pic/14.jpg)
