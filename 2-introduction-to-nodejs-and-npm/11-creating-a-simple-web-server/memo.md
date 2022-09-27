![Alt import build-in module http ](pic/bandicam%202022-09-27%2009-02-45-740.jpg)

![Alt http.createServer ](pic/bandicam%202022-09-27%2009-04-17-652.jpg)

- The http.createServer argument is the callback function.
  - This function can access two very important variables:
    - **req** It means the request sent from the client, which contains various information.
    - **res** This variable is used to handle things that must be responded to the client, providing a bunch of tools for us to use.
      - Of these, **end** is the simplest tool, and is used when responding to a plain string.
  - The content of this callback function is what will be executed when the request is received.

![Alt server.listen ](pic/bandicam%202022-09-27%2009-06-39-350.jpg)

- http.createServer only creates a server object, we have to use the **listen** method of this object to make it work.

![Alt node run server ](pic/bandicam%202022-09-27%2009-08-27-377.jpg)

- The server must wait for the request continuously, so it can't exit after executing all the instructions like a normal application.

![Alt send request from the browser ](pic/bandicam%202022-09-27%2009-08-50-533.jpg)

![Alt observe request ](pic/bandicam%202022-09-27%2009-10-07-917.jpg)

- The console.log only prints information in the server's console, which is not visible to the client.

![Alt content of request ](pic/bandicam%202022-09-27%2009-10-36-789.jpg)

- The req really contains a lot of information, and the following lectures will introduce the important parts of it.
