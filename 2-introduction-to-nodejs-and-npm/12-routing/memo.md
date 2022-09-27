## **No Router**

![Alt code from last lecture ](pic/bandicam%202022-09-27%2017-03-00-121.jpg)

- Use the codes from the previous lecture as an example.

![Alt url without any router ](pic/bandicam%202022-09-27%2017-03-18-077.jpg)

- In this example, we don't make any router on the url (/overview) part, so the result is the same no matter what url is entered.

## **What is URL?**

![Alt req.url ](pic/bandicam%202022-09-27%2017-06-35-094.jpg)

- The req variable of callback function contains the url information, so you can get the URL of the request directly using req.url.

![Alt overview ](pic/bandicam%202022-09-27%2017-07-10-616.jpg)

## **What is Router?**

![Alt log url on server console ](pic/bandicam%202022-09-27%2017-07-37-988.jpg)

- 127.0.0.1 is host / domain.
- :8000 is port.
- /overview is URL.
  - Don't forget **/**.

![Alt add router ](pic/bandicam%202022-09-27%2017-13-18-226.jpg)

- Determining what **action** should be performed if the **URL** is what, this is what **router** is all about.
  - The router can be made directly using a simple if else statement.
  - In practice, routers can become very complex, in which case we use a tool like Express.

## **URL handled by Router**

![Alt url / on browser ](pic/bandicam%202022-09-27%2017-14-47-622.jpg)

![Alt url /overview on browser ](pic/bandicam%202022-09-27%2017-14-53-541.jpg)

![Alt url /product on browser ](pic/bandicam%202022-09-27%2017-14-58-746.jpg)

## **Wrong URL handled by Router**

![Alt wrong url on browser ](pic/bandicam%202022-09-27%2017-16-51-801.jpg)

- Since the URL does not match any router, **no res.end will be executed**, which will result in endless loading of the broswer on the client side.

![Alt else router ](pic/bandicam%202022-09-27%2017-17-57-811.jpg)

- We use the last else in the if-statement to handle the incorrect URL.
  - The point is to get every URL result to run **res.end** to avoid endless loading in client browser.

![Alt else url on browser ](pic/bandicam%202022-09-27%2017-18-49-935.jpg)

## **Error warning on browser**

![Alt writehead ](pic/bandicam%202022-09-27%2017-21-07-937.jpg)

- Usually, we also display a red warning message in the browser's console for errors, which can be sent using **res.writeHead**.
- The first parameter of **res.writeHead** is the **status** code, where **404 means Not Found**.

![Alt error msg on browser console ](pic/bandicam%202022-09-27%2017-21-27-967.jpg)

![Alt else result on browser network ](pic/bandicam%202022-09-27%2017-22-58-295.jpg)

## **Define Response Header**

![Alt write header ](pic/bandicam%202022-09-27%2017-27-36-667.jpg)

- **res.writeHead**, as the name suggests, can also define header of the response, which is like the metadata for the response.
  - These metadata, in addition to representing various information about the response, also allow the browser to be prepared to receive the response in different ways.
    - For example, in the above image, we use **"Content-type": "text/html "** and browser will render the response in html format.
    ***
- **res.writeHeader** must be executed before **res.end**.

![Alt html front on browser ](pic/bandicam%202022-09-27%2017-28-40-842.jpg)

![Alt observe req header on browser ](pic/bandicam%202022-09-27%2017-29-14-801.jpg)

## **Do Not confuse folder with router**

![Alt folder and router ](pic/bandicam%202022-09-27%2017-31-35-426.jpg)

- Both have / begin with, but in fact there is no any relation.

## **Use Build-In Module url to parse comlex URL**

![alt](pic/bandicam%202022-09-28%2002-09-20-438.jpg)

- Sometimes we use more complex URLs like the one above.

![alt](pic/bandicam%202022-09-28%2002-10-06-845.jpg)

- But if we just use **res.url**, we still get a usual string.

![alt](pic/bandicam%202022-09-28%2002-12-12-054.jpg)

- We can use the build-in module **url** to parse it further.
