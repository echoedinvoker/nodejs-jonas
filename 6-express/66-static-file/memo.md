## **Question**

![Alt question](pic/bandicam%202022-10-20%2017-03-37-066.jpg)

- Can we get the files in the server file system directly from the browser?

## **Try to get Static File by Browser**

![Alt use browser get json](pic/bandicam%202022-10-20%2017-05-40-221.jpg)

![Alt use browser get static file in our server file system](pic/bandicam%202022-10-20%2017-06-44-368.jpg)

## **express.static**

![Alt express.static](pic/bandicam%202022-10-20%2017-08-44-149.jpg)

- We can use **express.static** to help us construct routers for these static files and then add them to the middleware stack using **app.use**.

![Alt remove 'public'](pic/bandicam%202022-10-20%2017-09-05-918.jpg)

- **express.static** specifies a **folder in the sever file system**, but does not need to put the folder name in the browser's url, rather like treating the folder as **root**.

![Alt get static file in the browser](pic/bandicam%202022-10-20%2017-10-16-176.jpg)

## **Nested file**

![Alt get nested file](pic/bandicam%202022-10-20%2017-13-39-893.jpg)

![Alt show in the browser](pic/bandicam%202022-10-20%2017-14-06-318.jpg)

![Alt prove that URL is only router but directory](pic/bandicam%202022-10-20%2017-15-54-855.jpg)

- Although **/img/ping.png** can get a static file, **/img/** is wrong because there is no **router** for this URL.
  - So in reality we still get the **static file** through the **router**.
