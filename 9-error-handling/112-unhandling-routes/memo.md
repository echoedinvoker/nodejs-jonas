## **Client Send Invalid Request**

![Alt situation1: invalid url](pic/01.jpg)

![Alt situation2: non-exist ID](pic/05.jpg)

- In the second case, the URL is actually correct but the given ID does not exist in the database, so although you will also get an error, it is essentially different from the first case.

## **Handling it**

![Alt try to handling unhandling route](pic/02.jpg)

- The point here is the **order** of the route, only the previous request not processed by any previous route will come to this part **(app.all)**.

## **Re-Test**

![Alt retest situation1](pic/03.jpg)

![Alt retest situation2](pic/04.jpg)
