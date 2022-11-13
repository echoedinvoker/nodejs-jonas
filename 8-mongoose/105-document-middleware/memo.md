## **Pre Save Hook(Middleware)**

> Mongoose also has **middlewares** such as Express. There are **five kinds** of middleware in Mongoose, and each of them is divided into **pre and post**, and they are usually called **Hook**.
> This lecture introduces the **document middleware**.

![Alt 1st pre save hook](pic/bandicam%202022-11-13%2012-37-39-423.jpg)

- Because this middleware works on the **document**, it is classified in **document middleware**.

![Alt post request](pic/bandicam%202022-11-13%2012-43-51-629.jpg)

- The **save** event is only emitted when **.save and .create**, so we use the **POST /tours** API for testing.

![Alt console result](pic/bandicam%202022-11-13%2012-46-12-617.jpg)

## **Use Pre Save Hook to Create Slug**

> Next, we use the **Pre Save Hook** to do something meaningful: generate the **slug** before storing the document in the database.

![Alt import slugify](pic/bandicam%202022-11-13%2012-48-13-553.jpg)

- A slug is just **a string that can be placed in a URL**, and we usually generate it with the 3rd-party package **slugify**.

![Alt build slug in callback of pre save hook](pic/bandicam%202022-11-13%2012-51-10-934.jpg)

### _Failed, Not included slug in Schema_

![Alt post request failed](pic/bandicam%202022-11-13%2012-53-22-728.jpg)

- **Failed**, the slug field is not added to the saved results.
  - The reason is that there is **no slug defined in the Schema**, so although the **Pre Save Hook** was used to add to the document before saving, it was automatically removed when saving.

![Alt add slug property in Schema](pic/bandicam%202022-11-13%2012-54-46-995.jpg)

![Alt post request success](pic/bandicam%202022-11-13%2012-55-52-908.jpg)

## **Multiple and Post Save Hook**

![Alt multiple pre hook and post hook](pic/bandicam%202022-11-13%2013-03-11-096.jpg)

- Because **hook is actually middleware**, so of course you can have **multiple** middleware, just remember that each middleware has a **call next at the end**.

![Alt post request](pic/bandicam%202022-11-13%2013-03-47-614.jpg)

![Alt final result in console](pic/bandicam%202022-11-13%2013-05-41-959.jpg)

![Alt comment practice part out](pic/bandicam%202022-11-13%2013-07-38-827.jpg)

- The last part is just for practice, so we will comment them out at the end and leave them for reference.
