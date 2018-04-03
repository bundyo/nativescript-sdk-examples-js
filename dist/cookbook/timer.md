---
title: Timer
description: Timer SDK Examples
position: 43
slug: timer
---

# Timer

The methods propvided by timer module allows execution of code fragment at specific time interval.
Methods:
* `setTimeout`
* `setInterval`

```JavaScript
const timerModule = require("tns-core-modules/timer");
```

* [Interval](#interval)
* [Timeout](#timeout)


## Interval

Timer method `setInterval` can be used to apply recurring action on given interval in miliseconds

```JavaScript
id = timerModule.setInterval(() => {
    const randNumber = Math.floor(Math.random() * (color.length));
    vm.set("buttoncolor", color[randNumber]);
}, 1000);
```

[Improve this document](undefined/edit/master/app/timer/interval/article.md)

[Demo Source](undefined/edit/master/app/timer/interval)

---

## Timeout

Timer method `setTimeout` can be used to delay the execution of an action in miliseconds.

```JavaScript
setTimeout(() => {
    vm.set("counter", counter--);
    button.backgroundColor = new Color("#30BCFF");
}, 1000);
```


[Improve this document](undefined/edit/master/app/timer/timeout/article.md)

[Demo Source](undefined/edit/master/app/timer/timeout)

---


**API Reference for the** [Timer Class](https://docs.nativescript.org/api-reference/modules/_timer_.html)


