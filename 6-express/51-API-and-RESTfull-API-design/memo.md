![Alt api high lvl define](pic/bandicam%202022-10-14%2011-31-51-375.jpg)

![Alt web api](pic/bandicam%202022-10-14%2011-31-55-452.jpg)

- So you can think of it as having our App on the server, providing a Web API to communicate with the Client.
  - So in fact we have two pieces of software talking to each other (App on the server and client).
  - Web API is most widely used type of API.

![Alt application can be other things](pic/bandicam%202022-10-14%2011-32-03-454.jpg)

- API is not necessarily related to web development or JavaScript.
  - As long as any software is **relatively independent**, it can provide APIs to communicate with the outside world.
- Node API actually means that we can communicate with the core modules of Node through their APIs.
- When we manipulate the DOM, we don't use the JavaScript function, but the DOM API provided by the browser to do so.
- Any programming language usually has object, object will open some public method or properties for external use, these are API.

![Alt principals of REST](pic/bandicam%202022-10-14%2011-32-26-822.jpg)

- REST, which stands Representational States Transfer, is basically a way of building Web APIs in a logic way.
  - So it is actually some **principles** that should be followed.

![Alt logical resources](pic/bandicam%202022-10-14%2011-32-35-053.jpg)

- The core of the API is the **resource**, or **noun**, it cannot be verb.

![Alt url and endpoint](pic/bandicam%202022-10-14%2011-32-43-005.jpg)

![Alt bad endpoint](pic/bandicam%202022-10-14%2011-32-46-434.jpg)

- We should only use the **HTTP method** to represent the **action**, rather than writing it in the endpoint.

![Alt get](pic/bandicam%202022-10-14%2011-32-52-949.jpg)

![Alt id](pic/bandicam%202022-10-14%2011-33-02-160.jpg)

- In addition to the resource, sometimes the **id** is used to further indicate which data is in the resource.
  - id can be a **meaningful string**.
  - Not necessarily every operation requires an id, e.g. **POST**.

![Alt post and create](pic/bandicam%202022-10-14%2011-33-19-603.jpg)

- POST means add a new resource to the server.
- So this kind of use case id is not needed, it should be given a suitable id by the server side itself.

![Alt update](pic/bandicam%202022-10-14%2011-33-32-131.jpg)

- The difference between PUT and PATCH is that
  - **PUT** must provide the **full object**.
  - **PATCH** is only **partially** updated.

![Alt delete](pic/bandicam%202022-10-14%2011-33-39-328.jpg)

- These operations, especially DELETE, usually require permission, i.e., log in.
  - We will explain about login and logout later in the course.

![Alt crud](pic/bandicam%202022-10-14%2011-33-52-297.jpg)

- HTTP verb. perfectly corresponds to the CRUD operations of the database.
- Sometimes we want to perform operations that are not in the CRUD, such as login and search, so we need to use our creativity on the input side.

![Alt endless possiblities](pic/bandicam%202022-10-14%2011-34-12-018.jpg)

- The last two APIs are more complex, but can still be converted to RESTful APIs.

![Alt add array](pic/bandicam%202022-10-14%2011-34-32-368.jpg)

- JSON is a very common format for data transfer between different software.
- JSON is very similar to Object, but there are some minor differences.
- The key of JSON must be a string, but there are many types of value.

![Alt JSent](pic/bandicam%202022-10-14%2011-34-43-408.jpg)

- Usually we do not use the original JSON directly to do the transmission, usually first in the outside in a wrapping layer, the most simple and common format is **JSend**.
  - JSend has two properties:
    - **status**: Tell whether the processing was successful or unsuccessful.
    - **data**: Our original JSON data will be placed in this attribute completely.

![Alt other formats](pic/bandicam%202022-10-14%2011-34-58-021.jpg)

- This type of wrapping is not only **JSend**, but also other types.
- This common practice is known as the **enveloping**, which can **mitigate some security issues** and solve some other problems

![Alt state on server](pic/bandicam%202022-10-14%2011-35-20-668.jpg)

- **stateless** means that the server does not remember the information of the **last request**.

  - It means that all the **states** of the site are **stored on the client** side and the **server does not store any state**.
    - **state** is the variable in the application that **changes over time**.

- The above example violates the stateless principle because the server side uses the variable 'currentPage' to store the state of the application.
  - As long as the state is stored in server-side memory, it is not stateless anymore, no matter how short the storage time is.

![Alt bad and good solution](pic/bandicam%202022-10-14%2011-35-25-698.jpg)
