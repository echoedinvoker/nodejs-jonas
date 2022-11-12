## **Intro Virtual Property**

> Sometimes we need to present more fields in the document, but these fields do not want to be stored in the database, such as the following example.

![Alt purpose](pic/bandicam%202022-11-13%2001-47-31-679.jpg)

- Since duration per week can be obtained from duration, there is little point in storing both in the database.

## **Implement Virtual Property**

> Mongoose's model object provides method **virtual**, which can generate fields only when we get data. So these fields are not exist in the database.

![Alt virtual method](pic/bandicam%202022-11-13%2001-52-36-423.jpg)

- The point of the above picture is that the **regular function** must be used so that keyword **this** represents the **document** itself.
- The method **get** generate property of Schema's instance(document), which is actually the **getter** in JavaScript Class.

![Alt Schema's option](pic/bandicam%202022-11-13%2001-55-52-670.jpg)

## **Failed and Fix**

![Alt failed](pic/bandicam%202022-11-13%2001-58-46-789.jpg)

![Alt fix](pic/bandicam%202022-11-13%2002-00-14-566.jpg)

![Alt success](pic/bandicam%202022-11-13%2002-00-44-681.jpg)

## **Cannot Query Virtual Property**

- We cannot **query** the **virtual property**.
  - For example, using Postman to send a request URL with _?fields=durationWeeks_ will result in an **error**.
  - This is because the **virtual property** does not exist in the database.
    - Of course, if we get the data out of the database and generate the **virtual property**, we can process it in, for example, in the controller.
      - But this is not a good way, because **'fat model, thin controller'**.
        - **business work** must be stayed in **model**, instead of controller.
