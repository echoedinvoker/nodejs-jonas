## **Recall memory about Aggregation**

![Alt aggr in controller](pic/01.jpg)

![Alt send request by P](pic/02.jpg)

- The above diagram means that we want to remember the tour quantity of each difficulty a little bit, so that after adding aggregation middleware, we can infer whether it is effective by observing whether the quantity has changed or not.

## **Intro Aggregation Middleware and Print Pipeline in the console**

![Alt test aggr middleware by console](pic/03.jpg)

![Alt send request by P](pic/04.jpg)

![Alt pipeline in the console](pic/05.jpg)

## **Unshift New Stage into Pipeline by Aggregation Middleware**

![Alt unshift stage](pic/06.jpg)

![Alt new result](pic/07.jpg)

- Because of the aggregation middleware, the data with secretTour=true will be filtered out before using aggregation now.

![Alt two match stages](pic/08.jpg)

## **How about .post and model middleware**

- These two have little meaning, so there is no teaching.
