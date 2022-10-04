![Alt node](pic/bandicam%202022-10-04%2014-35-55-460.jpg)

- The NodeJS architecture is all about its dependencies, which are some important libraries.

![Alt v8](pic/bandicam%202022-10-04%2014-36-03-346.jpg)

- The most important libraries are Google's V8 engine and libuv.
  - NodeJS requires the V8 engine to understand JavaScript.
  - V8 engine is something that converts JavaScript code into machine code that computers can actually understand.

![Alt libuv](pic/bandicam%202022-10-04%2014-36-06-615.jpg)

- **Libuv** is an open source library with a strong focus on **asynchronous IO**.
  - The **IO layer** allows NodeJS to access the underlying computer operating system, file system, and network.

![Alt event loop and thread pool](pic/bandicam%202022-10-04%2014-36-18-427.jpg)
And **libuv** also implement two extremly important features of NodeJS:

- **Event Loop**
  - for **easy** task, like executing callback and network IO.
- **Thread pool**
  - for **heavy** task, like file access or compression or something like that.

![Alt languages](pic/bandicam%202022-10-04%2014-36-29-197.jpg)

- Libuv is completely written in **C++** but not **JavaScript**.
- V8 itsel, also uses **C++** code besides **JavaScript**.
- So, Node itself is a program written in **C++** and **JavaScript**, not only JavaScript.

![Alt our js code](pic/bandicam%202022-10-04%2014-36-40-300.jpg)

- The beaty of this is that NodeJS ties all these libraries together, no metter if written in C++ or JavaScript.
- it provide us with a very nice layer of abstaction in order to make our lives a lot of easier.
  - this architecture allow us to write 100% pure **JavaScript** code running in NodeJS.

![Alt other dependencies](pic/bandicam%202022-10-04%2014-36-46-327.jpg)

- NodeJS not only relies on V8 and libuv but also:
  - **http-parser** for parsing http
  - **c-area** some DNS request stuff
  - **OpenSSL** for keptography
  - **zlib** for compression
