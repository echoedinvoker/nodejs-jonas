![Alt event-driven arch](pic/bandicam%202022-10-05%2001-57-53-759.jpg)

- Basically, codes that are **not at the top-level** are all in the **callback function**, which can also be said to be all run in the **event loop**.
  - some **heavy** part might be **offload to thread pool**, thought.
- The whole event loop (or NodeJS) is designed to focus on being able to call the associated callback function as soon as something(like new HTTP request, timer expired...) is done.

![Alt event loop does orch](pic/bandicam%202022-10-05%2001-58-10-635.jpg)

- We can say that the event loop is doing the job of **orchestration**.
  1. Because when something happens **emit events** from them.
  2. event loop **recieve these events** to **trigger associate callback function**.
  3. **offload** some heavy task to **thread pool**.

![Alt callback queues](pic/bandicam%202022-10-05%2001-58-19-108.jpg)

- event loop has many **phases**.
  - each phase has its own **callback queue**.

![Alt expire timer callbacks](pic/bandicam%202022-10-05%2001-58-28-873.jpg)

- How will the timer expire be handled if it is in another phase?

  - The associated callback function will not be processed until the next "Expired timer callbacks" phase arrives.

- Each phase will wait until all the callback functions in its callback queue are finished before moving on to the next phase.

![Alt I/O polling and callbacks](pic/bandicam%202022-10-05%2001-58-39-906.jpg)

- **Polling** basically means looking for new **I/O events** that are ready to be processed and putting them into the **callback queue**.

  - In Node application context, I/O means mainly stuff like:
    - networking
    - file access

- 99% of our code gets executed this phase, because in a typical Node app, the bulk what we need to do is related to networking and file access.

![Alt setImmediate callbacks](pic/bandicam%202022-10-05%2001-58-46-356.jpg)

- If there is simply some callback function that must be executed immediately, it can be placed in this phase.
- The callback function here will be executed after the "I/O polling and callbacks" phase ends.
- This can be important in some more advanced use cases.

![Alt close callbacks](pic/bandicam%202022-10-05%2001-58-50-429.jpg)

- Not that important for us, put here just for the sake of completeness.
- close event for example like:
  - web server shutdown
  - websocket shutdown

![Alt how these two queue insert](pic/bandicam%202022-10-05%2001-58-58-522.jpg)

- There are two callback queues that exist **independently** of these phases:

  - **microtask queue**
    - for resolved promises
  - **process.nextTick()** queue
    - some like "setImmediate callbacks" phase, but this will be executed right after current phase end.

- These two queues will be inserted after the end of the **current phase** instead of waiting for the entire phase loop to finish.

![Alt yes->next tick](pic/bandicam%202022-10-05%2001-59-29-434.jpg)

- This is called a **tick** when all phases are completed once.
- How NodeJS determines if it should go to the next tick or end the program?
  - NodeJS will check if there is any **timer** or **I/O task** working in the background, if so, it will go to the next tick, otherwise it will end the program.
    - for example, in previous lecture our app use a port to **listening HTTP request**, which is a **I/O task**, that why the program won't be exit because always has **I/O task** working in the background.

![Alt some principles to follow](pic/bandicam%202022-10-05%2002-01-17-534.jpg)

- NodeJS runs everything in a **single thread**, regardless of how many people access.

  - This makes NodeJS so **lightweight and scalable**.
  - But the risk is that if this single thread is blocked, the whole application will be significantly slower.
    - So the point is **how not to let the single thread be blocked**, which is also the responsibility of our back-end developers.

- There are some guidelines in the diagram above, lower right:
  - Although our previous lectures have used the **synchronous fs function**, they were used at the **top-level** and therefore did not violate the guidelines.
  - **Complex computing** in addition to **loops inside loops**, processing **millions of operations** are also classified as such, these things should not be put into the **event loop**.
  - **Complex regular expressions** other than **nested quantifiers** and **back references** are also of this kind, and these should not be put in the **event loop**.
