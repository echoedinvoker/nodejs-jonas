# **_SIMPLE QUESTION FROM A CLIENT USER_**

![Alt client(browser)](pic/bandicam%202022-10-04%2003-18-33-525.jpg)

- What happens when a client user types a URL into the browser?
- Or what is happening in the process when we request data from an API?

# **_Model/Archetecture_**

![Alt request server](pic/bandicam%202022-10-04%2003-18-38-851.jpg)

![Alt response from server](pic/bandicam%202022-10-04%2003-18-44-521.jpg)

![Alt model/architecture](pic/bandicam%202022-10-04%2003-18-49-631.jpg)

- The above is the simplest way to explain, but without any details.

# **_URL AND REAL IP ADDRESS_**

![Alt url](pic/bandicam%202022-10-04%2003-18-55-688.jpg)

- **/map** is a resource, indicating what resources we want to obtain on the target site.
- **The domain name** is **not** the real address of the target website, it is just a name that is easy to remember.
- **HTTP/HTTPS** is the **protocol** that will be used when the request is sent.

![Alt dns](pic/bandicam%202022-10-04%2003-19-02-923.jpg)

- DNS stands for **Domain Name Server**.
- DNS is a special server, like a phone book on the internet.

![Alt url to dns](pic/bandicam%202022-10-04%2003-19-06-380.jpg)

![Alt get real ip address](pic/bandicam%202022-10-04%2003-19-08-786.jpg)

- When the client user enters the URL into browser, the first thing browser does is send a request to the DNS server to get target server's real IP address.

![Alt structure of ip address](pic/bandicam%202022-10-04%2003-19-14-017.jpg)

- A **port** is like a sub-address to identify a **specific service** on target server.
  - The port has **no relation** to the resource **/map** at all.

# **_CONNECTION BETWEEN CLIENT AND SERVER_**

![Alt TCP/IP](pic/bandicam%202022-10-04%2003-19-19-865.jpg)

- **TCP/IP** can be thought of as a connection between a client and a server.
- This connection will remain active **throughout the site's file transfer**.
- TCP/IP is a **communication protocol** that combines two protocols, **TCP** and **IP**, and defines the way data is transferred over the network.
  - **TCP** = Transmission Control Protocol
  - **IP** = Internet Protocol

# **_HTTP REQUEST_**

![Alt HTTP request](pic/bandicam%202022-10-04%2003-19-25-706.jpg)

- Like TCP/IP, **HTTP** is another **communication protocol**.
  - A **communication protocol** is a **rule** that allows two or more parties to communicate.
  - In this case, **HTTP protocol** is a rule that allows clients to communicate with web servers **by sending requests**.

![Alt structure of request](pic/bandicam%202022-10-04%2003-19-29-365.jpg)

![Alt start line](pic/bandicam%202022-10-04%2003-19-31-592.jpg)

- **HTTP methods**
  - **GET** - for simply requesting data
  - **POST** - for sending data
  - **PUT** & **PATCH** - for modifying data
- **request target** /map
  - represents the place in the server that we want to access.
  - The server receives the /map and then knows how to handle the request through the **router**.

![Alt HTTP request headers](pic/bandicam%202022-10-04%2003-19-39-336.jpg)

- The request headers are various messages about the request itself.

![Alt request body](pic/bandicam%202022-10-04%2003-19-42-408.jpg)

- **request body**, for example, an **HTML form**.
- The main difference between **HTTP** and **HTTPS** is that **HTTPS is encrypted using TLS or SSL**.
  - But the basic request and response logic of HTTP can also be applied to HTTPS.

# **_HTTP RESPONSE_**

![Alt HTTP response](pic/bandicam%202022-10-04%2003-19-49-734.jpg)

- After the client's request is sent to the server, the server will work until the website or API data is ready.
- then, the **HTTP response protocol** is created to send a response from the server to the client.
  - **HTTP response protocol** and **HTTP request protocol** are also **communication protocols**, but in opposite directions, and they communicate **by sending response**.

![Alt structure of response](pic/bandicam%202022-10-04%2003-19-51-975.jpg)

![Alt start line](pic/bandicam%202022-10-04%2003-19-54-372.jpg)

- The **status code** is used to let the client know whether its request was successful or not.
  - **200** means okay.
  - **404** means not found.

![Alt HTTP response headers](pic/bandicam%202022-10-04%2003-19-56-620.jpg)

- The **response headers** are a variety of information about the response itself.
  - As a back-end development engineer, we can set the content of the response headers ourselves.

![Alt response body](pic/bandicam%202022-10-04%2003-19-59-947.jpg)

- The **body** is usually used to carry HTML, JSON data, CSS, etc. The browser is used to create web pages with the required data or files.
  - The **res.end** we used in the previous lecture is used to send the content of the body.

# **_Assets for build a webpage_**

![Alt process repeated for each file](pic/bandicam%202022-10-04%2003-20-12-663.jpg)

- The browser on the client side will scan the **HTML** file after the above process to know all the **assets** needed to build the page.
  - These assets include **JavaScript, CSS files, image files or other**.
  - Each asset will go through the above process to get.
    - **Multiple** requests and responses can occur **at the same time**, but there is an **upper limit** to prevent the connection from **slowing down**.

# **_What really TCP/IP to do?_**

![Alt What is TCP protocol do](pic/bandicam%202022-10-04%2003-20-25-075.jpg)

- TCP works by **breaking** the request or response into thousands of **small chunks called packets**, which are then **reassembled** back after they reach their destination.
  - The purpose is to allow the original request or response to reach its destination as soon as possible.

![Alt What is IP protocol do](pic/bandicam%202022-10-04%2003-20-35-861.jpg)

- The job of the **IP protocol** is to actually **send** these chunked packets **over the internet** to their destination.
