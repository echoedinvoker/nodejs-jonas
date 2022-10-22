![Alt basic schema](pic/bandicam%202022-10-23%2002-26-41-997.jpg)

- The **schema** is mainly used to define the **type** of the value of each field in each of our documents.
  - So the above example is the most basic schema.

![Alt object value](pic/bandicam%202022-10-23%2002-29-56-877.jpg)

- However, in addition to the type, there are many other **options** that can be defined, but need to using the **object** in this situation.

![Alt require with error msg](pic/bandicam%202022-10-23%2002-31-47-322.jpg)

- In the **'require'** option we can even define what **error message** should appear when the field is not provided.
  - but value of 'require' have to use **array** in this situation.

![Alt more option](pic/bandicam%202022-10-23%2002-34-48-564.jpg)

- More commonly used options are shown above.

![Alt model](pic/bandicam%202022-10-23%2002-38-08-936.jpg)

- After the schema is set up, you must use **mongoose.model to wrap it into a model** so that you can use model to do **CRUD** operations with the database.
