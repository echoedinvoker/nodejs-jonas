## **Problem: If we want to refer reviews in tour document, how?**

- There are three ways:
  - Every time you query each tour, you check if there is a review related to this tour.
    - More complex to implement and more performance intensive
  - Add child(reviews) referencing field into tour document.
    - This way, when the number of reviews increases infinitely, the tour document will grow to an infinite size.
  - The last method is the one provided by 'Mongoose' - 'virtual population'.
    - Easy implementation and no need to record any information about the child document in the parent document.

## **Solution: Child Referencing**

![Alt child referencing in tours](pic/01.jpg)

- Because we are not sure how much the number of reviews will increase, this approach is risky.

## **Solution: Virtual population**

### _Virtual population field_

![Alt virtual population field](pic/02.jpg)

- Above we do virtual population field, by the way, we can compare with child referencing and general virtual field.
- Be careful with the second parameter of method virtual, and don't confuse the values corresponding to each property in the object.

### _Populate virtual population field_

![Alt populate it](pic/03.jpg)

- It can be seen as adding a new field "reviews", whose type is "mongoose.Schema.ObjectId".
  - It will not be recorded in the database, but will only be generated when querying.
- So we'll just use the same way to populate this field as normal referencing field.
- We only use populate in the function that queries a single tour, not in all query functions.
  - If you query all tours and bring in reviews, the result will be too big.

### _Test_

![Alt test](pic/04.jpg)

- As you can see above, we don't have any reviews references in the tour document in the database, but we can still populate the reviews into the tour document when we query it.
