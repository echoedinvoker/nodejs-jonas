## **app.use and create our 1st custom middleware**

![Alt app.use](pic/bandicam%202022-10-16%2013-36-12-814.jpg)

- So that means we can define the middleware function directly in app.use.

![Alt basic frame](pic/bandicam%202022-10-16%2013-41-06-812.jpg)

![Alt codes in middleware w/o relation to req and res](pic/bandicam%202022-10-16%2013-42-33-221.jpg)

- As mentioned in the previous lecture, although the req and res objects pass through each middleware function in order, the contents of the middleware function do not necessarily have to be related to the req or res object.
- But calling the **next** function is necessary, otherwise the middleware stack will get stuck unless it is the last middleware function such as router.

![Alt send request by postman](pic/bandicam%202022-10-16%2013-43-25-679.jpg)

![Alt print on the console](pic/bandicam%202022-10-16%2013-44-47-337.jpg)

## **Prove that Order by codes defined order**

![Alt insert middleware into the middle of routers](pic/bandicam%202022-10-16%2013-47-14-136.jpg)

![Alt send request by postman](pic/bandicam%202022-10-16%2013-48-10-572.jpg)

![Alt no msn on the console](pic/bandicam%202022-10-16%2013-48-35-772.jpg)

- This is because the request-response cycle ends when the 'res.json' in the router handler 'getTours' is executed, so our custom middleware, which is defined later, will not be executed.

![Alt send another request by postman](pic/bandicam%202022-10-16%2013-49-06-792.jpg)

![Alt there is msg on the console](pic/bandicam%202022-10-16%2013-49-34-927.jpg)

![Alt middleware better write before routers](pic/bandicam%202022-10-16%2013-51-33-488.jpg)

- The above process is proving that the order in which codes define the middleware function determines the order in which each middleware function is executed in the middleware stack.
- Another important point is that the **res.json** and **res.send** methods will actually **end the request-response cycle** directly.

## **Use Middleware to add Properties to req object**

![Alt  use middleware to modify req(frame)](pic/bandicam%202022-10-16%2013-53-28-839.jpg)

- Our previous custom middleware function is not related to req or res object, this time we define another custom middleware function to add the functionality of req object.

![Alt req.requestTime](pic/bandicam%202022-10-16%2013-55-21-508.jpg)

![Alt use it in the subsequent middleware(router)](pic/bandicam%202022-10-16%2013-58-57-736.jpg)

![Alt send request by postman](pic/bandicam%202022-10-16%2013-59-51-267.jpg)

![Alt timing on the console](pic/bandicam%202022-10-16%2014-00-02-218.jpg)

- As above, I can design some middleware function before the routers and let the req object add some useful properties, which is a common and useful.
