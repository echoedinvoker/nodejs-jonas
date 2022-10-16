![Alt imcoming request to response](pic/bandicam%202022-10-16%2012-28-48-229.jpg)

![Alt req and res objects](pic/bandicam%202022-10-16%2012-28-54-316.jpg)

- When the request sent by the client hits the server, the server generates two **objects req and res**.

![Alt middleware functions](pic/bandicam%202022-10-16%2012-28-57-863.jpg)

- From the time the server receives a request to the time it sends a response, the req and res objects will go through a bunch of functions in sequence, which are called **middleware**.

![Alt everthimg is middleware](pic/bandicam%202022-10-16%2012-29-05-180.jpg)

- Therefore, according to the above definition, **the router** we wrote before is **also a middleware**.

![Alt e.g of each middleware](pic/bandicam%202022-10-16%2012-29-11-958.jpg)

- The middleware **does not necessarily** have to deal with the req or res object, for example, each middleware function example above.

![Alt middleware stack](pic/bandicam%202022-10-16%2012-29-15-835.jpg)

- The middleware process is **linear**, and the whole process is called the **middleware stack**.

![Alt order as defined in the code](pic/bandicam%202022-10-16%2012-29-19-272.jpg)

- middleware processing is linear, so there must be an **order of processing**, and this order is determined by the **code definition order**.

![Alt req and res move to 1st middleware](pic/bandicam%202022-10-16%2012-29-27-994.jpg)

![Alt calling next function](pic/bandicam%202022-10-16%2012-29-32-172.jpg)

- The last step of the middleware funciton is to call the **next** function, which allows the next middleware function to start executing.

![Alt pipeline](pic/bandicam%202022-10-16%2012-29-44-598.jpg)

- The req and res objects will pass through each middleware function sequentially, which feels like passing through a **pipeline**.

![Alt res.send(...)](pic/bandicam%202022-10-16%2012-29-52-352.jpg)

- However, the last middleware is usually like the router we wrote before, which **sends a response** directly to the client, so there is no need to call the next function.

![Alt request-response cycle](pic/bandicam%202022-10-16%2012-29-58-906.jpg)

- From request hit server to server send response this whole process is called **request-response cycle**.
