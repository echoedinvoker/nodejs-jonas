# **_Seperate Routers Out of App_**

> Instead of writing routers, router handlers and other parts of the server codes in the same js file, we can put each part in a different file.

![Alt create routers file](pic/bandicam%202022-10-18%2012-04-53-521.jpg)

## **Move Routers**

![Alt move routers](pic/bandicam%202022-10-18%2012-06-37-572.jpg)

![Alt require express](pic/bandicam%202022-10-18%2012-08-53-429.jpg)

## **Move Router Handlers**

> In order to be able to test whether each stage can run properly, it is also necessary to move the **Router Handlers** to here. After this phase of testing is successful, then move it to its own js file.

![Alt handlers](pic/bandicam%202022-10-18%2012-10-15-422.jpg)

![Alt handlers in app.js](pic/bandicam%202022-10-18%2012-11-52-767.jpg)

![Alt require fs](pic/bandicam%202022-10-18%2012-13-20-205.jpg)

![Alt convention](pic/bandicam%202022-10-18%2012-15-14-930.jpg)

- By convention, we will use the variable name **'router'** here.

## **Export and Import**

![Alt export routers](pic/bandicam%202022-10-18%2012-18-20-754.jpg)

![Alt import routers](pic/bandicam%202022-10-18%2012-20-17-427.jpg)

- So you can find that tourRouters.js and userRouters.js are like two **small applications**, and app.js is the application that puts everything together.

## **Error & Fix**

![Alt error data file not found](pic/bandicam%202022-10-18%2012-21-46-374.jpg)

- Because codes have been moved to different files, the path represented by **\_\_dirname** has also changed and must be corrected.

![Alt fix path](pic/bandicam%202022-10-18%2012-24-03-060.jpg)

- It is normal for codes to be broken during the refactor process.

## **Test**

![Alt test tours](pic/bandicam%202022-10-18%2012-27-15-920.jpg)

![Alt test users](pic/bandicam%202022-10-18%2012-27-50-803.jpg)

# **_Seperate Controllers Out of Routers_**

> Next, move the **router handlers** out of routers.js and into their own file.

## **Seperate Router Handlers from Routers file**

![Alt create controllers](pic/bandicam%202022-10-18%2012-29-39-841.jpg)

- Because the **MVC** software framework will be taught later, the handler function here will be regarded as the controller of MVC in the future, so our folder is named after it.

![Alt move from routers.js](pic/bandicam%202022-10-18%2012-31-30-727.jpg)

## **Export and Import**

![Alt exports multiple func](pic/bandicam%202022-10-18%2012-34-48-654.jpg)

- Because we want to export **multiple** functions, we use **exports object** instead of module.exports.

![Alt import destructure](pic/bandicam%202022-10-18%2012-44-02-565.jpg)

# **_Slip Express and Server_**

![Alt analyze app.js](pic/bandicam%202022-10-18%2012-46-33-897.jpg)

- After removing app.js from both Routers and Router Handlers, we can further separate the parts that are related to **Express** and those that are not.

![Alt create server.js](pic/bandicam%202022-10-18%2012-47-39-868.jpg)

- We put the parts that are not related to Express, such as starting the server, error handling, etc., into **server.js**.

![Alt export app](pic/bandicam%202022-10-18%2012-48-23-335.jpg)

![Alt import app](pic/bandicam%202022-10-18%2012-49-25-051.jpg)

## **Write Start Script**

> Sometimes you are not sure which js file to use to start the server, to avoid this situation you can write the start command as a **script** directly.

![Alt nodemon server.js](pic/bandicam%202022-10-18%2012-50-46-034.jpg)

![Alt create a script](pic/bandicam%202022-10-18%2012-52-58-718.jpg)

# **_Final Test_**

![Alt test tours](pic/bandicam%202022-10-18%2012-53-41-191.jpg)

![Alt test users](pic/bandicam%202022-10-18%2012-54-08-406.jpg)
