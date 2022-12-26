## **Redirect GET request for all reviews on tour**

![Alt follow next concept](pic/01.jpg)

- In the previous lection, we have redirected the '/tours/:tourId/reviews' url in tourRouters.js to reviewsRouters.js as a POST request and use { mergeParams: true } in reviewRouters.js, and it also works for GET requests with the same url.
  - So we only need to deal with the controller function directly in this lectur.

## **Modify Controller's function 'getAllReviews'**

![Alt modify controller function 'getAllRevies'](pic/02.jpg)

- As in the previous section, we add if-condition so that the same controller function can be used by different routes.

## **Postman request build and Test**

![Alt create new request on Postman](pic/03.jpg)

![Alt test](pic/04.jpg)
