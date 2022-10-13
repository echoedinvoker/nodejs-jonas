![Alt treat js as seperate module](pic/bandicam%202022-10-13%2009-01-36-760.jpg)

- importing module by using **require** function and **exporting** data from modules is fundamentals of **CommonJS module system**.

![Alt commonJS sys](pic/bandicam%202022-10-13%2009-01-44-856.jpg)

- **NodeJS** uses the **CommonJS module system** to manage modules because this system is particularly suitable for the **server**.

![Alt .mjs](pic/bandicam%202022-10-13%2009-01-55-404.jpg)

- Another system, the **ES moduls system**, is provided by the **front-end browser**.
- There have been attempts to use it in **NodeJS**, if you see the **.mjs** file, but it's not popular.

![Alt where 'require' from?](pic/bandicam%202022-10-13%2009-02-02-003.jpg)

- **require** is not actually a standard NodeJS function, so where does it come from?

![Alt all steps](pic/bandicam%202022-10-13%2009-02-18-330.jpg)

- When we call **require** function, these steps will be executed underneath.

![Alt resolving&loading detail logic](pic/bandicam%202022-10-13%2009-02-28-207.jpg)

- If the module is not found after the above steps, an error will be thrown and the app will stop running.

![Alt intro of IIFE parameters](pic/bandicam%202022-10-13%2009-03-07-810.jpg)

- After the module is loaded, the code of the module will be wrapped in an **IIFE** function.
  - It will allow us to access some special objects.
    - The **object module** is not just a reference to the current module, but more importantly, we need to use it to **export data**.
      - We will also use another **object export** to handle the work of **exporting data**.
  - This is also the reason that we can use the **require** function.
  - So NodeJS will never run the code we write in the JS file directly.
    - The advantage of this is that **our codes will never leak to the global scope**.

![Alt execute](pic/bandicam%202022-10-13%2009-03-20-033.jpg)

- Simply run codes in the IIFE.

![Alt returning exports](pic/bandicam%202022-10-13%2009-03-25-525.jpg)

- return of require function is **object exports** of require module(argument of require function).
  - These **exports** are stored in the **module.exports** in the require module.

![Alt tow uses](pic/bandicam%202022-10-13%2009-03-34-418.jpg)

- So when we want to export data from the module, there are two ways:
  - simply use **object exports**.
  - write variable which we want to export directly into **module.exports**.

![Alt data from one module to another](pic/bandicam%202022-10-13%2009-03-41-738.jpg)

- As a NodeJS developer, it is important to know which approach to use when exporting data.
  - If you want to **export a single variable**, such as an object or a function, it is best to assign the variable directly to **module.exports**.
  - If you want to **export multiple named variables**, better use **object exports**.

![Alt caching](pic/bandicam%202022-10-13%2009-03-48-508.jpg)

- modules are actually **cached** after the first time they are loaded.
  - so if you require same module multiple times, they are **only executed at first time**, and you will get same result every times you require.
