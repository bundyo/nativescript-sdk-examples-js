---
title: Application
description: Application SDK Examples
position: 4
slug: application
---

# Application

The Application module provides abstraction over the platform-specific Application implementations. 
The module lets you manage the lifecycle of your NativeScript applications from starting the application 
to handling application events and creating platform-specific logic.

* [Application Events](#application-events)
* [Check Platform](#check-platform)
* [Android Broadcast Receiver](#Aandroid-broadcast-receiver)
* [iOS Notification Observer](#ios-notification-observer)

The pre-required `application` module is used throughout the following code snippets.

<snippet id='application-import-ts'/>

## Android Broadcast Receiver


Registering a Broadcast Receiver (Android) to check the device's battery life. 
The example also demonstrates how to access the native Android API using `tns-platform-declarations`.
```JavaScript
if (platformModule.isAndroid) {
    // use tns-platform-dclarations to acces native APIs (e.g. ndroid.content.Intent)
    receiver = applicationModule.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, (context, intent) => {
        const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
        const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
        const percent = (level / scale) * 100.0;
        vm.set("batteryLife", percent.toString());
    });
}
```

When no longer needed, unregister the broadcast receiver
```JavaScript
applicationModule.android.unregisterBroadcastReceiver(receiver);
```

[Improve this document](undefined/edit/master/app/application/android-broadcast-receiver/article.md)

[Demo Source](undefined/edit/master/app/application/android-broadcast-receiver)

---

## Application Events


The application module provides cross-platform application events tp handle different application states.
With the provided applicaiton events the user can handle launch, resume, suspend and exit states or provide logic
related to the screen orientation, uncaught errors and low memory events.

```JavaScript
const applicationModule = require("tns-core-modules/application");
```

Use the applicaiton method `on` to add event listeners.
```JavaScript
launchListener = applicationModule.on(applicationModule.launchEvent, (args) => {
    // The root view for this Window on iOS or Activity for Android.
    // If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
    console.log("Root View: ", args.root);
    console.log("The appication was launched!");
});
suspendListener = applicationModule.on(applicationModule.suspendEvent, (args) => {
    console.log("The appication was suspended!");
});
resumeListener = applicationModule.on(applicationModule.resumeEvent, (args) => {
    console.log("The appication was resumed!");
});
exitListener = applicationModule.on(applicationModule.exitEvent, (args) => {
    console.log("The appication was closed!");
});
displayedListener = applicationModule.on(applicationModule.displayedEvent, (args) => {
    console.log("NativeScript displayedEvent");
});
lowMemoryListener = applicationModule.on(applicationModule.lowMemoryEvent, (args) => {
    // the instance that has raidsed the event
    console.log("Instance: ", args.object);
});
orientationChangedListener = applicationModule.on(applicationModule.orientationChangedEvent, (args) => {
    // orientationChangedEventData.newValue: "portrait" | "landscape" | "unknown"
    console.log("Orientation: ", args.newValue);
    vm.set("orientation", args.newValue);
});
uncaughtErrorListener = applicationModule.on(applicationModule.uncaughtErrorEvent, (args) => {
    // UnhandledErrorEventData.error: NativeScriptError
    console.log("NativeScript Error: ", args.error);
});
```

Use the applicaiton method `off` to remove the registered event listeners.
```JavaScript
// import { off as applicationOff } from "tns-core-modules/applicaiton";
applicationModule.off(applicationModule.launchEvent, launchListener);
applicationModule.off(applicationModule.resumeEvent, resumeListener);
applicationModule.off(applicationModule.suspendEvent, suspendListener);
applicationModule.off(applicationModule.exitEvent, exitListener);
applicationModule.off(applicationModule.displayedEvent, displayedListener);
applicationModule.off(applicationModule.lowMemoryEvent, lowMemoryListener);
applicationModule.off(applicationModule.orientationChangedEvent, orientationChangedListener);
applicationModule.off(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
```

[Improve this document](undefined/edit/master/app/application/application-events/article.md)

[Demo Source](undefined/edit/master/app/application/application-events)

---

## Check Platform

Use the following code in case you need to check somewhere in your code the platform you are running against:

```JavaScript
if (application.android) {
    console.log("We are running on Android device!");
} else if (application.ios) {
    console.log("We are running on iOS device");
}
```

[Improve this document](undefined/edit/master/app/application/check-platform/article.md)

[Demo Source](undefined/edit/master/app/application/check-platform)

---

## Ios Notification Observer


Use `addNotificationObserver` to add iOS notifications observer
```JavaScript
if (application.ios) {
    // import { ios as iosUtils } from "tns-core-modules/utils/utils";
    utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
    vm.set("batteryLife", +(utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
    observer = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, (notification) => {
        // tslint:disable:max-line-length
        vm.set("batteryLife", +(utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
    });
}
```

When no longer needed, remove the notification observer
```JavaScript
application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
```

[Improve this document](undefined/edit/master/app/application/ios-notification-observer/article.md)

[Demo Source](undefined/edit/master/app/application/ios-notification-observer)

---

**API Reference for** [Application Class](https://docs.nativescript.org/api-reference/modules/_application_.html)

