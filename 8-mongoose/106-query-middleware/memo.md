## **Structure of Pre Find HOOK**

![Alt structure of pre find hook](pic/01.jpg)

- The difference in the types of Mongoose middleware is mainly due to the **event**.

## **Premium VIP Tours**

> Suppose we have some tours that are available to premium VIPs, so they exist in the database but are not allowed to be queried by the general public.

### _Set "secretTour" property of Schema_

![Alt set Schema of secretTour](pic/02.jpg)

### _Create New Document with true secretTour_

![Alt post a new doc with secretTour=true by Postman](pic/03.jpg)

- Create a VIP-only tour using Postman (secretTour=true).

### _Compare check it with MongoDB Website and Postman request_

![Alt check it in the MongoDB website](pic/04.jpg)

![Alt check other doc in the MongoDB website](pic/05.jpg)

- Looking directly at the MongoDB database content, only the tour that has just been created has a secretTour field, while the other tours do not.

![Alt Get all docs by Postman](pic/06.jpg)

- But if you use Postman to get the tour data, each tour has a secretTour field, because of the Mongoose Schema.

### _Fill in content of Pre Find HOOK_

![Alt fill in content of pre find hook](pic/07.jpg)

![Alt Get request for all tours, now only query out secretTour=false](pic/08.jpg)

- $ne: true actually means false, so before the controller's query is executed, this middleware will be set off and exclude any tours with secretTour=true.

## **Anaylyze Where/When Pre Find HOOK to work**

![Alt analyze where pre find hook start work in the controller](pic/09.jpg)

![Alt 10](pic/10.jpg)

- When (2) of the controller executes the query, the Query middleware in the model will be triggered by find event and executed first.

## **If I Want Query Middleware work on any kind of find**

![Alt Get for one doc by ID, still got doc with secretTour=true](pic/11.jpg)

- So you can find that event "find" will only be emitted if there is a Query.prototype.find.
  - findByID, findOne and etc are not work with event "find".

![Alt copy paste to create a new pre /^find/ hook](pic/12.jpg)

- We can use the regular expression to describe event, for example, the event in the above figure means all the events started by find.
  - It means that now findByID, findOne methods will also send an event to trigger the Query middleware before they are executed.

![Alt Get for on doc by ID again](pic/13.jpg)

## **Check Mongoose Documents**

![Alt Check mongoose documents](pic/14.jpg)

- We can see many Middleware event types in the official documentation in Mongoose.
  - Only a few parts of the course can be taught, but if you have further needs in the future, you must be able to read the official documents yourself.

## **Post Find HOOK**

![Alt post /^find/ hook, be care about docs parameter](pic/15.jpg)

- In fact, it is very similar to the Document middleware introduced in the previous lecture, the post does not have the keyword "this", but has one more parameter to indicate the query to the content (query object).

### _Practice: Recording Query Duration_

> Combining the pre and post methods of the Query middleware, we can use it to calculate the time spent on a query.

![Alt recording duration of query](pic/16.jpg)

- The object can be glued to any custom property at will, So we stick a property in the pre method to record the time point before the query.

![Alt send GET request by Postman](pic/17.jpg)

![Alt Check duration in the console](pic/18.jpg)
