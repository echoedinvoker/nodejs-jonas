# **_Import 3rd-Party Module_**

![Alt simple depency "slugify"](pic/bandicam%202022-10-03%2003-27-03-831.jpg)

- **simple/regular** dependencies(package) will be included in our code as mentioned before, so after install, we have to use **require** to import it in our module in order to use it's **value, function or object** in our module.

![Alt import 3rd party modules](pic/bandicam%202022-10-03%2003-30-48-712.jpg)

- There is a **convention** in the NodeJS module to import modules in the following order:
  1. build-in modules
  2. 3rd-party modules
  3. custom modules

# **_Website URL(Explain why we use SLUG)_**

![Alt meaningless id](pic/bandicam%202022-10-03%2003-36-07-255.jpg)

![Alt meaningful id(slug)](pic/bandicam%202022-10-03%2003-38-08-532.jpg)

- We will use slugify to generate slug from property of product data which has sufficient recognition to a string suitable as a url.

![Alt slug without parameter name](pic/bandicam%202022-10-03%2003-39-29-421.jpg)

- Because the slug itself has enough meaning, so the parameter name such as "id=" can actually be omitted.

# **_Create Slugs from Product Data_**

![Alt json file](pic/bandicam%202022-10-03%2003-44-36-699.jpg)

![Alt create slug(default)](pic/bandicam%202022-10-03%2003-45-40-569.jpg)

![Alt slug documents on npm website](pic/bandicam%202022-10-03%2003-41-10-494.jpg)

- To **learn to go to the npm website to look up the package documents**, which will save us a lot of time.

![Alt create slug(with options)](pic/bandicam%202022-10-03%2003-47-53-699.jpg)

- Because the topic of this lecture only teaches how to import third-party packages, the next operation of applying the slug to the router will not be implemented here.
  - But the process is almost similar to the **id** part, except that the **id is replaced by the slug**.
