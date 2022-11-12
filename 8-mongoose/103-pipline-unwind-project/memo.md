## **Describe Real world problem**

> Let's say we're designing an API to solve a problem for a travel vendor who wants to know how heavy their business is each month.

![Alt startDates](pic/bandicam%202022-11-12%2021-10-19-107.jpg)

- We can solve the above problem by analyzing how many tours start each month.

## **Start with new route**

![Alt copy frame](pic/bandicam%202022-11-12%2021-15-54-601.jpg)

![Alt route](pic/bandicam%202022-11-12%2021-19-49-365.jpg)

- Before we analyze the tour that starts each month, we must first specify a **specific year**, so our route has an extra **:year** section.

![Alt year](pic/bandicam%202022-11-12%2021-21-51-527.jpg)

## **$unwind**

![Alt array isn't convenient](pic/bandicam%202022-11-12%2021-24-23-411.jpg)

![Alt $unwind](pic/bandicam%202022-11-12%2022-08-42-469.jpg)

![Alt unwinded result](pic/bandicam%202022-11-12%2021-27-45-714.jpg)

- With **$unwind**, a complete tour document is copied for each element in the array.

## **Mongo operator to Date object**

![Alt operator to date object](pic/bandicam%202022-11-12%2021-32-03-097.jpg)

- You can find that the **Date object** in JavaScript is the same as the **Date type** in Mongo.
- The **operators (gte, gt, lte, lt)** we used before for Number value can be used directly on the **Date object**.

## **$group**

![Alt $month doc](pic/bandicam%202022-11-12%2021-34-36-356.jpg)

- We want to use month for grouping, but currently we only have Date object, is there any way to extract month from Date object?
  - When in doubt, you can directly check the official Mongo documentation, especially the operator section, because there are really many types of operators and fuctionalites.

![Alt $group](pic/bandicam%202022-11-12%2021-37-55-415.jpg)

## **Fail & Fix**

> Using Postman to test the results is a failure, learning how to solve the problem is also very important part.

![Alt fail](pic/bandicam%202022-11-12%2021-41-03-068.jpg)

![Alt figure out problem and fix them](pic/bandicam%202022-11-12%2021-48-42-924.jpg)

![Alt correct result](pic/bandicam%202022-11-12%2021-49-12-677.jpg)

## **$push and Array**

> We wanted to list the tour name as well, and intuitively thought it would be best to use **array** to show off. But how do I combine the values into an array in Mongo?

![Alt $push](pic/bandicam%202022-11-12%2021-51-11-957.jpg)

- **\$push** is a bit like **\$sum**, but while $sum adds the value of the specified field for each document, but $push does an **append** instead of add.

![Alt array result](pic/bandicam%202022-11-12%2021-51-30-957.jpg)

## **Change Field Name**

![Alt _id is meaningless](pic/bandicam%202022-11-12%2021-53-58-052.jpg)

- The field **\_id** is used in the $group stage to specify the field to be used by the group, but it doesn't make much sense by itself.
  - So we will use another field name to replace it.

![Alt addFields and project](pic/bandicam%202022-11-12%2021-58-32-356.jpg)

![Alt result](pic/bandicam%202022-11-12%2021-59-10-798.jpg)

## **Add few more stages and final results**

![Alt other stages](pic/bandicam%202022-11-12%2022-00-49-227.jpg)

![Alt final results](pic/bandicam%202022-11-12%2022-01-42-461.jpg)
