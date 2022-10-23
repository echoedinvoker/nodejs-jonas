## **Create a document and Save**

![Alt create and save a new doc](pic/bandicam%202022-10-23%2011-01-49-032.jpg)

- Step 3 Create document is very similar to generating Instance from Class, but now is **generating document from Model**.
- Once the document is created it does not mean that it is already in the database, it must be saved to the database using its method **'save'**

## **Check Success Result**

![Alt console success](pic/bandicam%202022-10-23%2011-05-13-687.jpg)

![Alt check by compass](pic/bandicam%202022-10-23%2011-05-53-254.jpg)

## **Error from Schema option 'unique'**

![Alt restart an get err](pic/bandicam%202022-10-23%2011-09-09-941.jpg)

![Alt reason by codes](pic/bandicam%202022-10-23%2011-10-52-403.jpg)

## **Error from Schema option 'required'**

![Alt change and left only name field](pic/bandicam%202022-10-23%2011-12-03-283.jpg)

![Alt fix Schema option](pic/bandicam%202022-10-23%2011-16-07-503.jpg)

- The name of the Schema option **'required'** is mistyped...

![Alt  fix problem](pic/bandicam%202022-10-23%2011-20-02-130.jpg)

- After fixing the typo, the Schema option 'required' now emit errors properly.

## **Other tips**

![Alt edit doc again](pic/bandicam%202022-10-23%2011-24-17-003.jpg)

- It can be found that in the process of generating a document, only the defined field will be generated.
  - If you add an undefined field, there won't be any errors, it just won't exist in the document.
  - where 'A tour must have a price' is an error message in our own definition in Schema when 'require' is failed.
