---
title: Placeholder
description: Placeholder SDK Examples
position: 29
slug: placeholder
---

# Placeholder

The Placeholder allows you to add any native widget to your application. To do that, you need to put a Placeholder somewhere in the UI hierarchy and then create and configure the native widget that you want to appear there. Finally, pass your native widget to the event arguments of the **creatingView** event.

```JavaScript
const placeholderModule = require("tns-core-modules/ui/placeholder");
```

* [Basics](#basics)
* [Styling](#platform-files)


## Basics

The example shows, how to create native view and display it via `Placeholder` using creatingView event.

```XML
<StackLayout>
    <Placeholder creatingView="creatingView" />
</StackLayout>
```
```JavaScript
function creatingView(args) {
    let nativeView;
    if (platformModule.isIOS) {
        nativeView = UITextView.new();
        nativeView.text = "Native View (iOS)";
    } else if (platformModule.isAndroid) {
        nativeView = new android.widget.TextView(utils.ad.getApplicationContext());
        nativeView.setText("Native View (Android)");
    }

    args.view = nativeView;
}
exports.creatingView = creatingView;
```


[Improve this document](undefined/edit/master/app/ui/placeholder/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/placeholder/basics)

---

## Platform Files

The example shows how to define the native widget via `Placeholder`, while using platform-specific JavaScript files.

```XML
<StackLayout>
    <Placeholder creatingView="creatingView"/>
</StackLayout>
```

* <file name>.**android**.js`
```JavaScript
function creatingView(args) {
    const nativeView = new android.widget.TextView(args.context);
    nativeView.setSingleLine(true);
    nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
    nativeView.setText("Native View - Android");
    args.view = nativeView;
}
exports.creatingView = creatingView;
```

* <file name>.**ios**.js`
```JavaScript
function creatingView(args) {
    const nativeView = new UILabel();
    nativeView.text = "Native View - iOS";
    args.view = nativeView;
}
exports.creatingView = creatingView;
```


[Improve this document](undefined/edit/master/app/ui/placeholder/platform-files/article.md)

[Demo Source](undefined/edit/master/app/ui/placeholder/platform-files)

---


**API Reference for the** [Placeholder Class](https://docs.nativescript.org/api-reference/classes/_ui_placeholder_.placeholder)


