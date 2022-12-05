## **Reason to Restrict Role for Routers**

![Alt goal](pic/12.jpg)

- So after logging in, users must also have the distinction of roles in order to reasonably assign the actions (routers) that can be executed, which is the concept of authorization.

## **Routers**

![Alt restrictTo](pic/13.jpg)

- restrictTo is our custom function, we define the functionality here first, and then write the content later.

## **Add new field "role" into user Schema**

![Alt role](pic/14.jpg)

## **restrictTo: How to pass parameters into Middleware**

![Alt multiple roles pass into restrictTo](pic/15.jpg)

![Alt return middleware](pic/16.jpg)

- (...roles) is ES6 syntax, which means that the arguments passed to this function are collected in array "roles".

## **Test**

![Alt signup new user](pic/17.jpg)

![Alt delete tour](pic/18.jpg)
