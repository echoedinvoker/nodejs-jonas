![Alt event emitter](pic/bandicam%202022-10-05%2016-51-35-383.jpg)

- In NodeJS, there are special objects that **emit** specific **events** when something happens, somethin like:
  - request hitting server
  - timer expire
  - file finished to read

![Alt attached callback](pic/bandicam%202022-10-05%2016-51-46-101.jpg)

- The **event sent by the emitter** above will be caught by the **event listener**.
  - event listeners are set up by us **developers**.
  - When the **event listener** gets the **event**, it will trigger the **attached callback function** to execute.

![Alt code](pic/bandicam%202022-10-05%2016-51-52-128.jpg)

- Here is a sample code to illustrate the process just described.

![Alt 'request' event](pic/bandicam%202022-10-05%2016-51-55-923.jpg)

- "**server.on**" is the method we use to create a listener to listen to the "**request**" event.

![Alt EMITTER](pic/bandicam%202022-10-05%2016-51-58-106.jpg)

- When a request hits our server, the server will emit the "**request**" event, so in fact our server itself is the **Emitter**.

![Alt request event on EMITTER](pic/bandicam%202022-10-05%2016-51-59-948.jpg)

![Alt callback](pic/bandicam%202022-10-05%2016-52-03-630.jpg)

![Alt send response to client browser](pic/bandicam%202022-10-05%2016-52-05-395.jpg)

- When the event emitted by the server is caught by the **listener** we set, the **callback function** attached listener will be executed.
- The content of this **callback function** is the string passed to the client's browser using method "**red.end**"

![Alt instance of EventEmitter class](pic/bandicam%202022-10-05%2016-52-07-407.jpg)

- **server** is actually an **instance of the NodeJS EventEmitter class**.
  - So this object, **server**, can use all the logic of emit event and listener event inherited from **EventEmitter class**.

![Alt observer pattern](pic/bandicam%202022-10-05%2016-52-11-092.jpg)

- This emit event and listener event logic, inherited from the EventEmitter class, is called **observer pattern** and is very popular.
  - The opposite of this pattern is the pattern of functions calling functions.
  - everythin is more **de-coupled**.
    - each emitting events that other functions, even if they come from other modules.
  - Also, using an event-driven architecture makes it way more straight forward to **react multiple times to the same event**.
    - all we have to do is to set up multiple listeners.
