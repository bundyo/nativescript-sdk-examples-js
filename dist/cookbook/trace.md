---
title: Trace
description: Trace SDK Examples
position: 44
slug: trace
---

# Trace

Tracing is the process of logging diagnostic information about your application at runtime. This module is useful for debugging, which could provide detailed info about internal workings.
```JavaScript
const traceModule = require("tns-core-modules/trace");
```

* [Custom Trace Writer](#custom-trace-writer)
* [Trace Specific Categories](#trace-specific-categories)


## Custom Trace Writer

The example shows how to create custom writer and to attached it to the tracing categories.

Create custom writer
```JavaScript
const array = new ObservableArray();
const TimestampConsoleWriter = (() => {

    function TimestampConsoleWriter() { }
    TimestampConsoleWriter.prototype.write = function (message, category, type) {
      if (!console) {
        return;
      }

      const msgType = types.isUndefined(type) ? traceModule.messageType.log : type;

      switch (msgType) {
        case traceModule.messageType.log:
            array.push({
                "messageType": "log",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case traceModule.messageType.info:
            array.push({
                "messageType": "info",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case traceModule.messageType.warn:
            array.push({
                "messageType": "warning",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        case traceModule.messageType.error:
            array.push({
                "messageType": "error",
                "date": new Date().toISOString(),
                "message": message,
                "category": category
            });
          break;
        default:
          break;
      }
    };

    return TimestampConsoleWriter;
  })();
```

Adding custom trace writer
```JavaScript
traceModule.setCategories(traceModule.categories.Navigation);
traceModule.enable();
traceModule.clearWriters();
traceModule.addWriter(new TimestampConsoleWriter());
```

[Improve this document](undefined/edit/master/app/trace/custom-trace-writer/article.md)

[Demo Source](undefined/edit/master/app/trace/custom-trace-writer)

---

## Trace Specific Categories

In this example is demonstrated, how to trace a specific set of event categories, how to add new tracing category and to disable the tracing process at all.

Tracing specific categories of events

```JavaScript
traceModule.setCategories(traceModule.categories.concat(
    traceModule.categories.Binding,
    traceModule.categories.Layout,
    traceModule.categories.Style,
    traceModule.categories.ViewHierarchy,
    traceModule.categories.VisualTreeEvents
));
traceModule.enable();
```

Trace add category

```JavaScript
traceModule.addCategories(traceModule.categories.Navigation);
```

Check is category setting

```JavaScript
if (traceModule.isCategorySet(traceModule.categories.VisualTreeEvents)) {
    dialogs.alert("VisualTreeEvents category has been set")
    .then(() => {
        console.log("Dialog closed!");
    });
} else {
    dialogs.alert("VisualTreeEvents category has not been set")
    .then(() => {
        console.log("Dialog closed!");
    });
}
```

Disable tracing

```JavaScript
traceModule.disable();
```


[Improve this document](undefined/edit/master/app/trace/trace-specific-categories/article.md)

[Demo Source](undefined/edit/master/app/trace/trace-specific-categories)

---


**API Reference for the** [Trace Class](https://docs.nativescript.org/api-reference/modules/_trace_.html)


