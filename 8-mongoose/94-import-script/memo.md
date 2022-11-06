# **_Build An Independent Script to import/delete data from JSON file to MongoDB_**

## **PREPARE ENVIRONMENT**

![Alt create script and copy paste](pic/bandicam%202022-11-06%2011-08-10-022.jpg)

- We create a new JS script to import the data from the JSON file into MongoDB or to delete all the data from MongoDB.
  - This script is **not related** to our main program, we have to run it separately.
  - But you still have to connect to the same MongoDB and use the same parameters, so copy the required codes directly from server.js and paste them in.

![Alt modify](pic/bandicam%202022-11-06%2011-12-05-913.jpg)

### _Tour model_

![Alt review Tour model](pic/bandicam%202022-11-06%2011-14-01-057.jpg)

- We have already done the **Tour model** in the last lecture, it can **validate** the data and use the **mongoose methods**, so you can take it and use it in the script.

![Alt import Tour](pic/bandicam%202022-11-06%2011-15-11-734.jpg)

## **READ JSON FILE**

![Alt READ JSON FILE](pic/bandicam%202022-11-06%2011-22-13-245.jpg)

- Here we add codes for reading JSON files and test them, but there is a problem with the **environment variables import** part.

![Alt fix path problem](pic/bandicam%202022-11-06%2011-24-31-297.jpg)

- Because the **location** where the script is executed is already different from the location of server.js, some corrections need to be made.

## **First Function: IMPORT FILE INTO MONGODB**

![Alt frame of func](pic/bandicam%202022-11-06%2011-28-47-004.jpg)

- There are two main things to think about when accessing remote data:
  - Asynchronous
  - There will be a failure situation

![Alt finish content with mogoose method 'create'](pic/bandicam%202022-11-06%2011-31-41-427.jpg)

- **'create'** is a **Mongoose** method that writes to a connected MongoDB by passing in an **array of objects**.
  - **Tour model is wrapped with Mongoose**, so you can use all the methods of Mongoose directly.

## **Second Function: DELETE ALL DOCS IN MONGODB**

![Alt copy paste to new func](pic/bandicam%202022-11-06%2011-36-02-129.jpg)

- The same concept of **accessing a remote database**, so you can **copy and paste** directly from the previous function and make some **modify**.

## **Use COMMAND LINE ARGV to decide which func will be calling**

> Here, instead of calling the function directly in the script, we want to make it so that we can use the **command line argument** to determine which function to call.

![Alt command line argv check](pic/bandicam%202022-11-06%2011-40-33-193.jpg)

![Alt user input argv check](pic/bandicam%202022-11-06%2011-42-04-977.jpg)

![Alt if-statement to decide calling](pic/bandicam%202022-11-06%2011-45-43-846.jpg)

![Alt postman check](pic/bandicam%202022-11-06%2011-51-13-310.jpg)

## **PROCESS.EXIT to exit script**

![Alt process.exit()](pic/bandicam%202022-11-06%2011-53-50-815.jpg)

- Maybe because of the connection to MongoDB, even after all the instructions in our script are executed, it will not exit by itself.
  - But we can use **'process.exit()'** to force the script to exit.

## **ERROR: validation failed**

![Alt import but validation failed](pic/bandicam%202022-11-06%2011-55-51-159.jpg)

![Alt postman check again](pic/bandicam%202022-11-06%2011-57-03-231.jpg)

- Although it looks like the data is imported into MongoDB, there are some **validation failed** error messages.

### _figure out the problem_

![Alt testing doc](pic/bandicam%202022-11-06%2011-58-24-726.jpg)

- There are some **incomplete documents** in the JSON file that were previously added for **testing purposes**.
  - This is the reason for the **failed validation**, so let's get rid of it.

![Alt execute command again](pic/bandicam%202022-11-06%2011-59-53-358.jpg)
