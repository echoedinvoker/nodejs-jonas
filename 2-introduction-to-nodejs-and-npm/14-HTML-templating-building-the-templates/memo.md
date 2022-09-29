# **_Introduce WebPage(With Fixed Data)_**

![Alt overview.html](pic/bandicam%202022-09-29%2009-50-22-732.jpg)

![Alt overview page](pic/bandicam%202022-09-29%2009-50-32-779.jpg)

![Alt product.html](pic/bandicam%202022-09-29%2009-50-46-510.jpg)

![Alt product page](pic/bandicam%202022-09-29%2009-51-14-987.jpg)

# **_Replace Data with Placeholders in Product.html_**

![Alt product which data should be replace](pic/bandicam%202022-09-29%2009-53-19-613.jpg)

![Alt product json name and image](pic/bandicam%202022-09-29%2009-53-55-128.jpg)

![Alt product html description](pic/bandicam%202022-09-29%2009-55-51-626.jpg)

![Alt use %placehold% to replace fixed data](pic/bandicam%202022-09-29%2017-02-29-269.jpg)

![Alt json organic boolean](pic/bandicam%202022-09-29%2017-02-49-593.jpg)

![Alt product html add %placeholder% to style](pic/bandicam%202022-09-29%2017-06-35-655.jpg)

![Alt page organic](pic/bandicam%202022-09-29%2017-07-03-662.jpg)

# **_Split out Cards out of Overview.html_**

![Alt overview html cards](pic/bandicam%202022-09-29%2017-08-43-994.jpg)

- You can see that there are five figure.cards in div.container in overview.html which are in the same format but with different data, so I can just seperate it in a separate html.

![Alt create card template-card.html](pic/bandicam%202022-09-29%2017-10-56-584.jpg)

- Now build a figure.card dedicated html, inside as long as you write one figure.card on the good, nest lecture will cycle into the json data automatically generated multiple figure.card string and then brought back to overview.html.

![Alt replace cart html with %placeholder%](pic/bandicam%202022-09-29%2017-13-32-576.jpg)

# **_Replace Data with Placeholders in Template-Card.html_**

![Alt card html which data should be replaced](pic/bandicam%202022-09-29%2017-14-03-060.jpg)

![Alt  replace data with %placeholder%](pic/bandicam%202022-09-29%2017-19-28-708.jpg)

## **id - href**

![Alt json id](pic/bandicam%202022-09-29%2017-23-19-377.jpg)

![Alt replace href with %%](pic/bandicam%202022-09-29%2017-24-30-564.jpg)

# **_Change HTML file name_**

![Alt change html files name](pic/bandicam%202022-09-29%2017-25-51-308.jpg)

- It's just to identify the html that has replaced all the fixed data with the placeholder.
