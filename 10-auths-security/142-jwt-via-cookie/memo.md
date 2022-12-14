## **Review codes about token before**

![Alt refactor about send token before](pic/01.jpg)

## **Use res.cookie to send cookie with token to client**

### _res.cookie_

![Alt res.cookie](pic/02.jpg)

### _cookie expired timing_

![Alt expire time](pic/03.jpg)

### _other two cookie option about security_

![Alt other two cookie option for security](pic/04.jpg)

## **Refactor and Restrict the run mode of security: true**

![Alt separate cookie option object](pic/05.jpg)

![Alt only "secure: true" in production mode](pic/06.jpg)

## **Test with Postman**

![Alt signup with Postman and got cookie](pic/07.jpg)

![Alt cookie on Postman](pic/08.jpg)

### _Fix property name mistake and test again_

![Alt fix expire property name](pic/09.jpg)

![Alt test with Postman again](pic/10.jpg)

![Alt cookie list of Postman](pic/11.jpg)

## **Remove the password in the signup response**

![Alt problem: signup response password](pic/12.jpg)

![Alt remove password and litte fix](pic/13.jpg)

![Alt test again with Postman](pic/14.jpg)
