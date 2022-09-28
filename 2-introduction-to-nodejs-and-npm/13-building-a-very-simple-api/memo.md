# **_Continous with Codes of Last Lecture & Purpos of This Lecture_**

![Alt codes from last lecture (extract req.url to a variable)](pic/bandicam%202022-09-29%2002-15-53-870.jpg),

- We use the codes at the end of the previous lecture to continue the process.

![Alt what is json](pic/bandicam%202022-09-29%2002-17-10-427.jpg)

- In this lecture we are going to use the Web API to present the JSON data of the product on the website page to the client user.
  - The Web API is simply a server service that responds to the client's request with the corresponding data.

# **_File Path issue_**

![Alt add api router and write a fake red.end 1st](pic/bandicam%202022-09-29%2002-20-06-889.jpg)

- We usually write a router condition part, the first write is res.end, which first put a random string to ensure that the client's browser can load to this API properly, and then write the other parts.

![Alt dot](pic/bandicam%202022-09-29%2002-22-30-087.jpg)

- That is, if we run index.js at the project location and index.js on the desktop, the path represented by the dot will be different.
  - This often causes problems, so need a better way instead dot.
  - There are exceptions to the **require** part, the dot in require always represents the path where index.js is located and will never change.

![Alt __dirname](pic/bandicam%202022-09-29%2002-24-11-673.jpg)

- **\_\_dirname** is the best solution for the path, it represents the path location of index.js, so it won't be different depending on where we are running it.

# **_Print JSON Data_**

## **Log JSON Data on Terminal**

![Alt print json data to terminal](pic/bandicam%202022-09-29%2002-30-17-132.jpg)

![Alt client request api with browser](pic/bandicam%202022-09-29%2002-30-48-372.jpg)

![Alt json data in terminal](pic/bandicam%202022-09-29%2002-31-59-536.jpg)

## **Print JSON Data on Website**

![Alt print json data on website(codes)](pic/bandicam%202022-09-29%2002-38-53-953.jpg)

- Note that if we want to present the data in the website, the data type must be **String**, unlike the Terminal (Console) which can directly use the **object** type data format.

![Alt json data on website](pic/bandicam%202022-09-29%2002-36-50-785.jpg)

- Except for the icon part which is a bit strange, the rest of the display is working fine.

### _add Header_

![Alt add writeHead](pic/bandicam%202022-09-29%2002-43-27-593.jpg)

![Alt json data on website(with writeHead)](pic/bandicam%202022-09-29%2002-43-57-606.jpg)

- The header is to let the browser be properly prepared to receive our response, so the data presented this time is more perfect.

# **_Optimized readFile: Non-repeated reads_**

> Although the JSON data can be presented in the client browser through the Web API, the server will read the data.json file once every time the client sends a request, which is not a very smart approach.

![Alt move readFile to top-level](pic/bandicam%202022-09-29%2002-46-42-486.jpg)

![Alt convert async to sync](pic/bandicam%202022-09-29%2002-51-04-064.jpg)

- What we did above is to move the part that reads the data.json to the top-level scope, and change it to a synchronous way to ensure that each time client browser load the page, it must first read the data.json data to ensure the existence of the variable productData at the beginning.

![Alt  reload page to double check](pic/bandicam%202022-09-29%2002-51-25-515.jpg)

- It looks like the same result, but the back-end performance is better now.
