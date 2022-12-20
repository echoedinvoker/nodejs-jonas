## **Challenge! Create New Model "Reviews"**

![Alt challenge](pic/01.jpg)

- Jonas believes that based on the previous lectures, we should have the ability to complete the reviews model on our own.

## **My Answer**

![Alt answer by myself](pic/02.jpg)

## **Basic fields difinition and fisnish fundamental structure**

![Alt correct answer(basic part of model without parent referencing field)](pic/03.jpg)

- The part that makes me wonder is 3. Does the absence of both "default" and "require" option properties mean that the field "rating" is dispensable?
- The main purpose of model.js is to export the Model object, which is then generated from the Schema.
- Although mongoose.Schema.ObjectId is a special type, the field of this type can also have some options property that a normal field has.

## **Implement parent referencing fields**

> As mentioned in the theory course, in order to avoid the problem of reference infinite review growth, we use "parent" referencing, so we must define parent referencing fields in the child model.

![Alt correct answer(about referencing field)](pic/04.jpg)

- Note that unlike the previous field "guides" in tours, the reference here is a single one value in field "tour" and "user", so it is not an array of objects but an object.

## **Schema options about virtuals**

![Alt add virtuals options back](pic/05.jpg)

- This part is prepared in advance for future use of virtual fields, and has become part of the routine Schema writing.
