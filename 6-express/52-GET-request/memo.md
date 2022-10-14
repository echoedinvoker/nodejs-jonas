# **_Data: All Tours(simply)_**

![Alt data which need to send to client](pic/bandicam%202022-10-14%2014-12-56-711.jpg)

- This course will first build all the API, and then deal with the dynamic rendering part.
- The first API is about sending the data of all tours(simply) to the client.

# **_Coding: Design GET Router for All Tours(simply)_**

![Alt basic express server js template](pic/bandicam%202022-10-14%2014-14-43-128.jpg)

- The above is a basic architecture of a server using express, copied from the previous lecture in advanced.

![Alt app.get](pic/bandicam%202022-10-14%2014-18-01-971.jpg)

![Alt readFileSync on top-level](pic/bandicam%202022-10-14%2014-24-09-826.jpg)

- We use **synchronous** way to read the required files in **top-level**, so that it will be read as soon as the app is started, and then our app won't read it repeatedly every times request hitting.

![Alt construct response with JSend](pic/bandicam%202022-10-14%2014-31-48-786.jpg)

- Use the file read above to finish writing the **router handler** content.
- It is important to note that we have to do the **envelope** technique instead of just throwing the contents of the file to the client.

# **_Test: Send Request With Postman(or Browser)_**

![Alt send request with browser](pic/bandicam%202022-10-14%2014-33-32-263.jpg)

- The course is using **Postman**, but since the API designed for this lecture is for **GET**, it is okay to use **browser**.
