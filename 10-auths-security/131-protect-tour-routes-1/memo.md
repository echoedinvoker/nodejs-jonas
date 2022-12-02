## **Goal**

### _already done: issue JWT from server to client_

![Alt already implement: issue JWT](pic/01.jpg)

### _now we want to implement: send JWT from client to server to varify_

![Alt next we will implemenet: varification JWT](pic/02.jpg)

- The verification mechanism only needs to be triggered if the router that client call is protected.

## **What is "protect" routes and How to implement it?**

![Alt what is protect means?](pic/03.jpg)

- The easiest and most effective way is to add a middleware directly in front of getTours to check if there is a valid JWT token.

![Alt build structure of function protect](pic/04.jpg)

![Alt insert middleware protect in front of getTours](pic/05.jpg)

## **How to send JWT from Client?**

> Generally, the client will use the header to carry the JWT token for verification.

### _test header with custom content_

![Alt console.log(req.header)](pic/06.jpg)

![Alt send request of custom header content](pic/07.jpg)

![Alt check console](pic/08.jpg)

### _test header with carrying JWT token_

![Alt send request with JWT token](pic/09.jpg)

![Alt check token on the console](pic/10.jpg)

## **Getting token and check of it's there**

> Then start implementing the first part of the function "protect".

![Alt finish 1) Getting token and check of it's there](pic/11.jpg)

- The first part is very simple, except for the use of AppError to generate errors, basically it's mostly just JavaScript concepts.
- Other steps will be completed in the subsequent lectures.

![Alt send request to get tours without token](pic/12.jpg)
