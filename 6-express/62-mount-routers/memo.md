## **Purpose**

![Alt planning](pic/bandicam%202022-10-17%2005-46-35-007.jpg)

- In the future, we want to put **routers** and **router handlers** of different resources in **separate files**.
  - The first step is to wrap the routers of the same resource in the same **variable**.

## **express.Router()**

![Alt wrap into variables](pic/bandicam%202022-10-17%2005-51-31-032.jpg)

- **express.Router()** returns a **complete middleware router system instance**.
  - we can use this instance to **collect our routers into it**.
  - We can consider it as a **mini-application**.

## **Add Router Instances into Middleware Stack**

![Alt use it as middleware](pic/bandicam%202022-10-17%2005-58-02-997.jpg)

- As before, use **app.use** to add the above middleware to the middleware stack.
  - But this time, the first parameter of app.use is string, so it will be used differently than before.
    - In this case, the **first parameter** is treated as a **route**, and the **middleware** in the **second parameter** is called only if the **URL of the request matches route**.
