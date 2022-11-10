## **Build Pagination query**

### _URL_

![Alt postman URL](pic/bandicam%202022-11-10%2022-43-51-803.jpg)

- Usually the data in the database is not all responded to the user at once, so usually the API will provide two param fields, **page** and **limit**.

### _Query.prototype methods skip and limit_

![Alt skip and limit](pic/bandicam%202022-11-10%2022-50-15-643.jpg)

### _Finish pagination codes_

![Alt page and limit](pic/bandicam%202022-11-10%2022-54-42-503.jpg)

- The above uses the **short circuit ( || )** to provide the **default value** to the variables.

![Alt calc skip](pic/bandicam%202022-11-10%2022-56-56-335.jpg)

- Because the user does not directly provide the number of results to be skipped but the page and limit, we must **calculate** the number of results that should be **skipped** on the server side.

## **Test by Postman, page by page**

> Because we only have nine test documents in total, we only put three results on one page and test one page at a time.

![Alt page1](pic/bandicam%202022-11-10%2022-59-12-686.jpg)

- Mongoose's method **countDocuments** can get the number of documents in a collection directly **without query any document** (this help us save lots of internet resourse).

![Alt page2](pic/bandicam%202022-11-10%2022-59-29-872.jpg)

![Alt page3](pic/bandicam%202022-11-10%2022-59-43-456.jpg)

![Alt page4](pic/bandicam%202022-11-10%2023-01-52-366.jpg)

- It's strange if the user selects a page with no data and the website render only blank.

## **Non-exist page response**

![Alt non exist page handling1](pic/bandicam%202022-11-10%2023-07-11-582.jpg)

![Alt  non exist page handling2](pic/bandicam%202022-11-10%2023-08-06-033.jpg)

- When the user selects a page where no document exists, an **error** will be thrown and the execution will jump to the **catch block**.

### _test but no work_

![Alt problem](pic/bandicam%202022-11-10%2023-11-27-141.jpg)

![Alt problem fix](pic/bandicam%202022-11-10%2023-13-48-801.jpg)
