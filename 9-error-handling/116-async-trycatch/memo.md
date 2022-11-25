## **DRY problem in Controller Async Functions**

![Alt repeat problem](pic/01.jpg)

## **Solution Step by Step**

![Alt create higher function to wrap async](pic/02.jpg)

![Alt split success out of try catch](pic/03.jpg)

![Alt move catch error to higher func](pic/04.jpg)

- In fact, you can find that the part setting error status code has disappeared, and the error is caught and thrown directly to the global error handling middleware.
  - So if an error is caught, the status code will use the default value of 500.

![Alt use higher func](pic/05.jpg)

## **Still Not Work!?**

> So far it is still not working at all, for two reasons bellow.

![Alt 2 reason why not work](pic/06.jpg)

![Alt use return to solve](pic/07.jpg)

### _fn problem_

> There is an error in the second step at the top that causes the npm start error, simply fix it back.

![Alt npm start but error](pic/08.jpg)

![Alt remove weird fn](pic/09.jpg)

![Alt npm start properly](pic/10.jpg)

![Alt query non-exist id](pic/11.jpg)

## **Export catchAsync to New file in utils**

![Alt export catchAsync to utils file](pic/12.jpg)

![Alt import back to controller](pic/13.jpg)

## **Rewrite all Async Functions in Conrtroller**

![Alt edit all async func in controller](pic/14.jpg)

![Alt don't forget next](pic/15.jpg)

![Alt final test ](pic/16.jpg)
