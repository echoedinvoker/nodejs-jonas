## **Add Model part in the file system**

![Alt add model folder and js for tours](pic/bandicam%202022-10-23%2021-00-44-798.jpg)

## **Separate Business logic codes from server.js**

### _server.js_

![Alt anayze server.js](pic/bandicam%202022-10-23%2021-02-17-509.jpg)

- The codes associated with creating the Tour model should be placed in the model js file.

![Alt delete test part of left in server.js](pic/bandicam%202022-10-23%2021-04-02-099.jpg)

- This part of the code is used for testing only, now you can delete it.

### _tourModel.js_

![Alt tourModel.js](pic/bandicam%202022-10-23%2021-06-34-582.jpg)

![Alt fix the miss part](pic/bandicam%202022-10-23%2021-09-23-023.jpg)

- The part of declaring DB is also related to the creation of Tour model, I forgot to move it over just now, so I'll add it now.

## **Clean Controller of Tour to prepare Refactoring**

### _import Tour and remove key codes about local file_

![Alt prepare for refactor of tourControllers.js](pic/bandicam%202022-10-23%2021-13-19-477.jpg)

- Because after we refactor, the data is completely retrieved from mongoDB, so all the parts about local files should be removed
- first line including 'fs' should be removed, too(I forgot...).

### _remove all error codes_

![Alt popup lots of errors](pic/bandicam%202022-10-23%2021-19-28-671.jpg)

![Alt after removing all error](pic/bandicam%202022-10-23%2021-22-31-966.jpg)

- So far, we have removed all the parts of the local file system that we were getting data from and are ready to refactor in the next lecture.
