---
title: Console
description: Console SDK Examples
position: 10
slug: console
---

# Console

Logging to the console does not require the `console` module since the console variable is global. 
It can be used anywhere within your code. You can log your message in several different categories.

> **iOS Speicifics:** On iOS the logging is enabled only in debug and will not work in release.

## Basics

Common log operations through the `console`.
```JavaScript
console.log("NativeScript Playground!");
console.log({ objProp: "I am Object!" });
console.info("NativeScript Rocks!");
console.warn("Low memory");
console.error("Uncaught Application Exception");
```

Measuring time intervals with `time` and `timeEnd` methods.
```JavaScript
// Begins counting a time span for a given name (key).
console.time("LoadTime");
// Ends a previously started time span through the time method.
console.timeEnd("LoadTime");
```

Printing the stack trace through the `trace` method.
<snippet id='console-trace'>

[Improve this document](undefined/edit/master/app/console/basics/article.md)

[Demo Source](undefined/edit/master/app/console/basics)

---



