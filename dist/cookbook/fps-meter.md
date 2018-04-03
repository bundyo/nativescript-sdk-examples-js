---
title: Fps Meter
description: Fps Meter SDK Examples
position: 16
slug: fps-meter
---

# Fps Meter

"fps-meter" module allows to logging frames-per-second statistics for the app.

```JavaScript
const fpsMeter = require("tns-core-modules/fps-meter");
```


## Basics

The example demonstrates how the `fps-meter` could be required and how to access the data provided by the module.

Add Callback method and start logging
```JavaScript
callbackId = fpsMeter.addCallback((fps, minFps) => {
        vm.set("fps", fps.toFixed(2));
        vm.set("minfps", minFps.toFixed(2));
});

fpsMeter.start();
```

Remove Callback method and stop logging
```JavaScript
fpsMeter.removeCallback(callbackId);
fpsMeter.stop();
```

[Improve this document](undefined/edit/master/app/fps-meter/basics/article.md)

[Demo Source](undefined/edit/master/app/fps-meter/basics)

---


**API Reference for the** [FPS Meter Class](https://docs.nativescript.org/api-reference/modules/_fps_meter_.html)


