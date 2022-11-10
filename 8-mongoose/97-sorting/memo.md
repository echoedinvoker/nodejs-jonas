## **Check Mongoose Query.prototype Documents**

![Alt](pic/bandicam%202022-11-10%2011-28-27-194.jpg)

- The object returned by find inherits the various methods of **Query.prototype**.
  - **sort** is also one of them.

## **Add Param sort in the URL**

![Alt](pic/bandicam%202022-11-10%2011-34-02-653.jpg)

- So far this sort will only be excluded and has no effect yet.

## **Use Query.prototype.sort in controller**

![Alt](pic/bandicam%202022-11-10%2013-53-01-719.jpg)

- Because there may not be a param sort in the URL, the if statement is used.
- When there is a param **sort** in the URL, it will be sorted using **Query.prototype.sort** in the above document.
  - You cannot use **await** in the instruction line where method **find** exists, otherwise this part will not work.

## **Sort Ascending/Descending**

![Alt decending](pic/bandicam%202022-11-10%2013-58-22-320.jpg)

- The default sorting method is descending.
- Simply adding a negative sign in front of the field will turn it into an ascending sort.

## **Multiple Sort Fields**

![Alt multiple sort fields](pic/bandicam%202022-11-10%2014-01-22-438.jpg)

![Alt finish codes ](pic/bandicam%202022-11-10%2014-05-05-000.jpg)

- Although we use **commas** instead of space in the **URL**, we still have to convert back in the codes to pass into method **sort**.
