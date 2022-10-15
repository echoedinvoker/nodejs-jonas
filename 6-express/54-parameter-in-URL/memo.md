# **_Explain Purpose of this lecture_**

![Alt goal](pic/bandicam%202022-10-15%2011-01-21-029.jpg)

- This lecture aims to implement let client user can obtain a specific tour from the server by adding an id to the original GET URL on the browser.

![Alt copy get](pic/bandicam%202022-10-15%2011-07-24-017.jpg)

# **_Variable in URL_**

## **what is param**

![Alt add id](pic/bandicam%202022-10-15%2011-12-29-035.jpg)

- Because the id given by Client will change, sometimes it may be 5 and sometimes it may be 4, so it is **variable**.
- We use **colon ":"** to indicate **variable** in router.
- Because the content of the id changes according to the needs of the Client user, it is actually the **parameter**.
  - All parameters of the request are stored in **req.params**.

![Alt postman request with id](pic/bandicam%202022-10-15%2011-14-27-328.jpg)

![Alt console check param](pic/bandicam%202022-10-15%2011-15-35-707.jpg)

## **multiple params**

![Alt multiple params](pic/bandicam%202022-10-15%2011-16-44-816.jpg)

![Alt postman request with multiple param](pic/bandicam%202022-10-15%2011-17-14-861.jpg)

![Alt console check](pic/bandicam%202022-10-15%2011-17-37-992.jpg)

## **optional params**

![Alt remove :y](pic/bandicam%202022-10-15%2011-18-47-957.jpg)

![Alt turn param to optional](pic/bandicam%202022-10-15%2011-19-43-046.jpg)

![Alt request by postman](pic/bandicam%202022-10-15%2011-19-57-560.jpg)

![Alt console check](pic/bandicam%202022-10-15%2011-20-41-297.jpg)

- So if there is a parameter set in the router, there must be exist in the request, unless it is **optional**.

# **_Find Specific Tour_**

![Alt find tour from tours](pic/bandicam%202022-10-15%2011-26-44-097.jpg)

![Alt postman request tour](pic/bandicam%202022-10-15%2011-28-04-267.jpg)

- This part is easy if you are familiar with JavaScript.

# **_How if tour is non-exist_**

![Alt request tour not exist](pic/bandicam%202022-10-15%2011-30-09-220.jpg)

- Also { "status": "success" } make no sense.

![Alt check if find non-exist tour](pic/bandicam%202022-10-15%2011-32-24-213.jpg)

![Alt guard clause with 404 response](pic/bandicam%202022-10-15%2011-39-53-197.jpg)

- We use the guard clause concept to insert the 404 response before the 200 response, which makes our codes more concise and readible.

![Alt postman request non-exist tour again](pic/bandicam%202022-10-15%2011-41-17-547.jpg)
