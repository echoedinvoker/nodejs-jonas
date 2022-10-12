# **_EventEmitter_**

## **Emit Custom Event and Set Listener**

![Alt require events module](pic/bandicam%202022-10-12%2009-33-55-450.jpg)

![Alt get instance](pic/bandicam%202022-10-12%2009-35-27-245.jpg)

![Alt emit custom event](pic/bandicam%202022-10-12%2009-37-30-259.jpg)

![Alt set listener](pic/bandicam%202022-10-12%2009-40-56-653.jpg)

## **Multiple Listeners on the same event**

![Alt multiple listener](pic/bandicam%202022-10-12%2009-42-38-653.jpg)

![Alt run js](pic/bandicam%202022-10-12%2009-43-42-509.jpg)

## **Emit Event with Args**

![Alt emit event with args](pic/bandicam%202022-10-12%2009-48-10-062.jpg)

## **Use EventEmitter in Real Life**

![Alt  create class extends EventEmitter](pic/bandicam%202022-10-12%2009-54-23-500.jpg)

- Usually the **EventEmitter** is not used directly, but rather create a **Class to inherit it**.
  - There are many build-in core modules that do the same thing, such as the **http module** described below.

# **_HTTP module_**

> NodeJS has many **core built-in modules** with classes that **inherit from EventEmitter**, we'll use the **http module** as an example.

![Alt create http module instance](pic/bandicam%202022-10-12%2013-13-12-669.jpg)

- Note that http does not create instances by **new** keyword, but has its own **method** to do this.

![Alt on and listen](pic/bandicam%202022-10-12%2013-21-05-019.jpg)

- You can find that the set listener approach is directly inherited from the **EventEmitter**, but the emit event part of the http module has its own unique way.

![Alt start server](pic/bandicam%202022-10-12%2013-22-15-673.jpg)

![Alt sent request from browser](pic/bandicam%202022-10-12%2013-23-02-392.jpg)

## **Wierd Thing Happen!**

### _Log Twice??_

![Alt twice logs](pic/bandicam%202022-10-12%2013-23-49-927.jpg)

### _Event "Close" not Trigger Callback??_

![Alt stop server](pic/bandicam%202022-10-12%2013-26-14-524.jpg)

## **Try to Clarify Problem**

![Alt req-url](pic/bandicam%202022-10-12%2013-27-25-367.jpg)

![Alt reload page](pic/bandicam%202022-10-12%2013-27-34-598.jpg)

![Alt req favicon](pic/bandicam%202022-10-12%2013-29-11-664.jpg)

- Because the browser will automatically more **request favicon**.
