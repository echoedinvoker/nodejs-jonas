## **Problem Description**

> We start with the handler "getTour" in the controller.

### _Invalid ID_

![Alt invalid id](pic/01.jpg)

- It is reasonable to get status code 500 in the first case.

### _Valid ID_

![Alt valid id but 500](pic/02.jpg)

- In the second case, it doesn't make sense to get status code 500, we want to get a **404 Not Found** response.

## **Use AppError to Create Error Object**

> In the second case above, because Mongoose's method does not generate any Error, the Client will get the response with status code 200, so we have to generate our own Error Object.

![Alt use AppError to create error object by ourself](pic/03.jpg)

- Although Mongoose's method "findById" does not generate an Error, it returns null, which is a fulcy value that can be used directly in the condition.
- We generate the Error Object using the same way we generated the Error Object in app.js before.

![Alt test again and got 404](pic/04.jpg)

## **Other Tour Handlers Using ID**

> Basically, any tour handler that requires an id from the Client should have such an error-proof mechanism to generate a 404 response.

![Alt copy paste to other handlers which use id](pic/05.jpg)

![Alt test PATCH](pic/06.jpg)

![Alt test DELETE](pic/07.jpg)

![Alt fix deleteTour bug](pic/08.jpg)

![Alt test DELETE again](pic/09.jpg)
