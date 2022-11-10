## **Describe the shortcomings of the current Filter**

![alt](pic/bandicam%202022-11-10%2009-22-56-104.jpg)

- In reality, we cannot only filter by **equals**, there may be other filtering requirements such as **greater than, less than, etc**.

## **New type of Request (URL)**

![alt](pic/bandicam%202022-11-10%2009-28-21-356.jpg)

- **find** is actually using the native Mongo method find directly.
  - So, If you want to know more about operators and syntax of object which pass into find, you can directly refer to the official Mongo documentation online.
- Because the object passed into find is not in the correct format, we get response code **404**.

## **Adjust Request Object and Finish Work**

![alt](pic/bandicam%202022-11-10%2009-44-45-571.jpg)

- **JSON.stringify and JSON.parse** can be used not only for data transfer, but also to **replace some words in Object** by using JSON.stringify to convert them to strings, replace and then convert them back.
- The lecturer said that **regular expression** is perhaps the most difficult part of programming, so don't be shy about **asking for help on the Internet**.
