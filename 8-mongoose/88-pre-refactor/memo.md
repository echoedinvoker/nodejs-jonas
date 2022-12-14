## **Add Model part in the file system**

![Alt add model folder and js for tours](pic/bandicam%202022-10-23%2021-00-44-798.jpg)

## **Separate Business logic codes from server.js**

### _server.js_

![Alt anayze server.js](pic/bandicam%202022-10-23%2021-02-17-509.jpg)

- The codes associated with **creating the Tour model** should be placed in the model js file.

![Alt delete test part of left in server.js](pic/bandicam%202022-10-23%2021-04-02-099.jpg)

- This part of the code is used for testing only, now you can delete it.

### _tourModel.js_

![Alt tourModel.js](pic/bandicam%202022-10-23%2021-06-34-582.jpg)

- In addition to the codes moved from server.js to build out the Tour model, it must also be **exported** so that the model js file is meaningful.

![Alt fix the miss part](pic/bandicam%202022-10-23%2021-09-23-023.jpg)

- The part of **declaring DB** is also related to the creation of Tour model, I forgot to move it over just now, so I'll add it now.

## **Clean Controller of Tour to prepare Refactoring**

### _import Tour and remove key codes about local file_

![Alt prepare for refactor of tourControllers.js](pic/bandicam%202022-10-23%2021-13-19-477.jpg)

- Because after we refactor, the data is completely retrieved from **mongoDB**, so all the parts about **local files** should be removed.
  - Let's start with the key codes and remove them.
- first line **including 'fs'** should be removed, too(I forgot...).

### _remove all error codes_

![Alt popup lots of errors](pic/bandicam%202022-10-23%2021-19-28-671.jpg)

- Retain the part without error, so that is called **refactoring**, otherwise it is a **rewrite** XD

![Alt after removing all error](pic/bandicam%202022-10-23%2021-22-31-966.jpg)

- So far, we have removed all the parts of the local file system that we were getting data from and are **ready to refactor** in the next lecture.

## **Plus. lecturer forgot that check body should be removed, either**

> lecturer in this lecture forget to delete the part of the check body, but leave it to the next lecture, we directly delete in this lecture, more logical.

![alt](pic/bandicam%202022-10-24%2000-26-44-739.jpg)

![alt](pic/bandicam%202022-10-24%2000-28-43-004.jpg)
