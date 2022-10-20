# **_Intro Param Middleware_**

![Alt write a simple param middleware](pic/bandicam%202022-10-20%2009-39-44-191.jpg)

- After obtaining the router instance, you can use its **'param'** method to create the **param middleware**.

![Alt test1](pic/bandicam%202022-10-20%2009-42-28-396.jpg)

![Alt test2](pic/bandicam%202022-10-20%2009-44-06-410.jpg)

![Alt test3](pic/bandicam%202022-10-20%2009-45-57-535.jpg)

- param middleware can only work for a **certain resource**, because it is made by the method under the router instance

# **_Use Param Middleware in Real Life_**

## **Repeatly Check invalid ID in Controllers**

![Alt controller1](pic/bandicam%202022-10-20%2009-48-41-585.jpg)

![Alt controller2](pic/bandicam%202022-10-20%2009-48-52-356.jpg)

![Alt controller3](pic/bandicam%202022-10-20%2009-49-01-305.jpg)

- We have done the action of checking whether the id is valid or not in the handlers of controllers, which has caused the **repetition** of code.

## **Build Param Middleware to Solve this Problem**

> We can build a **param middleware** to check if the id is valid before handlers to solve the code repetition problem.

![Alt write param middleware in controller](pic/bandicam%202022-10-20%2009-57-29-554.jpg)

- **return** is important, because if the id is invalid, the middleware stack should be stopped here, and if there is no return, **next** will be called and jump to the next middleware which make no sense.

![Alt export to tourRouters](pic/bandicam%202022-10-20%2009-58-35-021.jpg)

- Some people think why not make a function to check if the id is valid and call it in each handlers.
  - But from **Express**' point of view, it's good to use **middleware** as much as possible.
  - Another point is that if we use param middleware to check ids, we will automatically be checked for ids first when we do other id-related handlers later without doing any additional work.

## **Remove Check invalid ID codes in Controllers**

> Because the param middleware already checks the id first, the handlers in the tours about the id can remove the part where the id is checked.

![Alt remove id check1](pic/bandicam%202022-10-20%2009-59-48-160.jpg)

![Alt remove id check2](pic/bandicam%202022-10-20%2010-00-21-626.jpg)

![Alt remove id check3](pic/bandicam%202022-10-20%2010-00-35-967.jpg)

## **Final Test**

![Alt test with an invalid id](pic/bandicam%202022-10-20%2010-07-12-771.jpg)
