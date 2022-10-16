## **Seperate Router Handler and Router**

![Alt analyze](pic/bandicam%202022-10-16%2010-03-00-535.jpg)

- The part with the line above is the **router handler**, which can be **separated out** to make the code more readable.

![Alt first refactor](pic/bandicam%202022-10-16%2010-04-47-220.jpg)

![Alt seperate all functions and routers](pic/bandicam%202022-10-16%2010-13-54-503.jpg)

- In this way, the router handler is separated from the URL and methods part.
  - This way we can know at a glance which routers we have.
  - We can even export these routers easily.

## **Chaining Methods about Router**

> We found that we kept writing the same **URLs** over and over again, so we can do further **refactor**.

![Alt chaining router](pic/bandicam%202022-10-16%2010-17-53-522.jpg)

- express provides the above way to refactor our router.

![Alt chaning all routers](pic/bandicam%202022-10-16%2010-19-41-870.jpg)
