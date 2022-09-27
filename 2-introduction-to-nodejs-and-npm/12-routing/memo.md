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

## **URL handled by Router**

![Alt url / on browser ](pic/bandicam%202022-09-27%2017-14-47-622.jpg)

![Alt url /overview on browser ](pic/bandicam%202022-09-27%2017-14-53-541.jpg)

![Alt url /product on browser ](pic/bandicam%202022-09-27%2017-14-58-746.jpg)

## **Wrong URL handled by Router**

![Alt wrong url on browser ](pic/bandicam%202022-09-27%2017-16-51-801.jpg)

- Unlike the previous situation where there was no any router, now we enter an incorrect URL that causes the browser to keep loading forever...

![Alt else router ](pic/bandicam%202022-09-27%2017-17-57-811.jpg)

- We use the last else in the if-statement to handle the incorrect URL.

![Alt else url on browser ](pic/bandicam%202022-09-27%2017-18-49-935.jpg)

## **Error warning on browser**

![Alt writehead ](pic/bandicam%202022-09-27%2017-21-07-937.jpg)

- Usually, we also display a red warning message in the browser's console for errors, which can be sent using **res.writeHead**.

![Alt error msg on browser console ](pic/bandicam%202022-09-27%2017-21-27-967.jpg)

![Alt else result on browser network ](pic/bandicam%202022-09-27%2017-22-58-295.jpg)

## **Define Response Header**

![Alt write header ](pic/bandicam%202022-09-27%2017-27-36-667.jpg)

- **res.writeHead**, as the name suggests, can also define header of the response, which is like the metadata for the response.
- **res.writeHeader** must be executed before **res.end**.

![Alt html front on browser ](pic/bandicam%202022-09-27%2017-28-40-842.jpg)

![Alt observe req header on browser ](pic/bandicam%202022-09-27%2017-29-14-801.jpg)

## **Do Not confuse folder with router**

![Alt folder and router ](pic/bandicam%202022-09-27%2017-31-35-426.jpg)

- Both have / begin with, but in fact there is no any relation.
