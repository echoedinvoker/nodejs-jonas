## **Popular Query URL**

![Alt popular query URL](pic/bandicam%202022-11-11%2009-12-24-908.jpg)

- There are some frequently used **query URLs** that can be specialized into **alias** routers.

## **Build Alias Router**

![Alt pass middleware into get](pic/bandicam%202022-11-11%2009-20-00-666.jpg)

- The **get** method of router object can pass in **multiple** controller functions, which is actually run by the concept of **middleware pipeline** (but only triggered with **HTTP GET method** by clients).

## **Build Middleware for Alias**

> Write the contents of the above **middleware aliasTopTours** in the **controller**.

![Alt build middleware](pic/bandicam%202022-11-11%2009-29-55-301.jpg)

- This new middleware aliasTopTours actually generates the **fixed request object content** directly on the server side before the original getTours work.
- Although aliasTopTours is passed into get method, it is not the last middleware to be executed, so it must call **next** function.

## **Analyze and Test**

![Alt import middleware into tourRouters.js](pic/bandicam%202022-11-11%2009-38-25-286.jpg)

- Finally, we **import** the written middleware back into **toursRouter.js** and then analyze the logic of how **alias router** work and test it.
