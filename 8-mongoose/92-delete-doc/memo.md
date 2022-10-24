## **Exam of deleteTour handler**

![Alt analyze deleteTour](pic/bandicam%202022-10-24%2021-37-19-035.jpg)

- The above deleteTour content can be kept and the **patchTour** content can be copied and pasted, because the logic of the two handlers is similar.

![Alt copy paste and modify from patchTour](pic/bandicam%202022-10-24%2021-40-45-427.jpg)

![Alt figure out the method to delete](pic/bandicam%202022-10-24%2021-42-07-489.jpg)

- The method to **find tour by id and delete it** is easy to guess, if you can't guess, you can also check the official documents.

## **Postman test**

![Alt postman test](pic/bandicam%202022-10-24%2021-43-41-543.jpg)

![Alt postman check failed](pic/bandicam%202022-10-24%2021-45-40-472.jpg)

![Alt fix problem](pic/bandicam%202022-10-24%2021-46-18-086.jpg)

![Alt postman delete](pic/bandicam%202022-10-24%2021-46-58-510.jpg)

![Alt postman check succuess](pic/bandicam%202022-10-24%2021-47-55-442.jpg)

- So the methods related to **database interactions** are almost always **asynchronous**, so remember to add **await** in front of them.
