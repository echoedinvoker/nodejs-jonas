# **_Recall Previous Product page'n code_**

![Alt previos product router code](pic/bandicam%202022-10-02%2000-53-37-940.jpg)

![Alt previous prodect page](pic/bandicam%202022-10-02%2000-54-41-966.jpg)

![Alt press detail link](pic/bandicam%202022-10-02%2000-55-27-360.jpg)

![Alt page not found](pic/bandicam%202022-10-02%2000-55-58-745.jpg)

- In the previous lecture, we could not extract the product data we wanted from the data because we could not resolve the url, so we did not use real data instead of placeholders on the product page.

# **_Analyze url.parse_**

![Alt before and after url.parse](pic/bandicam%202022-10-02%2000-58-34-341.jpg)

![Alt reload page](pic/bandicam%202022-10-02%2000-59-03-092.jpg)

![Alt terminal result](pic/bandicam%202022-10-02%2001-01-11-088.jpg)

![Alt turn query to object](pic/bandicam%202022-10-02%2001-01-59-678.jpg)

![Alt object query](pic/bandicam%202022-10-02%2001-02-41-071.jpg)

# **_Use url.parse to re-write Product page_**

![Alt destructure object](pic/bandicam%202022-10-02%2001-16-06-517.jpg)

- Another approach is to replace all "pathName" with "pathname", so that the pathname in the destructure doesn't need to have alias "pathName".

![Alt re-write product router](pic/bandicam%202022-10-02%2001-19-05-674.jpg)

![Alt reload product page again](pic/bandicam%202022-10-02%2001-19-49-561.jpg)

# **_Back button_**

![Alt back button no work](pic/bandicam%202022-10-02%2001-20-09-494.jpg)

![Alt figure out problem](pic/bandicam%202022-10-02%2001-21-57-745.jpg)

![Alt fix it](pic/bandicam%202022-10-02%2001-22-32-856.jpg)

- Note that **router** is used here, it has no relation to folder or file name at all.
