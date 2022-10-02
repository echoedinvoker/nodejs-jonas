# **_Simple/Regular vs Development Dependencies_**

## **Install Simple/Regular dependency**

![Alt install dependency](pic/bandicam%202022-10-03%2000-57-10-535.jpg)

- **slugify** is a package that makes the URL of a web page more meaningful.
  - We will use it in the next lecture.
- Our project must be built according to the slugify code.
  - This means that **the code in production will also contain the slugify part**.
- Install simple dependency as shown above, you **don't need to add any parameters**, just run the command in the root directory of the project.

## **Install Development dependency**

![Alt install dev-dependency](pic/bandicam%202022-10-03%2000-59-20-311.jpg)

- When we start a project with node command, if any file changes, we must stop the project before starting it. This is actually very inconvenient.
  - We can solve this problem by using the package **nodeman**, which will help us to **restart the project automatically when the files in the project have changed**.
- Development dependency only helps us when we are developing.
  - So it is not needed for production, and **the code used in production does not contain any parts about development dependencies**.
- When installing the development dependency, you must use the **--save-dev** parameter to let npm know that we are installing the development dependency.

## **Local modules**

![Alt why so many modules](pic/bandicam%202022-10-03%2001-00-16-783.jpg)

- The dependencies installed by the above two methods are stored in the project's local **node_modules** folder.
- Because the dependency itself will also have dependencies and will be installed together, you will see a lot of modules in node_modules.

# **_Global Install_**

> The above installation methods are **for a single project**, so if you create a new project, you must also manually install nodemon once, which is very troublesome.

![Alt global install and permission issue](pic/bandicam%202022-10-03%2001-03-33-985.jpg)

- **Global** install means that npm will install the package in **places other than the project**, so that all projects can use it.
  - As you can see above, npm wants to install the package under **/usr/**, so there is a **permission issue**.
- Another advantage of using global install is that you don't need to go through the **script**, you can use the package command **directly in the console**.

![Alt global install with sudo](pic/bandicam%202022-10-03%2001-04-05-591.jpg)

![Alt use nodemon to start project](pic/bandicam%202022-10-03%2001-07-22-738.jpg)

![Alt try auto restart](pic/bandicam%202022-10-03%2001-08-34-972.jpg)

# **_Use Local Nodemon_**

![Alt script](pic/bandicam%202022-10-03%2001-25-15-259.jpg)

- If you are using local install, you must run the command via **script** as above.

![Alt omit run](pic/bandicam%202022-10-03%2001-16-10-442.jpg)
