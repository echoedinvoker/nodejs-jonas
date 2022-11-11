## **method aggregate**

![Alt copy paste](pic/bandicam%202022-11-11%2022-19-57-832.jpg)

## **MongoDB document**

![Alt google](pic/bandicam%202022-11-11%2022-22-15-590.jpg)

### _operator_

![Alt operator doc](pic/bandicam%202022-11-11%2022-24-12-671.jpg)

### _stage_

![Alt stage doc](pic/bandicam%202022-11-11%2022-25-35-496.jpg)

## **Stage $match**

![Alt $match](pic/bandicam%202022-11-11%2022-32-48-476.jpg)

## **Stage $group**

![Alt $group](pic/bandicam%202022-11-11%2022-40-05-783.jpg)

### _create route and test_

![Alt route](pic/bandicam%202022-11-11%2022-42-04-145.jpg)

![Alt test](pic/bandicam%202022-11-11%2022-43-21-651.jpg)

### _$sum_

![Alt $sum](pic/bandicam%202022-11-11%2022-49-11-861.jpg)

![Alt test](pic/bandicam%202022-11-11%2022-49-29-158.jpg)

### _group by specific field_

> We use \_id to specify a field for grouping, which is one of the main points of stage $group.

![Alt group by difficulty](pic/bandicam%202022-11-11%2022-51-06-125.jpg)

![Alt test](pic/bandicam%202022-11-11%2022-51-33-212.jpg)

### _$toUpper_

> Although the value of \_id represents the field used for grouping, it is possible to use the operator to do some string processing on them.

![Alt $toUpper](pic/bandicam%202022-11-11%2022-53-24-804.jpg)

![Alt test](pic/bandicam%202022-11-11%2022-55-40-799.jpg)

## **Stage $sort**

![Alt $sort](pic/bandicam%202022-11-11%2023-01-31-135.jpg)

![Alt test](pic/bandicam%202022-11-11%2023-02-08-097.jpg)

## **Repeat Stage**

![Alt 2nd $match](pic/bandicam%202022-11-11%2023-04-39-956.jpg)

- Used stage types can be reused.

![Alt test](pic/bandicam%202022-11-11%2023-05-41-098.jpg)

![Alt comment 2nd $match](pic/bandicam%202022-11-11%2023-06-20-443.jpg)

- This stage only proves that the same stage can be used repeatedly, but it has no real meaning, so we comment it out.
