## **Install & Include Morgan**

![Alt install morgan](pic/bandicam%202022-10-16%2015-22-57-700.jpg)

- **morgan** is a third-party package that helps us build **middleware functions to provide information about the request-response cycle**.
- Although morgan is a tool to help development, it must be **included in the module** to use, so it is installed in **dependencies** instead of dev-dependencies.

![Alt include it](pic/bandicam%202022-10-16%2015-24-24-885.jpg)

- It is a convention that the variable name is the same as the package name.

## **Setup Morgan Middleware function**

![Alt app.use it](pic/bandicam%202022-10-16%2015-27-47-018.jpg)

- morgan's middleware function must be the **first one in the middleware stack**.
- morgan provides some models for us to choose from, just with some differences in the format of infomation presentation on the console.

## **Test Morgan with Postman**

![Alt send random request by postman](pic/bandicam%202022-10-16%2015-29-18-402.jpg)

![Alt usefull console info](pic/bandicam%202022-10-16%2015-31-45-779.jpg)

## **Check Morgan's Source Code**

![Alt google it](pic/bandicam%202022-10-16%2015-32-28-925.jpg)

![Alt index.js](pic/bandicam%202022-10-16%2015-33-21-487.jpg)

![Alt exports](pic/bandicam%202022-10-16%2015-34-42-443.jpg)

![Alt function morgan](pic/bandicam%202022-10-16%2015-35-43-710.jpg)

![Alt return function params](pic/bandicam%202022-10-16%2015-37-01-071.jpg)

![Alt return function calling next](pic/bandicam%202022-10-16%2015-38-02-189.jpg)

- So really, Morgan is just helping us write the **Middleware function**, and **it follows the same principles as when we write it ourselves**, from the arguments to the final call to the next function.

## **Express Suggestion 3rd-Party Middleware**

![Alt express homepage](pic/bandicam%202022-10-16%2015-39-51-328.jpg)

![Alt express suggest middleware](pic/bandicam%202022-10-16%2015-40-42-768.jpg)

- Express' official website has some recommended Middleware packages made by third parties.
  - Many of them are built-in functions that Express 3 has and then 4 are moved out.
  - The first **body-parser** actually has the same functionality as the **express.json()** we've used, but it was originally removed from Express 4's built-in and only the body-parser could be used, but it was recently added back.
