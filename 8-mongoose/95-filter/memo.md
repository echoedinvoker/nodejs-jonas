## **Params of URL**

![Alt add params to URL](pic/bandicam%202022-11-09%2012-54-29-405.jpg)

- We can add some **field value pairs**, that is, **params**, to the end of the original **API**.
- We use these **params** to further **filter** the data obtained by the **API**.

## **Two Ways to Filter**

> There are two ways to implement data filtering using params of URLs in the codes section.

### _Pass parameters into find_

![Alt pass param pairs into find](pic/bandicam%202022-11-09%2013-02-21-488.jpg)

- The first method is to pass the **params object** directly into the method **find**.

### _Mongoose chaining methods_

![Alt mongoose chain methods](pic/bandicam%202022-11-09%2013-06-18-887.jpg)

- The second way is to use the **chain methods** under **Query.prototype**.
  - The method **find** will returns an object that **inherits the Query**, so these **chain methods** are the ones that follow the find.
- Although the second method does not look as convenient as the first, but it is very suitable in some cases.

## **Excluding some fields**

> The functionality specified by params of URLs is not limited to filtering data only, so other irrelevant field value pairs must be excluded from the code about filtering and querying.

### _if not excluding irrelevant field value pairs..._

![Alt param not for filtering](pic/bandicam%202022-11-09%2013-12-26-479.jpg)

- For the filtering part we use the first way because it is very simple.

- The URL above contains page field that is not relevant to filtering, so the result does not get any information.

### _exclueded irrelevant fields in the codes_

![Alt excluded fields not filtering](pic/bandicam%202022-11-09%2013-25-08-129.jpg)

## **Split Query/Filter and Other Executions**

![Alt split to three parts](pic/bandicam%202022-11-09%2013-34-41-670.jpg)

- Our subsequent lectures will implement functionalities other than filtering.
  - So let's divide the code into three parts as shown above in advanced.
    - The rest of the functionalities will be done using the chain methods of **Query.prototype** at the end of the step two code in the above picture in the future.

![Alt mongoose document](pic/bandicam%202022-11-09%2013-36-22-632.jpg)

- You can check the official Mongoose documentation first to see what features can be implemented if you want.
