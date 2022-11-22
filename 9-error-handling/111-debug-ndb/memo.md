## **Do not use ndb, use chrome inspect**

### _ndb is no longer maintained, do not use it_

![Alt install ndb](pic/01.jpg)

![Alt ndb failed](pic/02.jpg)

### _Solution_

![Alt solution](pic/03.jpg)

## **Into Debugger with 1st Breakpoint**

![Alt node --inspect server.js](pic/04.jpg)

![Alt inspect with chrome](pic/30.jpg)

![Alt DevTools - Node.js](pic/06.jpg)

- However, the breakpoint above cannot be triggered because DevTool cannot reload the app.

### _Use setTimeout to Trigger Breakpoint_

![Alt Use setTimeout to trigger breakpoint](pic/07.jpg)

![Alt freeze at breakpoint](pic/09.jpg)

## **Check Local/Global important variables**

### _middleware stacks_

![Alt check local>app](pic/10.jpg)

![Alt local>app>_router>stack, there are middleware stacks](pic/11.jpg)

![Alt middleware stacks mapping to app.use](pic/12.jpg)

### _tour/userRouter middleware stacks_

![Alt check contents of tour/userRouter stack](pic/13.jpg)

### _Environment variables_

![Alt check global>process>env](pic/14.jpg)

## **Finish Debugger mode and Edit with DevTool**

![Alt click play to finish script](pic/15.jpg)

- Clicking play will finish all instructions if there are no other breakpoints.

![Alt out of debugger mode](pic/16.jpg)

- All instructions will automatically leave debugger mode after execution.

![Alt edit in DevTool](pic/17.jpg)

## **2nd Breakpoint and Use request to trigger it**

![Alt set breakpoint in the controller](pic/18.jpg)

- All instructions will automatically leave debugger mode after execution.The code of the above breakpoint will be triggered when the correct request is received, so instead of using setTimeout, use Postman to send the corresponding request to trigger it.

![Alt send request by Postman](pic/19.jpg)

![Alt freeze at res instruction](pic/20.jpg)

- On the right are some important variables that have been studied before, so you can make your own detailed observations.

## **Debug in Real World**

> We simulate the real situation for debugging here.

### _create context(let something wrong)_

![Alt make some error](pic/21.jpg)

### _find something wrong_

![Alt send request with param fields](pic/22.jpg)

### _choose right place to set breakpoint_

![Alt choose right instruction line to breakpoint](pic/23.jpg)

- This requires a certain understanding of the program structure in order to find the right place to set the breakpoint.

![Alt send request](pic/24.jpg)

### _check value of key variable step by step_

![Alt next step](pic/25.jpg)

![Alt check value of key variable, next step](pic/26.jpg)

![Alt check value of key variable, next step](pic/27.jpg)

![Alt check value of key variable, find error and fix](pic/28.jpg)

### _final test_

![Alt final test by Postman](pic/29.jpg)
