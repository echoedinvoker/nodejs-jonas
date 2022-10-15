![Alt basic frame of patch router](pic/bandicam%202022-10-16%2004-27-43-940.jpg)

- There are two ways to update, the lector prefers to use **patch** because it only needs to provide the **properties** to be updated instead of the whole object.

![Alt check with console](pic/bandicam%202022-10-16%2004-01-34-122.jpg)

![Alt postman with param id and body update properties](pic/bandicam%202022-10-16%2004-03-39-958.jpg)

- Here we have a part of the body that even adds **property that does not exist**, which is allowed if no special restrictions are placed on it.

![Alt console result](pic/bandicam%202022-10-16%2004-03-58-484.jpg)

![Alt write updated tour directly](pic/bandicam%202022-10-16%2004-09-30-931.jpg)

- We can use **Object.assign** to easily merge different Objects, which is very suitable for this case.
  - Object.assign can have many Object parameters, but note that its logic is that the **later parameters update the previous results**.
    - So the **original tour object has to be placed in front of req.body**, and this order cannot be reversed.

![Alt postman send again](pic/bandicam%202022-10-16%2004-13-10-614.jpg)

- We can find that it remains to write the updated tour data to the server file, but in reality we don't use the file as a database, so we won't do this part.
  - Because files are not partially updated like real databases, using files for patching will lose the meaning of patching.

## **Validation of Param ID**

![Alt add guard clause for invalid param](pic/bandicam%202022-10-16%2004-23-47-643.jpg)

- As in the previous lecture about getting specific tour, **validation** is required as long as the **user input** is concerned.
