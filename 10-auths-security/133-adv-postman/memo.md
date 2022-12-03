## **Create Environment Variable Manually**

![Alt create environment variable](pic/01.jpg)

![Alt URL](pic/02.jpg)

![Alt URL for prod](pic/03.jpg)

- Actually, we don't have a real production URL yet, so we'll use the placeholder here first.

![Alt use URL](pic/04.jpg)

## **Use Postman Script to Create Environment Variable Automatically**

### _Extract Token from Signup/Login_

![Alt script to assign token to env variable](pic/05.jpg)

![Alt set an environment variable](pic/06.jpg)

![Alt signup new user](pic/07.jpg)

![Alt check if got token into variable](pic/08.jpg)

### _Use Token in Request for Protected Routers_

![Alt protected request / Auth](pic/09.jpg)

![Alt use {{jwt}}](pic/10.jpg)

![Alt send request to protected router](pic/11.jpg)
