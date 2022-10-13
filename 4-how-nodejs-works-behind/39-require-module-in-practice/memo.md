# **_Module Wrapper_**

## **prove that wrapper is exist**

![Alt arguments](pic/bandicam%202022-10-13%2012-09-40-882.jpg)

![Alt log of arguments](pic/bandicam%202022-10-13%2012-12-56-642.jpg)

- **arguments** have content, which proves that the codes we wrote here are indeed **wrapped in a function**.

## **show off wrapper**

![Alt wrapper](pic/bandicam%202022-10-13%2012-15-13-134.jpg)

- The codes we write are wrapped by the function template above.

# **_Exporting data 1: module.exports_**

![Alt module1](pic/bandicam%202022-10-13%2012-20-07-830.jpg)

![Alt require module1](pic/bandicam%202022-10-13%2012-23-10-664.jpg)

- So it means that when we use require, we just get the value of the class, but the name of the class is not passed on.

![Alt use module1](pic/bandicam%202022-10-13%2012-27-07-240.jpg)

## **Remove useless Intermediate Process**

![Alt useless class name](pic/bandicam%202022-10-13%2012-29-02-979.jpg)

![Alt directly assign](pic/bandicam%202022-10-13%2012-30-00-459.jpg)

# **_Exporting data 2: Object exports_**

![Alt module 2](pic/bandicam%202022-10-13%2012-33-14-658.jpg)

![Alt require module2](pic/bandicam%202022-10-13%2012-35-34-955.jpg)

![Alt use module2 properties](pic/bandicam%202022-10-13%2012-37-18-083.jpg)

## **Destructure**

![Alt destructure module2](pic/bandicam%202022-10-13%2012-39-58-394.jpg)

- We can select only the properties we want to assign to the variables seperatly.
- In this way, you don't need to write the name space variable later in the code, but write the property name only, which can save a lot of code.

# **_Cache_**

![Alt module3](pic/bandicam%202022-10-13%2012-43-45-563.jpg)

![Alt prove cache](pic/bandicam%202022-10-13%2012-47-41-325.jpg)

- The above proves that when we repeatedly require the same module, **only the first time will load it**, after that it will be **retrieved directly from the cache**.
