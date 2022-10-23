# **_Refactor about creating new Tour(POST)_**

![Alt create/save newTour in controller](pic/bandicam%202022-10-24%2000-48-41-622.jpg)

- The above image is wrong, it should be written in **exports.createTours**...

![Alt better way Tour.create](pic/bandicam%202022-10-24%2000-50-18-890.jpg)

- **create** is a class Tour method directly, while **save** is an instance newTour method, so be careful not to confuse.

![Alt async/await](pic/bandicam%202022-10-24%2000-55-13-960.jpg)

- **Tour.create** also returns **promise**, but we use the more morden **async/await** processing here.

![Alt insert req.body and finish JSend](pic/bandicam%202022-10-24%2000-59-56-168.jpg)

![Alt try catch](pic/bandicam%202022-10-24%2001-04-49-753.jpg)

- Promise failures should be handled, for async/await use **try catch** to handle it.

# **_Fix Error: Mongoose connection & Order of Loading Env_**

![Alt npm start](pic/bandicam%202022-10-24%2001-15-01-683.jpg)

- In fact, the codes in the lecture video are problematic. I fixed them according to the lecture final codes on github as bellow.

![Alt analyze tourModel.js](pic/bandicam%202022-10-24%2001-17-28-490.jpg)

- **The mongoose connection should be done in server.js**, because a model js file is only for one resource, and it doesn't make sense to write mongoose connection codes in each resource.

![Alt move mongoose connect codes to server.js](pic/bandicam%202022-10-24%2001-18-57-121.jpg)

![Alt move loading env instruction to right place](pic/bandicam%202022-10-24%2001-20-45-157.jpg)

- **including dotenv and loading env must be executed at the beginning of server.js** before including other modules, so that all env can be used properly in other modules.

![Alt tourModel.js should be](pic/bandicam%202022-10-24%2001-21-29-039.jpg)y

- Above is how the tourModel.js content should look like at the end of this lecture.

# **_Postman Test_**

![Alt postman test1](pic/bandicam%202022-10-24%2001-32-45-372.jpg)

![Alt postman test2](pic/bandicam%202022-10-24%2001-34-06-544.jpg)

- We are currently directly reponse all err object to the client, in fact there is a better approach will be taught later in the course.(error handling section)
