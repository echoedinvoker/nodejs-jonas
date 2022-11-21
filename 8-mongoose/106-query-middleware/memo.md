## **Structure of Pre Find HOOK**

![Alt structure of pre find hook](pic/01.jpg)

## **Premium VIP Tours**

### _Set "secretTour" property of Schema_

![Alt set Schema of secretTour](pic/02.jpg)

### _Create New Document with true secretTour_

![Alt post a new doc with secretTour=true by Postman](pic/03.jpg)

### _Compare check it with MongoDB Website and Postman request_

![Alt check it in the MongoDB website](pic/04.jpg)

![Alt check other doc in the MongoDB website](pic/05.jpg)

![Alt Get all docs by Postman](pic/06.jpg)

### _Fill in content of Pre Find HOOK_

![Alt fill in content of pre find hook](pic/07.jpg)

![Alt Get request for all tours, now only query out secretTour=false](pic/08.jpg)

## **Anaylyze Where/When Pre Find HOOK to work**

![Alt analyze where pre find hook start work in the controller](pic/09.jpg)

![Alt 10](pic/10.jpg)

## **If I Want Query Middleware work on any kind of find**

![Alt Get for one doc by ID, still got doc with secretTour=true](pic/11.jpg)

![Alt copy paste to create a new pre /^find/ hook](pic/12.jpg)

![Alt Get for on doc by ID again](pic/13.jpg)

## **Check Mongoose Documents**

![Alt Check mongoose documents](pic/14.jpg)

## **Post Find HOOK**

![Alt post /^find/ hook, be care about docs parameter](pic/15.jpg)

### _Practice: Recording Query Duration_

![Alt recording duration of query](pic/16.jpg)

![Alt send GET request by Postman](pic/17.jpg)

![Alt Check duration in the console](pic/18.jpg)
