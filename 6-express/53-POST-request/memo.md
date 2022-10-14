# **_Frame of Router for POST_**

![Alt post router frame](pic/bandicam%202022-10-15%2003-08-28-557.jpg)

- Different router using the same endpoint is allowed, **resourse is the same** but we do different operations on him, so **only the method changes**, this is quite reasonable and modern approach.

# **_Middleware and Request Body_**

![Alt middleware](pic/bandicam%202022-10-15%2003-10-45-444.jpg)

- In **express**, we don't get the **object of the request body** directly from the client request, it have to go through the **middleware** process in the middle.

![Alt req.body test](pic/bandicam%202022-10-15%2003-13-02-879.jpg)

![Alt postman send post](pic/bandicam%202022-10-15%2003-17-59-624.jpg)

- Note that the postman here writes **JSON** instead of Object, so the key must be enclosed in **double quotes**.

![Alt get done](pic/bandicam%202022-10-15%2003-18-34-336.jpg)

![Alt console req.body](pic/bandicam%202022-10-15%2003-20-30-235.jpg)

- What we see in the console is already an **Object** instead of a JSON, because the JSON presented in the console will only be a set of strings.
  - so there is a conversion process in between, and this process is **middleware**.

## **Test to see if work without middleware**

![Alt comment middleware](pic/bandicam%202022-10-15%2003-21-51-959.jpg)

![Alt postman send again](pic/bandicam%202022-10-15%2003-22-40-312.jpg)

![Alt console undefine](pic/bandicam%202022-10-15%2003-23-32-811.jpg)

![Alt recover middleware](pic/bandicam%202022-10-15%2003-24-21-771.jpg)

# **_Create New ID_**

![Alt clear router and plan](pic/bandicam%202022-10-15%2003-29-09-499.jpg)

> When Client sends a POST request, it means that it wants to add a new resource to the database on the server side, usually the server is responsible for generating the new id.

![Alt create id and add into req.body](pic/bandicam%202022-10-15%2003-35-35-331.jpg)

- We can also write the new id into the reuqest body directly with
  `req.body.id = tours[tours.length - 1].id + 1;`
  but this is a worse way because it mutant the variable.

# **_Create New All Tours & Write it to File_**

![Alt create new all tours and write file](pic/bandicam%202022-10-15%2003-51-49-429.jpg)

- The lecture movie uses `tours.push(newTour)` method to update the original all tours data. But it will mutant data, so I use another way.
- Note that the data we **write to the .js file** can only be a **JSON string**, however, the data **sent to the Client** is a **JSON object** (which is converted to JSON by method 'json' in the transfer), and this is where it gets confusing.

![Alt JSend](pic/bandicam%202022-10-15%2004-01-24-006.jpg)

- Note that the key under the data property in JSend represents what 'resource' we want to send.
  - so we use 'tour' but not 'tours' here.

![Alt postman send](pic/bandicam%202022-10-15%2004-03-41-760.jpg)

![Alt check .js file](pic/bandicam%202022-10-15%2004-04-21-318.jpg)

# **_The Reason GET all tours having newest Tour_**

![Alt postman GET check](pic/bandicam%202022-10-15%2004-06-45-570.jpg)

![Alt reason why can get new tour](pic/bandicam%202022-10-15%2004-10-01-237.jpg)

- This side is because there is **nodemon** automatic update system, the Client side can get **real-time update information**, but if the official online can not use nodemon? How to solve this problem?
