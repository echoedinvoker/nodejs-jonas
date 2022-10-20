## **Multiple Middleware functions**

![Alt multiple middleware functions](pic/bandicam%202022-10-20%2014-39-39-431.jpg)

- About methods for adding middleware to middleware stack (e.g. get, post, delete,...) In fact, you can pass **multiple** middleware functions into it, and they will be processed from **left to right in order** (you **still need to call next** in the middle).
- lecturer gave some **hints (comment part)**, and hope that we follow the hints themselves to implement a **middleware to check request body for post method**.

## **My Answer**

![Alt write middleware function by myself](pic/bandicam%202022-10-20%2014-51-42-376.jpg)

## **Test With Postman**

![Alt test with invalid body](pic/bandicam%202022-10-20%2014-52-37-200.jpg)

![Alt test with valid body](pic/bandicam%202022-10-20%2014-53-59-853.jpg)

- The test results are very reasonable.

## **Make a few more Adjustments**

> But there are still some adjustments to be made to make the **code structure** better.

![Alt function should be in controller](pic/bandicam%202022-10-20%2014-59-01-898.jpg)

- middleware function should be placed in Controllers.js instead of Rounters.js.

![Alt export it to routers](pic/bandicam%202022-10-20%2014-59-39-404.jpg)

- Then, export it back to tourRouters.js.
