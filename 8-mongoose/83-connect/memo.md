# **_Get Connection String_**

![Alt click connect](pic/bandicam%202022-10-22%2018-29-29-583.jpg)

![Alt connect your app](pic/bandicam%202022-10-22%2018-29-39-559.jpg)

![Alt copy connection string](pic/bandicam%202022-10-22%2018-31-00-410.jpg)

- So we saved the **connection string** to our clipboard.

# **_Configuration file setting_**

> Paste the **connection string** from the clipboard into the Express app's **config.env**.

## **For Atlas connection**

![Alt config.env1](pic/bandicam%202022-10-22%2018-36-37-047.jpg)

![Alt config.env2](pic/bandicam%202022-10-22%2018-39-12-060.jpg)

- If you write the real mongo password directly in DATABASE, of course the above DATABASE_PASSWORD is not needed.

![Alt config.env3](pic/bandicam%202022-10-22%2018-41-05-348.jpg)

- Because we **only** use the mongo database **'natours'** in the Express app, we can specify it directly when we connect.

## **For Local Host connection**

![Alt config.env4](pic/bandicam%202022-10-22%2018-44-41-489.jpg)

- The main difference with Atlas connection is that the **protocol** and \*8host name\*\* are different

# **_Use mongoose driver_**

![Alt npm i mongoose@5](pic/bandicam%202022-10-22%2018-47-18-556.jpg)

- There are many drivers for mongo, **mongoose** is not a native driver but it is the most popular one.
  - We use the same major version as the lecture to avoid codes break afterwards.

![Alt server.js](pic/bandicam%202022-10-22%2018-59-29-641.jpg)

- We handle the **dabase connection** in **server.js**, because this part is not directly related to Express.
- Step 4 is to deal with **deprecated warns** only, just type on it everytime you use mongoose.connect, do not need to think too much.
- mongoose.connect is an **asynchronous method**
  - if connect successful it returns a **connection object** for us to use.
  - For now, let's leave the connection failure out of it (we should handle it later).

# **_Check Result_**

![Alt console result1](pic/bandicam%202022-10-22%2019-01-35-122.jpg)

![Alt console result2](pic/bandicam%202022-10-22%2019-02-57-837.jpg)
