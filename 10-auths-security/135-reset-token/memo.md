## **Two Steps to Reset Password**

![Alt 2 steps of function in the controller](pic/01.jpg)

- This lecture will implement the first two steps of the first function.

![Alt routers](pic/02.jpg)

- Each step requires the user to provide some information to the server, so they all use post.

## **Check if Email is Exist**

> First, make sure that the mailbox provided by the user does exist in the database.

![Alt 1) get user based on POSTed email](pic/03.jpg)

![Alt remember findOne is async](pic/04.jpg)

- Don't forget that the method for querying the database is almost always asynchronous, so you have to handle it.
  - Use async/await and catchAsync to handle asynchronous and its error part as before.

## **Add new Fields of user Schema**

> In the second function we need to compare the reset token provided by the user with the original reset token, so it must be stored in the database, so we need to add a new field in the Schema to store this data.

![Alt add two new field into user Schema for store info](pic/05.jpg)

## **Add new Instance Method: cratePasswordResetToken**

> Reset token does not require such strong encryption as a normal user password, so using the built-in library "crypto" is sufficient to meet the demand.

![Alt instance method: createPasswordResetToken](pic/06.jpg)

![Alt add console.log for test](pic/07.jpg)

## **Finish 1st Step Function in the Auth Controller**

![Alt use instance method to generate reset token and save it into db in the controller](pic/08.jpg)

- Another advantage of putting .save in the controller is that it allows the instance method in the model to keep the synchronization function.

## **Test**

![Alt test but validation error](pic/09.jpg)

- Here, the user did not provide the fields with the required attributes, so a validation error was generated.
  - However, in this case, the user does not need to provide information other than email

### _disable validation_

> The method "save" of the model provides the option to avoid triggering the validation mechanism.

![Alt option of save](pic/10.jpg)

- You don't need to remember these options, you need to learn the ability to look up official documents and search for answers online.

![Alt test but no response](pic/11.jpg)

![Alt check test info on the console](pic/12.jpg)
