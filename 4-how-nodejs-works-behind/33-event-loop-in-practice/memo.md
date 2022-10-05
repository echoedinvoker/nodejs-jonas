![Alt details](pic/bandicam%202022-10-05%2014-00-24-219.jpg)

- (1) should include fs.readFile, setImmediate and setTimeout.
  - and these three will work on the background.
    - after work finished, associate callback will put into queue of event loop.
      - only fs.readFile need consume some time to finished.

![Alt add timeout/immeidat to reafile's callback](pic/bandicam%202022-10-05%2014-30-22-882.jpg)

![Alt detail1](pic/bandicam%202022-10-05%2014-41-32-696.jpg)

![Alt detail2](pic/bandicam%202022-10-05%2014-45-43-664.jpg)

![Alt detail3](pic/bandicam%202022-10-05%2014-47-56-878.jpg)

- Because the next phase of the I/O phase is Immediate, "Immediat 2 finished" will be printed after "I/O finished".

![Alt add timeout and nested immediat to nested immediate's callback](pic/bandicam%202022-10-05%2014-55-50-774.jpg)

- Analyze from outer layer to inner layer one by one.
- The callback function must be dropped into the queue.

![Alt process.nextTick](pic/bandicam%202022-10-05%2015-02-01-121.jpg)

- The callback of process.nextTick will be executed directly after the end of the current phase, so "Nexttick 1 finished" will definitely be printed after "Immediat 3 finished".

![Alt crypto](pic/bandicam%202022-10-05%2015-06-33-439.jpg)

- The content of the encryption is not important here, just know that it will take a few seconds to complete the encryption.

![Alt result](pic/bandicam%202022-10-05%2015-07-48-812.jpg)

- Encryption is heavy work, so the event loop will be offloaded to the thread pool to perform encryption.
  - There are 4 threads in thread pool, so 4 encryption finished almost at the same time because they are parrelled executed.
  - Do not confuse callback and encryption, heavy work is encryption not callback, so it is encryption offload to thread pool, and callback need to wait encryption finished.

![Alt only 1 in thread pool](pic/bandicam%202022-10-05%2015-09-15-007.jpg)

![Alt result](pic/bandicam%202022-10-05%2015-09-39-255.jpg)

- Because the number of threads in the thread pool has been changed to one, the encryption work in the thread pool can only be handled one by one.

![Alt async to sync encrypt](pic/bandicam%202022-10-05%2015-13-01-793.jpg)

![Alt result](pic/bandicam%202022-10-05%2015-14-32-616.jpg)

- If the encryption is changed to sync, it will be handled in the main single thread (not background and thread pool), which will block the whole event loop, and you can find that the later phases are blocked.
