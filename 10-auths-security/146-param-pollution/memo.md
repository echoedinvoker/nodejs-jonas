## **Params duplicated error**

![Alt params duplicated error](pic/01.jpg)

![Alt find error codes](pic/02.jpg)

![Alt observe error](pic/03.jpg)

- Because of the error generated by params, we call it params pollution, which can be exploited to attack.

## **Prevent params pollution**

> As usual, we use the third-party package "hpp" to create the middleware to avoid params pollution.

![Alt install/import hpp](pic/04.jpg)

![Alt prevent param pollustion](pic/05.jpg)

![Alt test it with Postman](pic/06.jpg)

- It can be found that "hpp" will invalidate the rest params other than the last one when duplicated params are found, in order to avoid errors.

## **Whitelist of hpp**

> However, some params should be allowed to be duplicated, for example, when querying tours with duration 5 or 9 at the same query.

![Alt send request with duplicated param which should be allowed](pic/07.jpg)

- Because of the middleware added to "hpp", we can find that the "duration=5" part is not working.

![Alt pass option object with 'whitelist'](pic/08.jpg)

- We can use the whitelist of "hpp" to remove the effect of "hpp" on field "duration".

![Alt test it with Postman](pic/09.jpg)

![Alt add fields which should be allowed to duplicated into whitelist](pic/10.jpg)

- In fact, you can write some more complex codes here to automatically add the appropriate fields to the whitelist, but for the sake of simplicity and clarity of the course, we choose the manual input approach.