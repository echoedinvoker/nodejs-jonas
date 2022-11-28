## **Create a synchronous error**

![Alt create a synchronous error](pic/01.jpg)

## **Build Listener to 'uncaughtException'**

- Similar to the previous lector, we also use a listener to globally catch the synchronous errors that occur in the entire app and handle them.

![Alt copy paste and modify to build listener for 'uncaughtException'](pic/02.jpg)

- In fact, some people think that we shouldn't use this generic or global approach to catch errors at all, and that we should catch them individually with method "catch".
  - However, the lecturer believes that this generic and global approach has its merits.

## **Order problem**

> Because it is synchronous, the listener must be executed before the error instruction, otherwise it cannot catch the error instruction.

![Alt order problem](pic/03.jpg)

![Alt move listener to top place](pic/04.jpg)

## **Synchronous error in the middleware**

![Alt put synchronous error in the middleware](pic/05.jpg)

![Alt send a request](pic/06.jpg)

![Alt it trigger global error handler middleware, not listener](pic/07.jpg)

![Alt error controller](pic/08.jpg)

- So, if a synchronous error occurs in the middleware, it will be delivered directly to the global error handler middleware, and the listener part will not play any role.
