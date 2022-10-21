## **Install ESlint**

![Alt install ESlint](pic/bandicam%202022-10-21%2019-33-41-379.jpg)

- **ESLint** is a program that constantly checks our code for code compliance.

![Alt npm i](pic/bandicam%202022-10-21%2019-38-07-148.jpg)

- The reason we install so many packages at once is that in addition to installing ESlint...
  - Code format automation must be **Prettier-based**, ESlint only generates warn or error messages.
  - Add some **nodeJS-specific** coding format rules.
  - ESlint has many coding format styles, we choose the most popular **airbnb** style.
    - last three packages are dependencies of airbnb.

## **ESlint Configuration**

### _Configuration file for ESlint_

![Alt .eslintrc.json](pic/bandicam%202022-10-21%2019-39-20-348.jpg)

- This file is a configuration file for ESlint, copied directly from the lecture attachment.
  - **"extends"** is coding guides we use.
  - **"rules"** - ESlint is all about coding rules, and we can change them one by one.

### _Check Rules on the ESlint Official Website_

![Alt google eslint](pic/bandicam%202022-10-21%2019-39-48-388.jpg)

![Alt docs](pic/bandicam%202022-10-21%2019-40-13-691.jpg)

![Alt rules](pic/bandicam%202022-10-21%2019-40-29-077.jpg)

![Alt rules page](pic/bandicam%202022-10-21%2019-40-44-339.jpg)

## **Let ESlint Work**

![Alt eslint work](pic/bandicam%202022-10-21%2019-43-55-915.jpg)

![Alt check error and warn](pic/bandicam%202022-10-21%2019-48-18-031.jpg)

![Alt fix error and warn](pic/bandicam%202022-10-21%2019-52-56-509.jpg)

## **About Future Project Installation**

![Alt new project](pic/bandicam%202022-10-21%2019-54-14-874.jpg)

- So in the future we don't need to type a bunch of package names when we have a new project.
