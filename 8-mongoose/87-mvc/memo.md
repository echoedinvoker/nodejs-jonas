![Alt mvc](pic/bandicam%202022-10-23%2018-09-46-166.jpg)

- **MVC** is a widely used and well knwon back-end architecture.
  - the **model** layer is concerned with evething about
    - application's data
    - **business logic**
  - the **controller** layer, and function of the controllers is to handle **application logic**
    - the application's request
    - interact with models
    - send back responses to the client
  - the **view** layer is neccessary
    - if we have a graphical interface in our app.
    - or in other word, if we're building a **server-side rendered** website.
    - consists basically of the **templates** used to generate the view, so the website that we're going to send back to the client.
- There are different ways of implementing the MVC architecture.
- So using a pattern, or an architecture like this, allows us to write a more modular application, which is going to be way easier to maintain in scale as necessary.
- We could take further add more layers of abstraction here, but in this kind of smaller application, the MVC architecture is more than enough for our needs.

![Alt start with request](pic/bandicam%202022-10-23%2018-10-08-776.jpg)

- it all starts with a **request**.

![Alt routers](pic/bandicam%202022-10-23%2018-10-11-185.jpg)

- then request hit a router, we have multiple routers, basically one for each resource.

![Alt controllers](pic/bandicam%202022-10-23%2018-10-14-143.jpg)

- The goal of the **router** is to delegate the **request** to the correct **handler function**.
  - handler function is one of the **controllers**.
    - there will be one controller for each of our resources to keep these different parts of the app nicely separated.

![Alt models](pic/bandicam%202022-10-23%2018-10-17-698.jpg)

- depending on the incoming request, the controller might need to interact with one of the models, for example:
  - retrieve a certain document from the database.
  - or create a new one.
- once more, there is one model file for each resource.

![Alt response](pic/bandicam%202022-10-23%2018-10-21-602.jpg)

- after gettting data from model, the controller might then be ready to send back a response to the client.

![Alt views](pic/bandicam%202022-10-23%2018-10-32-385.jpg)

- In case we want to actually **render a website**, after getting data from model, the controller will then select one of the **view templates and inject the data into it**.
  - that **rendered website** will then be send back as the **response**.
- In the view layer in an **Express app**, there is usually **one view templates for each page**.

![Alt two logic](pic/bandicam%202022-10-23%2018-10-37-121.jpg)

- one of big goal of MVC is to separate bisiness logic from application logic.

![Alt business logic2](pic/bandicam%202022-10-23%2018-10-57-536.jpg)

![Alt business logic3](pic/bandicam%202022-10-23%2018-11-06-016.jpg)

- these two logics are almost impossible to completely **separate**, and so sometimes they will **overlap**.
  - but we should do our best efforts to keep the application logic in our controllers and business logic in our models.
- **fat models, thin controllers**.
  - that said we should offload as much logic as possible into models, to keep the controllers as simple and lean as possible.
    - so the controller is really mostly for managing the application's request and response.
