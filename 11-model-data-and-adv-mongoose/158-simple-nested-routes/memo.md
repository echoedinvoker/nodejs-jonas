## **What URL we will implement?**

![Alt URL to create new review on tour](pic/01.jpg)

![Alt URL to get all reviews on tour](pic/02.jpg)

![Alt URL to get specific review on tour](pic/03.jpg)

## **Nested Routes**

> Let's start by implementing to create new review on the tour.

![Alt create nested routes](pic/04.jpg)

- Because the URL starts with "/tours", we have to create routes in tourRouters.js, which is a bit counterintuitive, and we'll address this later in other lectures.

## **Allow Data from Nested routes/Protect Middleware to function in controller**

![Alt allow nested routes by controller funciton](pic/05.jpg)

- In the above codes, we use "if condition" to make the function work regardless of whether user or tour id is provided in req.body, so that this function can be used by different routes at the same time.

## **Postman: create new request and test**

![Alt create new request on Postman](pic/06.jpg)

![Alt Test](pic/07.jpg)
