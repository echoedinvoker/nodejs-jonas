# **_Initiate a Express Project_**

## **Prepare files of website**

![Alt copy website files from github](pic/bandicam%202022-10-13%2015-21-45-515.jpg)

- copy files about website from lecture space.

## **Init Project**

![Alt npm init](pic/bandicam%202022-10-13%2015-27-16-676.jpg)

## **Install Express 4**

![Alt install express 4](pic/bandicam%202022-10-13%2015-31-06-858.jpg)

# **_Create a Server_**

## **Get App Object**

![Alt get express object](pic/bandicam%202022-10-13%2015-39-52-025.jpg)

- **require('express')** will get the **function**, and then call this function to get the really useful **object**.

## **Start a Server**

![Alt app.listen](pic/bandicam%202022-10-13%2015-45-03-633.jpg)

- Although the same method **'listen'** is used to create a server as in the **http module**, the 'listen' here is from the **express module**, so it is something different.

# **_GET Method_**

![Alt app.get](pic/bandicam%202022-10-13%2015-55-20-306.jpg)

- Creating a router doesn't require any if sentence anymore, just requires a simple method.

![Alt postman get](pic/bandicam%202022-10-13%2016-00-38-505.jpg)

- Note that the HTTP verb of request and response is one-to-one relation.

# **_Status Code_**

![Alt  add status 404](pic/bandicam%202022-10-13%2016-02-43-305.jpg)

- The **res object** can use the **chaining method** to construct it, so it can save a lot of codes.

![Alt postman 404](pic/bandicam%202022-10-13%2016-03-11-090.jpg)

# **_POST Method_**

![Alt postman post](pic/bandicam%202022-10-13%2016-05-23-378.jpg)

![Alt app.post](pic/bandicam%202022-10-13%2017-16-06-421.jpg)

- Use the **methods name** corresponding to the **HTTP verb.** of postman directly to create its router.

![Alt postman post](pic/bandicam%202022-10-13%2017-17-02-115.jpg)
