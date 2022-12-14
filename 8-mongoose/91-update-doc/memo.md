# **_Handler: patchTour_**

## **method 'findByIdAndUpdate'**

![Alt copy paste to patchTour](pic/bandicam%202022-10-24%2014-38-50-802.jpg)

![Alt modify a bit](pic/bandicam%202022-10-24%2014-48-13-518.jpg)

- We now have the **initial framework to handler patchTour**, the most important part of the interaction with the database (comment line) in the next step of implementation.

![Alt Tour.findByIdAndUpdate](pic/bandicam%202022-10-24%2014-49-43-411.jpg)

- **mongoose** provides a very convenient method for finding by id and updating a given document **in one line**.

## **check official documents**

> Let's go to the official mongoose website to find out how to use this method.

![Alt mongoose official doc](pic/bandicam%202022-10-24%2014-51-04-211.jpg)

![Alt parametoers doc](pic/bandicam%202022-10-24%2014-51-33-134.jpg)

![Alt which options we use](pic/bandicam%202022-10-24%2014-52-42-097.jpg)

- We will use two options:
  - new: true
    - return **updated** document.
  - runValidators: true
    - when update doc, **Schemas validator** will work again.

## **fill in parameter and finish response**

![Alt fill in parameters](pic/bandicam%202022-10-24%2014-54-20-447.jpg)

![Alt finish response](pic/bandicam%202022-10-24%2014-54-54-467.jpg)

# **_Test and Fix Problem_**

![Alt postman test failed...](pic/bandicam%202022-10-24%2015-03-11-431.jpg)

- There are some problems occurring...

![Alt figure out problem](pic/bandicam%202022-10-24%2015-03-41-909.jpg)

- Figure out that **await** was missed.

![Alt fix it](pic/bandicam%202022-10-24%2015-04-02-286.jpg)

![Alt test again](pic/bandicam%202022-10-24%2015-06-21-382.jpg)

- Because our HTTP requet verb is **PATCH**, it is a **partial update**, if it is **PUT**, you must provide the **full tour object**.
  - If you use **PUT**, the controller must use **another method** for implementation.
  - We do not implement **PUT**, because **PATCH** is more common in reality.

# **_Plus: Learn to check methods by Mongoose official documents_**

![alt](pic/bandicam%202022-10-24%2015-26-15-902.jpg)

- We can check the **methods of the Model itself or its instance (document)** on the above page.
- **prototype** is just like Array.prototype or String.prototype, it means methods under instances.
- The subsequent lectures will introduce a lot of mongoose stuff, but there are too many mongoose things to be fully covered in the course, so if you have any needs beyond the scope of the course, you must search the official mongoose website by yourself.
