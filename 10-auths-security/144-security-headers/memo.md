## **Use 3rd-party helmet to generate security headers**

> The security part of Express is not out-of-the-box, so it is routine to use the 3rd-party package "helmet" to improve the security of the Express app, just like we used the package "express-limit-rate" before.

![Alt use helmet](pic/a01.jpg)

## **Add notes for every global middlewares in app.js**

![Alt add notes](pic/a02.jpg)

## **Limit size of request body**

> As we suggested in our previous lecture on theory, we must limit the size of the request body to prevent certain security attacks, and we will implement it here.

![Alt req.body limit](pic/a03.jpg)

## **Postman Test**

![Alt Postman test](pic/a04.jpg)

## **How Helmet work?**

> For those interested in how "helmet" actually helps us increase security, you can read their official documentation.

![Alt google helmet](pic/a05.jpg)

![Alt how it work](pic/a06.jpg)

- So in fact "helmet" is a combination of 15 middlewares.
