## **Create Environment Variable Manually**

> In the future, we will frequently switch between development and production and there are dozens of request types, with environment variable can save a lot of time.

![Alt create environment variable](pic/01.jpg)

![Alt URL](pic/02.jpg)

![Alt URL for prod](pic/03.jpg)

- Actually, we don't have a real production URL yet, so we'll use the placeholder here first.

![Alt use URL](pic/04.jpg)

## **Use Postman Script to Create Environment Variable Automatically**

> In the past, we had to use signup or login to get a token and then manually copy and paste it into the header of another request, but now we can use the script provided by Postman to automate the whole process.

### _Extract Token from Signup/Login_

![Alt script to assign token to env variable](pic/05.jpg)

![Alt set an environment variable](pic/06.jpg)

![Alt signup new user](pic/07.jpg)

![Alt check if got token into variable](pic/08.jpg)

### _Use Token in Request for Protected Routers_

![Alt protected request / Auth](pic/09.jpg)

![Alt use {{jwt}}](pic/10.jpg)

![Alt send request to protected router](pic/11.jpg)
