---
title: Http
description: Http SDK Examples
position: 19
slug: http
---

# Http

The HTTP module provides a functionality, which allows submitting GET and POST requests for both platforms (iOS and Android).
With its methods, we could request a data from a remote server and to represent the received response in different formats. We could request or send data with the following ways:

* `getString`
* `getJSON`
* `getImage`
* `getFile`
* `request`


```JavaScript
const httpModule = require("http");
```

* [Get](#get)
* [Post](#post)


## Get

The example demonstrates different ways, how we could receive content from a server while making HTTP GET request.

The `getString` method allows us to make a request and to get the response body as a string value.
```JavaScript
httpModule.getString("https://httpbin.org/get").then((r) => {
    viewModel.set("getStringResult", r);
}, (e) => {
});
```

The `getJSON` give us a simple way to get the response body as JSON object and to access the data while using all benefits of the JSON.
```JavaScript
httpModule.getJSON("https://httpbin.org/get").then((r) => {
}, (e) => {
});
```

`getImage` allow us to get an image from a specific URL. The returned object will be ImageSource and it could be used for direct displaying the source into Image view.
```JavaScript
httpModule.getImage("https://httpbin.org/image/jpeg").then((r) => {
    // getImage method returns ImageSource object
}, (e) => {
});
```

With `request` method we can make a request and check the response status code by accessing `statusCode` property.
```JavaScript
httpModule.request({
    url: "https://httpbin.org/get",
    method: "GET"
}).then((response) => {
    // Argument (response) is HttpResponse
}, (e) => {
});
```

The example demonstrates, how to get the request-response header and how to access the available data in it.
```JavaScript
httpModule.request({
    url: "https://httpbin.org/get",
    method: "GET"
}).then((response) => {
    // Argument (response) is HttpResponse
}, (e) => {
});
```
The example demonstrates, how to get the request-response content and how to represent the received data as a `String` value or `JSON` object. We could also use `toImage` method when we download an image.
```JavaScript
httpModule.request({
    url: "https://httpbin.org/get",
    method: "GET"
}).then((response) => {
    // Content property of the response is HttpContent
    // The toString method allows you to get the response body as string.
    const str = response.content.toString();
    // The toJSON method allows you to parse the received content to JSON object
    // var obj = response.content.toJSON();
    // The toImage method allows you to get the response body as ImageSource.
    // var img = response.content.toImage();
}, (e) => {
});
```


The example demonstrates how to download a file while using `getFile` method.
```JavaScript
httpModule.getFile("https://raw.githubusercontent.com/NativeScript/NativeScript/master/tests/app/logo.png").then((resultFile) => {
    // The returned result will be File object
}, (e) => {
});
```
> Note: By default the file will be saved in Documents folder.

In the `getFile` method we could also specify the path, where the file to be saved. This scenario is demonstrated in the example below, where the image file will be kept in the current application folder.
```JavaScript
const filePath = fileSystemModule.path.join(fileSystemModule.knownFolders.currentApp().path, "test.png");
httpModule.getFile("https://httpbin.org/image/png?testQuery=query&anotherParam=param", filePath).then((resultFile) => {
    // The returned result will be File object
}, (e) => {
});
```

[Improve this document](undefined/edit/master/app/http/get/article.md)

[Demo Source](undefined/edit/master/app/http/get)

---

## Post

The example demostrates, how to make HTTP POST request and how to get request response.

```JavaScript
httpModule.request({
    url: "https://httpbin.org/post",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    content: JSON.stringify({
        username: vm.get("user"),
        password: vm.get("pass")
    })
}).then((response) => {
    const result = response.content.toJSON();
}, (e) => {
});
```


[Improve this document](undefined/edit/master/app/http/post/article.md)

[Demo Source](undefined/edit/master/app/http/post)

---


**API Reference for the** [HTTP Class](http://docs.nativescript.org/api-reference/modules/_http_.html)


