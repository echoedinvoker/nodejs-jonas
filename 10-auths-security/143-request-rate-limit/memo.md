# **_IMPLEMENTING RATE LIMITING_**

> We prevent DDOS and brute force attacks by limiting the number of requests from the same IP within a certain period of time. We can do this simply by using the 3rd-party package "express-rate-limit".

## **Install/Import express-rate-limit package**

![Alt import/install express-rate-limit](pic/01.jpg)

## **Create/Use Rate Limit Middleware**

### _Create middleware function with rateLimit function_

![Alt use rateLimit to create limiter ](pic/02.jpg)

### _Use middleware function in the app.js_

![Alt use limiter](pic/03.jpg)

- Note that the first argument here must be route, so we use "/app" to represent all routes.

## **Test and Check headers of response**

![Alt test with Postman](pic/04.jpg)

- In addition to "X-RateLimit-Remaining" being reset when the time of "X-RateLimit-Reset" is reached, "X-RateLimit-Remaining" is also reset when the server is restarted.

## **Test error message**

![Alt reduce max number to test error message](pic/05.jpg)

![Alt test error message with  Postman](pic/06.jpg)
