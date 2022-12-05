## **Create New Util - email.js for sending email**

![Alt email.js](pic/01.jpg)

### _nodemailer_

> nodemailer is a third-party package that allows us to send mail using nodeJS

![Alt nodemailer](pic/02.jpg)

## **Step 1(mail): Create Transporter**

### _Gmail_

![Alt gmail](pic/03.jpg)

- Because gmail will be regarded as an email abuser if you send more than 500 letters in a day, and then the experience will get worse and worse, so gmail is not a good choice for the app.

### _MailTrap_

> MailTrap is a sandbox for mailboxes, it can trap the letters we send in it without actually sending them to the client or user's mailbox, which is suitable for testing the mailbox function.

![Alt google mailtrap](pic/04.jpg)

![Alt signup](pic/05.jpg)

![Alt create inbox](pic/06.jpg)

![Alt get credentials](pic/07.jpg)

![Alt copy past credentials to env](pic/08.jpg)

![Alt replace gmail with mailtrap](pic/09.jpg)

- Because mailtrap is not one of the default mail providers of nodemailer, we need to fill in the host and port information ourselves.

## **Step 2(mail): Define the email options**

![Alt 2) define the email options](pic/10.jpg)

## **Step 3(mail): Actually send the mail**

![Alt 3) actually send the mail](pic/11.jpg)

![Alt await/async](pic/12.jpg)

![Alt import to controller](pic/13.jpg)

## **The Way We'll Use "resetPassword"**

> Here's how we'll use router "resetPassword" in the future lectures.

![Alt the way we use resetPassword](pic/14.jpg)

- You can see that the plain reset token will be the param variable, and the user will provide the password and passwordConfirm in the body.
  - So the router about "resetPassword" needs some changes.

![Alt edit router of it](pic/15.jpg)

## **Step 3(forgotPassword): Send Reset Token to User's MailBox**

> The third step of the function "forgotPassword" is to use the function sendEmail written in utils to send an email with the "resetPassword" URL link to the user.

![Alt finish 3) of forgotPassword](pic/16.jpg)

- Note that the URL is written using "req.protocol" to get http or https and "req.get('host')" to get the domain, rather than using the dead write approach.

## **Error Handling**

> We used catchAsync to handle async errors in the controller before, but since the error handling here needs more work, we go back to the original try catch approach to write the error handling part.

![Alt try catch](pic/17.jpg)

## **TEST**

![Alt test with Postman](pic/18.jpg)

![Alt check mail in mailtrap](pic/19.jpg)
