# **_Analyze custom function in index.js_**

![Alt module and func](pic/bandicam%202022-10-02%2002-55-46-351.jpg)

- Every JS file in NodeJS is treated as a module by it, even the main one.
- In the main JS, if you also define the function, it makes the code of the module too long.
  - So we usually move the work of define funtion to other modules.
    - This way the function can also be easily used by various modules.

# **_Create custom module_**

![Alt js for func](pic/bandicam%202022-10-02%2002-58-05-448.jpg)

- We directly create a JS to define the replaceTemplate function.
  - JS file names use the function name directly, so we can see it at a glance when we look at the file directory.
    - Of course, this is only a convention, not a principle that must be observed.
  - Use a folder to wrap it up so that the file directory is more clearly organized.
    - This is also a convention, you can have your own way.

# **_Export custom module_**

![Alt export func](pic/bandicam%202022-10-02%2003-00-28-870.jpg)

![Alt anonymous func in export](pic/bandicam%202022-10-02%2003-01-47-753.jpg)

- We delete the name of the function and leave only the value, and then assign it directly to the property "exports" of the object "module".
  - So this is a anonymous function in export module because it has no name.

# **_Import custom module_**

![Alt import func](pic/bandicam%202022-10-02%2003-05-57-532.jpg)

- Just like import build-in module, we use require to import custom module.
  - But in convention, we usually import custom module after build-in modules.
- We assign the imported function to a variable for ease of use, and this is also an action to name the function.

![Alt check website](pic/bandicam%202022-10-02%2003-07-21-150.jpg)
