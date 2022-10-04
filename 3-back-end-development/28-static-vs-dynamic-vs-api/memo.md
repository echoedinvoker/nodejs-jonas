![Alt static/dynamic](pic/bandicam%202022-10-04%2011-42-01-904.jpg)

![Alt html/css/js](pic/bandicam%202022-10-04%2011-42-08-029.jpg)

- The static web server is where developers upload the files needed for the final web page such as HTML, CSS, JavaScript.

![Alt provide them to browser](pic/bandicam%202022-10-04%2011-42-20-281.jpg)

- When the web server receives the request, it sends these files to the front-end browser.

![Alt browser generate website](pic/bandicam%202022-10-04%2011-42-25-133.jpg)

- The browser receives these files and renders the web pages as they are.
- So the back-end web server does not do anything other than pass files to the browser.

![Alt js not equal to dynamic](pic/bandicam%202022-10-04%2011-42-33-853.jpg)

- Wait, we have passed JavaScript to the browser, so the web page will have animation effects and some user interaction interface, so it should be dynamic, right?
  - The dynamics referred to in different contexts are different. The above dynamics are under the context of frond-end.
  - In the **browser context**, **dynamic** has nothing to do with effect on the page or thins moving around, but with **the way websites are generated on servers**.
    - So **dynamic website** is different from static websites, because they are usually **built on the server** each time a new quest come in.

![Alt database](pic/bandicam%202022-10-04%2011-42-41-645.jpg)

- **Dynamic websites** usually have a **database**.

![Alt fetch data from it](pic/bandicam%202022-10-04%2011-43-12-405.jpg)

![Alt use data fill template to generate website](pic/bandicam%202022-10-04%2011-43-17-054.jpg)

- Then there is an **application** such as **NodeJS** that, together with a **pre-defined template**, constructs each page of the user's dynamic request based on the data from the **database**.

![Alt html/css/js](pic/bandicam%202022-10-04%2011-43-22-529.jpg)

- This **page** will be composed of **HTML**, **CSS**, and **JavaScript** files.
  - These files will then be sent to the **browser**.

![Alt provide them to browser](pic/bandicam%202022-10-04%2011-43-25-766.jpg)

- The content of the web page can be **changed at any time** according to the \*8data in the database** and the **user's operation\*\* of the web page.
  - That's why it's called **Dynamic**.
  - For example
    - when you **log in and log out** of twitter, two completely different pages will appear.
    - Tomorrow's twitter feed will be different from what you see today, because the **data in the database has changed**.
    - So on the contrary, if you see the **same content** every time you go to a website, it should be a **static** page.

![Alt server-side render](pic/bandicam%202022-10-04%2011-43-29-213.jpg)

- We also call the process of generating a webpage above a **8server-side rendering**.

![Alt web app=dynamic website+functionality](pic/bandicam%202022-10-04%2011-43-40-668.jpg)

- Usually when we call a web page a **web application**, it is usually a **dynamic** web page.
  - Because if a web page is called a **web applictaion** it usually means that the web page should have some **functionality** such as:
    - create user profile
    - log in / out
    - search for stuff
    - etc.

![Alt dynamic vs api](pic/bandicam%202022-10-04%2011-43-54-248.jpg)

- Traditionally, websites were only divided into static and dynamic, but as technology advances, we are now seeing more and more websites being built based on **APIs**.

![Alt fech data from database](pic/bandicam%202022-10-04%2011-44-02-263.jpg)

- This part is the same as the backend of a normal dynamic website.

![Alt generate json](pic/bandicam%202022-10-04%2011-44-07-299.jpg)

![Alt provide it to browser](pic/bandicam%202022-10-04%2011-44-11-020.jpg)

- The difference is that the backend doesn't generate a website, it only generates **data** and sends it to the frontend browser.
  - data format is usually **JSON**.

![Alt build/comsume api](pic/bandicam%202022-10-04%2011-44-16-300.jpg)

- So when constructing an API-based website, it consists of two parts:

  - **build API** on the server-side.
  - **consuming API** on the client-side.

- API is **application programming interface**.
  - It is a piece of software that can be used by other piece of software, allowing applications to **talk to each other**.

![Alt browser fill template to generate website](pic/bandicam%202022-10-04%2011-44-24-834.jpg)

- After the browser receives the data, it will insert the data into some fancy front-end framework(react, angular...) to generate the web page.

![Alt same as dynamic](pic/bandicam%202022-10-04%2011-44-31-281.jpg)

- This part is somewhat similar to the back-end creation of a web page in a dynamic website.
  - But it happens on the front end, so it is also called **client-side rendering**.

![Alt server-side render](pic/bandicam%202022-10-04%2011-44-36-962.jpg)

![Alt client-side render](pic/bandicam%202022-10-04%2011-44-41-319.jpg)

![Alt this course](pic/bandicam%202022-10-04%2011-44-54-205.jpg)

- This course is a **back-end** course, whether it is **dynamic** generation of **website** or **build API** is included in the course content.
- For back-end developers, it is actually much easier to just build the API than to generate a website.
  - NodeJS is great for both purposes.

![Alt one api](pic/bandicam%202022-10-04%2011-45-00-316.jpg)

- APIs built by the back-end server can be consumed by any plateforms, not just browsers.
  - This is a huge advantage of the build API compared to building websites.

![Alt api example](pic/bandicam%202022-10-04%2011-45-07-096.jpg)

- Suppose we have a JSON formatted data as above.

![Alt api to browser](pic/bandicam%202022-10-04%2011-45-26-105.jpg)

- The part we've taught so far is to throw the data into the browser to generate the web page.

![Alt api to various plateforms](pic/bandicam%202022-10-04%2011-45-32-895.jpg)

- The same **data** can be given not only to the browser, but also to other **platforms**, which is the great advantage of API.

  - Similarly, if our back-end server builds a **website**, consisting of **HTML, CSS, JavaScript** files.
    - These files can **only** be understood by the client's **browser**.

- Some people or teams don't even have their own client and only sell access to their API to third parties.
