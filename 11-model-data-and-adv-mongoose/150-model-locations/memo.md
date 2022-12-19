## **Nested Field(Object Type Property)**

> Let's start by defining an object type field, because the definition of embedding documents is just an extended version of the definition of object type field.

![Alt define Object field (nested properties)](pic/01.jpg)

- GeoJSON is a special Document Type in MongoDB, which is an Object type field, but as long as it contains 'type' and 'coordinates', it will be automatically recognized as GeoJSON by MongoDB.
- GeoJSON's Type has points, lines, rectangles, and even cubes, which allows our app has infinite possibilities of functionality.
  - But since we only use it as a travel location in this app, of course only the type "Point" can be used, and we use "enum" to make a restriction

## **Description of Embedding Documents**

![Alt Object field to Array field = embedding documents](pic/02.jpg)

- The definition of embedding documents must be an array of objects.
  - The object part is defined in the same way as "startLocation" above.
- So embedding documents we do not need to create a new collection in MongoDB, nor do we need to create a new model in the app.

## **Renew Data in the MongoDB**

> Because the previous tours data we imported into MongoDB did not have the "startLocation" and "locations" fields, we had to delete the original data and use another, more detailed, tours data to import into MongoDB.

### _more details, tours data_

![Alt tours data with more details](pic/03.jpg)

### _delete tours data from MongoDB and import new tours data_

> We wrote a script for delete or import data to MongoDB at the beginning of the course, so now you can use it directly for operations.

![Alt change tours-simple.json to tours.json](pic/04.jpg)

![Alt delete simple tours from mongoDB](pic/05.jpg)

![Alt import tours to mongoDB](pic/06.jpg)

## **Check Tours Document in the MongoDB**

### _startLocation and locations_

![Alt check mongoDB documents](pic/07.jpg)

- Simply put, wrapping the objects in the object field into an array using middle brackets is the embedding documents definition.

### _startLocation_

![Alt check mongoDB documents2](pic/08.jpg)

### _locations_

![Alt check mongoDB documents3](pic/09.jpg)

![Alt undefined](pic/10.jpg)
