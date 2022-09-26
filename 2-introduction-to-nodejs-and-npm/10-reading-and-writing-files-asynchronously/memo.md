![Alt first try about asyn readFile ](pic/bandicam%202022-09-27%2002-29-15-173.jpg)

- start.txt will be read in the background.
- The callback function will be executed after start.txt has been completely read.
  - The first argument of the callback function is usually err.
- Combining the above two reasons, "Will read file!" will be printed first.

![Alt use first async result to choose file to read ](pic/bandicam%202022-09-27%2002-32-14-721.jpg)

![Alt append log from another txt ](pic/bandicam%202022-09-27%2002-34-43-721.jpg)

![Alt write all logs into a file ](pic/bandicam%202022-09-27%2002-37-34-415.jpg)

![Alt content of file ](pic/bandicam%202022-09-27%2002-37-43-196.jpg)

![Alt try to use err arg ](pic/bandicam%202022-09-27%2002-41-13-475.jpg)
