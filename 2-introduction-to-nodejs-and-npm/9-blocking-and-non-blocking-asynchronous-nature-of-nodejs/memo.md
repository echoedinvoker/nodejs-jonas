![Alt bocking vs. non-blocking ](pic/bandicam%202022-09-27%2001-08-25-703.jpg)

## **Synchronous(Blocking)**

- shychronous code executes instruction step by step, so the rest of the instruction must wait until the currently executing instruction is finished before it can be executed, so it is also known as blocking code.

## **Asynchronous(Non-Blocking)**

- asynchronouse code We upload the heavy work to the background and then register a callback function to execute the callback function when the background work is done.
  - This allows the rest of the instruction to be executed directly without waiting for the heavy work to finish, so it is called non-blocking code.

![Alt block all other users ](pic/bandicam%202022-09-27%2001-08-57-529.jpg)

- There is only one single thread in the NodeJS application.
  - thread is like a stream of instructions being executed by our computer's CPU.
  - So any user who accesses this application all uses the same thread.
    - If one user accesses the application and reads a huge sync file in your code, all other users must wait.

![Alt move heavy work to background ](pic/bandicam%202022-09-27%2001-09-20-606.jpg)

![Alt heavy work on background ](pic/bandicam%202022-09-27%2001-09-26-299.jpg)

- In asynchronous code, we move the heavy work to the background run, so other users can continue to execute their instructions in the single thread.

![Alt when data available, execute callback ](pic/bandicam%202022-09-27%2001-09-37-214.jpg)

- When the heavy work is done and the file is completely read, the registered callback function will be moved to a single thread to be executed.

![Alt other things about callback & async ](pic/bandicam%202022-09-27%2001-09-50-630.jpg)

- I/O is simply input-output.

  - For example
    - access to the file.
    - handle network requests.
  - This is actually the reason NodeJS exists, so NodeJS is designed around callbacks.
    - This is why there are so many callback functions used in NodeJS.
    - However, the callback function does not automatically turn it into an asynchronous code, which only exists for certain functions of the Node API, such as the readFile function.

- In other programming languages, like PHP, it is designed with a completely different logic, for example, each new user will have a new thread, which is a completely different paradigm.
- The authors of NodeJS have found this single thread modal to be the best solution for building high-performance, scalable web applications.

![Alt callback hell ](pic/bandicam%202022-09-27%2001-10-04-778.jpg)

- The callback function can easily make our codes difficult to understand.

  - In fact, the above examples are not uncommon.

- Now, how do we actually escape callback hell?
  - We can use more advanced tools to handle asynchronous code.
    - ES6 Promise
    - ES8 Async/Await
