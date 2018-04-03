---
title: Styling
description: Styling SDK Examples
position: 37
slug: styling
---

# Styling

In The following sample is demostrated different scenarios for setting css to the page and setting CSS selectors.

```JavaScript
const switchModule = require("tns-core-modules/ui/switch");
```

## Code Behind

The following example demonstrates, how to set up CSS `class`, `id` and state selector while using component behind via code-behind. 

```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const stacklayout = page.getViewById("layoutContainer");
    page.css = ".title { font-size: 20 } .secondTitle { font-size: 10 } button { background-color: red; } .test { color: blue; } #myButton { color: yellow; } .lastButton:pressed { color: green; }";

    // Creating a button, while using the globaly defined style for this component type
    const btn = new buttonModule.Button();
    btn.text = "Sample button";
    stacklayout.addChild(btn);

    // Attaching CSS class to a label
    const label = new labelModule.Label();
    label.text = "Sample label";
    label.className = "secondTitle";
    stacklayout.addChild(label);

    // Atttaching CSS class to the component
    const btnWithClass = new buttonModule.Button();
    btnWithClass.text = "Button with class";
    btnWithClass.className = "test";
    stacklayout.addChild(btnWithClass);

    // Attaching id to a button component
    const btnWithId = new buttonModule.Button();
    btnWithId.text = "Button with Id";
    btnWithId.id = "myButton";
    stacklayout.addChild(btnWithId);

    // Button with state selector
    const btnStateSelector = new buttonModule.Button();
    btnStateSelector.text = "Button with state selector";
    btnStateSelector.class = "lastButton";
    stacklayout.addChild(btnStateSelector);
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/styling/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/styling/code-behind)

---


**API Reference for the** [Switch Class](http://docs.nativescript.org/api-reference/modules/_ui_switch_.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |


