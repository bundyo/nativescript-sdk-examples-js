---
title: Button
description: Button SDK Examples
position: 7
slug: button
---

# Button

The `Button` widget provides a standard button widget that reacts to a `tap` event.
```JavaScript
const Button = require("tns-core-modules/ui/button").Button;
```

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)

## Basics

The `Button` widget comes with `text` property and a `tap` handler.
The example demonstrates how to set a button in XML page and use the `tap` callback.
```XML
<Button text="Tap Me!" tap="onTap" class="btn btn-primary btn-active" />
```
```JavaScript
function onTap(args) {
    const button = args.object;
    button.text = `Tapped ${count} times`;
}
exports.onTap = onTap;
```

[Improve this document](undefined/edit/master/app/ui/button/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/button/basics)

---

## Code Behind

Creating a `Button` programmatically with `text` value and a `tap` callback.
```JavaScript
const myButton = new Button();
myButton.text = "Tap me!";
myButton.className = "btn btn-primary btn-active";
myButton.on("tap", (args) => {
    // args is of type EventData
    alert("My newly created button is tapped!");
});
```

[Improve this document](undefined/edit/master/app/ui/button/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/button/code-behind)

---

## Styling

To style and customizse the `Button` widget use the conventional CSS properties and Icon Fonts.
The widget also supports the CSS pseudo-selector `active` which wlll be triggered when the button is pressed.
The example below shows a button with icon (using icon font), several CSS properties and with an `active` state styling.

```CSS
.my-button {
    background-color: orangered;
    border-radius: 5;
    color: white;
    font-family: FontAwesome;
    font-size: 24;
    vertical-align: middle;
    width: 80%;
}

.my-button:active {
    background-color: lightslategray;
    color:white;
}
```
```XML
<Button text="&#xff17b; Tap Me!" tap="onTap" class="my-button" />
```


[Improve this document](undefined/edit/master/app/ui/button/styling/article.md)

[Demo Source](undefined/edit/master/app/ui/button/styling)

---

**API Reference for the** [Button Class](http://docs.nativescript.org/api-reference/classes/_ui_button_.button.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Button](http://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIButton_Class/) | 


