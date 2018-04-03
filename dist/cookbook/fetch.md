---
title: Fetch
description: Fetch SDK Examples
position: 13
slug: fetch
---

# Fetch

The Fetch module allows submitting GET and POST requests to a remote server. The module provides functionality for handling content with different formats(String values, JSON objects, FormData content).


* [Get](#get)
* [Post](#post)


## Get

The example demonstrates different ways, how we could receive content from a server while making HTTP GET request.

Get requests response body as a string value.
```JavaScript
fetch("https://httpbin.org/get")
.then((response) => {
    return response.text();
})
.then((r) => {
    viewModel.set("getStringResult", r);
}).catch((e) => {
});
```

Get JSON object response and to access the available data in it.
```JavaScript
fetch("https://httpbin.org/get")
.then((response) => {
    return response.json();
})
.then((r) => {
}).catch((e) => {
});
```

Get the fetch result as a FormData.
```JavaScript
fetch("https://httpbin.org/get")
.then((result) => {
    return result.formData();
})
.then((response) => {
})
.catch((e) => {
});
```

With `fetch` we can make a request and check the response status code by accessing `status` property.
```JavaScript
fetch("https://httpbin.org/get").then((response) => {
}).catch((e) => {
});
```

The example demonstrates, how to get the request-response header and how to access the available data in it.
```JavaScript
fetch("https://httpbin.org/get")
.then((r) => {
    return r.json();
})
.then((response) => {
}).catch((e) => {
});
```

[Improve this document](undefined/edit/master/app/fetch/get/article.md)

[Demo Source](undefined/edit/master/app/fetch/get)

---

## Post

The example shows how to create POST request while using NativeScript fetch.

```JavaScript
fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        username: vm.get("user"),
        password: vm.get("pass")
    })
})
.then((r) => {
    return r.json();
})
.then((response) => {
    const result = response.json;
})
.catch((e) => {
});
```


[Improve this document](undefined/edit/master/app/fetch/post/article.md)

[Demo Source](undefined/edit/master/app/fetch/post)

---




