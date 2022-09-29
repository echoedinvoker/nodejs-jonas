# **_Continue from the code of the previous lecture_**

![Alt add comment in front of each router](pic/bandicam%202022-09-30%2000-51-32-043.jpg)

- Add a comment and a blank line in front of each router paragraph to make the code look less crowded.

# **_Load All Templates at APP Start_**

![Alt  sync read template top-level](pic/bandicam%202022-09-30%2001-00-14-572.jpg)

- In this way, templates are only read when the APP is first launched, not every time a request arises.
- By the way, replace the parameter of res.end with a template variable, so that the web page can present the template first.

# **_Better Use res.writeHead_**

![Alt review overview pages1st](pic/bandicam%202022-09-30%2001-01-06-932.jpg)

![Alt review product page 1st](pic/bandicam%202022-09-30%2001-01-18-536.jpg)

- In fact, our response to the client is just a string, but the browser will automatically recognize it as html and parse it, and finally render it as a web page.

![Alt better have writeHead](pic/bandicam%202022-09-30%2001-03-34-897.jpg)

- Although the browser automatically recognizes this, it is safe to tell the client directly what we will respond to it with res.writeHead.

# **_How to replace PlaceHolder of Overview page_**

![Alt how to generate html for {%PRODUCT_CARD%}](pic/bandicam%202022-09-30%2001-05-50-057.jpg)

![Alt convert the concept to code](pic/bandicam%202022-09-30%2001-14-30-142.jpg)

- replaceTemplate This function we have not really written its code yet, but as long as the function is clearly defined first, we can use it before writing content of it.

# **_Writing repalceTemplate function_**

![Alt define replaceTemplate function](pic/bandicam%202022-09-30%2001-33-04-918.jpg)

- As you can see above, the use of placeholders can be very flexible.
  - replace element's content.
  - replace value of element's property, such as {%ID%}.
  - use as a condition, such as {%NOT_ORGANIC%}.
- Do not forget return, I just forgot once .\_.

![Alt see the final result of overview page](pic/bandicam%202022-09-30%2001-33-20-430.jpg)
