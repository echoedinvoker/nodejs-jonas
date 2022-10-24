# **_Compare current Schema and Tour in tour-simple.json_**

![Alt analyze actual data](pic/bandicam%202022-10-24%2023-12-13-925.jpg)

- We currently have only three **fields** in the **Schema**, which is not complete yet.
  - We can check the tour data in **tours-simple.json** to know which **fields** are still missing in our **Schema**.

# **_Complete Schema Fields_**

## **add three required fields**

![Alt add three required field](pic/bandicam%202022-10-24%2023-14-55-810.jpg)

## **add two fields about ratings(average/quantity)**

![Alt two ratings](pic/bandicam%202022-10-24%2023-17-57-595.jpg)

- The values of these two fields will be automatically generated in the future by analyzing the resource 'reviews'.
  - For now, just use option **'default'** with fixed values.

## **add field discount, which is not required**

![Alt discount](pic/bandicam%202022-10-24%2023-19-55-284.jpg)

- Because the discount may not always be available, the option 'required' is not required.
- Only type is defined here, so there is no need to use object.

## **add field summary/description (trim)**

![Alt trim summary and description](pic/bandicam%202022-10-24%2023-24-16-256.jpg)

- The option **'trim'** is only available if the type is **String**.

![Alt add trim to name](pic/bandicam%202022-10-24%2023-25-01-113.jpg)

- **String** type fields are usually good for using the option **'trim: true'**.

## **add fields about image (Array)**

![Alt image](pic/bandicam%202022-10-24%2023-27-24-612.jpg)

- If the value is an **array**, it must be enclosed in **brackets**.
- We only save the **name of the image** in the DB, we don't actually save the image in.

## **add fields about Date (current/Array)**

![Alt Date](pic/bandicam%202022-10-24%2023-31-36-987.jpg)

- We can use the method directly in option **'default'** so that the value can be generated automatically.

# **_Clear Tour Collections and Import Tour from File system_**

## **Clear Tours in DB**

![Alt delete1](pic/bandicam%202022-10-24%2023-33-47-041.jpg)

![Alt delete2](pic/bandicam%202022-10-24%2023-34-00-754.jpg)

- The tours that were added to the database before are incomplete for testing, so delete them first.

## **Try to insert complete tour into DB**

![Alt add doc from data file by postman](pic/bandicam%202022-10-24%2023-37-36-018.jpg)

- success!
- Subsequent lectures will write some codes about importing tours from the json file into the database automatically.
  - So we don't need to import all tours now.
