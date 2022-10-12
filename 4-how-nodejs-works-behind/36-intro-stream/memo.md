![Alt what is stream](pic/bandicam%202022-10-12%2016-07-46-545.jpg)

![Alt providers](pic/bandicam%202022-10-12%2016-07-51-104.jpg)

- **Netflix** and **Youtube** are both called **streaming** companies because they use the above principle to stream videos.

![Alt features](pic/bandicam%202022-10-12%2016-08-05-277.jpg)

![Alt four types](pic/bandicam%202022-10-12%2016-08-11-496.jpg)

- There are four fundamental types of streams.
- **readable** and **writable** steams are more imoportant.

![Alt description an example](pic/bandicam%202022-10-12%2016-08-33-086.jpg)

- In fact, **http requests arrive at the server** and are processed **piece by piece**, rather than waiting until the entire request arrives, which is also the case when **fs reads the file**.

![Alt instance of EventEmitter](pic/bandicam%202022-10-12%2016-08-35-694.jpg)

![Alt events](pic/bandicam%202022-10-12%2016-08-39-283.jpg)

- In fact, streams are **instances of EventEmitter**, so all streams can emit or listen to named event.

![Alt functions](pic/bandicam%202022-10-12%2016-08-43-963.jpg)

- The most important events are:

  - **data**: emitted when there is a **new piece** of data to **consume**.
  - **close**: emitted as soon as that there is **no more data to consume**.

- There are two most important functions that can be used on readable stream:
  - **pipe()** - super importand!
    - basically allow us to **plug** stream together.
    - passing data **from one stream to another** without having to worry about events at all.
  - **read()**

![Alt writable streams](pic/bandicam%202022-10-12%2016-08-50-489.jpg)

- it means a stream that we can write data into, so when we want to send data, we have to write it somewhere.
  - that **somewhere** is writable stream.
- opposite of readable stream.
- for example:
  - http **response** to client

![Alt duplex streams](pic/bandicam%202022-10-12%2016-09-00-603.jpg)

- a web socket is basically just a communication channel between client and server that works in **both directions** and stay open once the connection has been established.

![Alt tranform streams](pic/bandicam%202022-10-12%2016-09-05-451.jpg)

- transform streams is basically duplex stream which at the same time can **modify an transform** the data as it is read or written.

![Alt consume streams](pic/bandicam%202022-10-12%2016-09-10-193.jpg)

- It is important that these **events** and **functions** are for **consuming streams** that are already implement like the ones that I showed you here as our example.
- it's most important to know how to actually **consume** streams, not really how to implement them.
  - consuming means how to **use** it.
