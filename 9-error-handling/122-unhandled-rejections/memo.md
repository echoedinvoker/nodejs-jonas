## **Create a Promise Rejection**

![Alt create some promise rejection](pic/01.jpg)

## **Handle Promise Rejections**

### _By Catch_

![Alt catch rejection](pic/02.jpg)

- Because promise rejection is our own creation, so we know where the problem lies in order to do so, but the reality of the situation is often do not know where the problem lies.

### _By Listener_

> Use listener to catch all promise rejections, which is more generic and global.

![Alt listen rejection](pic/03.jpg)

- However, the result presented by err.message in the above figure is different from that in the lecture, probably because of the version difference.

![Alt use only err.name to go head](pic/06.jpg)

- Let's continue this course using only err.name.

## **Exit Server**

### _Abrupt exit_

![Alt exit server](pic/07.jpg)

- But this way of ending the server is a bit abrupt and brutal, some requests and pending being handled will be aborted directly.

### _Gracefully exit_

![Alt exit server gracefully](pic/08.jpg)

## **How to get error message?**

### _Check lecture's QA_

https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/learn/lecture/15065226#questions/8728560

![Alt QA1](pic/04.jpg)

![Alt QA2](pic/05.jpg)

- Obviously, it has become a task to retrieve the error message from a very long string.

### _Copy paste from QA_

> But since someone has already finished the task, directly copy paste over to meet the habits of engineers :)

![Alt if still want error message](pic/09.jpg)
