# **_fs.readFile_**

## **First Try**

![Alt first try about asyn readFile ](pic/bandicam%202022-09-27%2002-29-15-173.jpg)

- start.txt will be read in the **background**.
- The **callback function** will be executed after start.txt has been completely read.
  - The first argument of the callback function is usually **err**.
- Combining the above two reasons, "Will read file!" will be printed first.

## **According to (Based on)**

![Alt use first async result to choose file to read ](pic/bandicam%202022-09-27%2002-32-14-721.jpg)

- Because the second file to be read is **based on the result of the first file** to be read, the second fs.readFile must be in the callback function of the first fs.readFile.

## **Append (ensure Order)**

![Alt append log from another txt ](pic/bandicam%202022-09-27%2002-34-43-721.jpg)

- We want the contents of append.txt to be **printed after** the contents of the previous print, so the third fs.readFile should be placed in the callback function of the second fs.readFile, otherwise there is no way to guarantee the **order** of the text printed out.

# **_fs.writeFile_**

![Alt write all logs into a file ](pic/bandicam%202022-09-27%2002-37-34-415.jpg)

- The data to be written must **come from the results of the second and third fs.readFile**, so fs.writeFile should naturally be placed in the callback function of the third fs.readFile to ensure that the required data are read completely before it is written.

![Alt content of file ](pic/bandicam%202022-09-27%2002-37-43-196.jpg)

# **_Error Use Case_**

![Alt try to use err arg ](pic/bandicam%202022-09-27%2002-41-13-475.jpg)

- We try to use the first argument of the callback function **err**.
- Usually, when an error occurs in a stream of related asynchronous code, we don't want the subsequent codes to be executed, so we use **return** to jump out of the stream of asynchronous code directly.
