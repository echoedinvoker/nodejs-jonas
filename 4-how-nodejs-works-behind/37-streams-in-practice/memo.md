# **_Read Big File and Send to Client Without Stream_**

![Alt create instance from http in one line](pic/bandicam%202022-10-13%2002-08-35-814.jpg)

- Omit the step of assigning the class to the variable and get the **server instance** directly.

![Alt oldest way to read big data then send to client](pic/bandicam%202022-10-13%2002-14-10-111.jpg)

- In reality, we don't use it this way because we need to write **the whole data into memory**, which can easily cause the server to **crash**.

![Alt browser test](pic/bandicam%202022-10-13%2002-14-33-120.jpg)

![Alt out of memory](pic/bandicam%202022-10-13%2002-15-34-735.jpg)

# **_Build Readable and Writable Stream_**

![Alt stream way(build readable/writable stream)](pic/bandicam%202022-10-13%2002-26-55-348.jpg)

- The **readable stream** emits the **'data'** event with the **'chunk'** argument, so we can use it in the **callback** function of the listener.
- **res.end()** itself has an **end-of-response** meaning, so it must be used to end the writable stream, echoing the **'end'** event of the readable stream.

![Alt browser test](pic/bandicam%202022-10-13%2002-27-14-923.jpg)

![Alt out of memory](pic/bandicam%202022-10-13%2002-27-45-808.jpg)

## **BackPressure**

- When the readable stream is running much faster than the writable stream, the writable stream cannot handle the chunk dumped by the readable stream in real time, which will cause **backpressure**.

# **_Pipe to Readable Object directly_**

![Alt pipe way](pic/bandicam%202022-10-13%2002-30-31-420.jpg)

- The method 'pipe' of readableStream can help us directly connect readable stream to writable **object** for data transfer, which solves the **backpressure** problem by the way.

  - Note that the argument to pass into pipe() is a **readable object**, not a stream.

- **pipe()** does a lot of things for us behind the scenes, such as the creation and ending of writable streams and the handling of backpressure, so we only use the **second approach** when we have more **customized needs**, otherwise we usually use **pipe()** directly.

![Alt  browser test](pic/bandicam%202022-10-13%2002-30-52-963.jpg)

![Alt  out of memory](pic/bandicam%202022-10-13%2002-31-18-458.jpg)

# **_Back to second approach for error handling_**

![alt](pic/bandicam%202022-10-13%2003-08-42-655.jpg)

- As we mentioned in the pipe() section above, if there are more customized requirements, you cannot use pipe() directly, but must go back to the second method to write details by ourself.

![alt](pic/bandicam%202022-10-13%2003-10-17-692.jpg)

![alt](pic/bandicam%202022-10-13%2003-10-27-854.jpg)
