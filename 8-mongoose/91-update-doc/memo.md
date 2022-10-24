# **_Get all Tours_**

## **Planing**

![Alt analyze/plan tourControllers.js](pic/bandicam%202022-10-24%2011-32-43-243.jpg)

## **Mongoose Model method 'find'**

![Alt Tour.find()](pic/bandicam%202022-10-24%2011-34-00-804.jpg)

## **async/await to handle promise**

![Alt async/await](pic/bandicam%202022-10-24%2011-34-52-036.jpg)

## **Finish response object (JSend)**

![Alt finish JSend of getTours](pic/bandicam%202022-10-24%2011-35-56-168.jpg)

## **Error handling by try/catch**

![Alt error handler](pic/bandicam%202022-10-24%2011-37-53-578.jpg)

- Unlike the createTour in the previous lecture, there is **no validation error** here, but you still have to do the **error handling**.
  - The error handling solution here will be replaced by a better solution in the next chapter.

## **Test by Postman**

![Alt postman test](pic/bandicam%202022-10-24%2011-41-45-977.jpg)

# **_Get Single Tour by ID_**

## **Copy past/modify from getTour's'**

![Alt copy paste to getTour](pic/bandicam%202022-10-24%2011-47-38-669.jpg)

- **findOne**, as opposed to find, will only get a **single** document, but can pass objects containing field-value pairs for filtering.

## **Shorthand method 'findById'**

![Alt findById](pic/bandicam%202022-10-24%2011-49-41-697.jpg)

- **findById()** is just a shorthand for **findOne({\_id: })**.

## **Test by Postman**

![Alt postman test(add _id)](pic/bandicam%202022-10-24%2011-50-57-986.jpg)
