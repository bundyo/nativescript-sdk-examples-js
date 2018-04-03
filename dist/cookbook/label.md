---
title: Label
description: Label SDK Examples
position: 23
slug: label
---

# Label

The Label widget provides a text label that shows read-only text.
```JavaScript
const labelModule = require("tns-core-modules/ui/label");
```

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)

## Basics

The `Label` widget comes with `text` property.
The example demonstrates how to set a label in XML page and how to bind its text property.
```XML
{% raw %}<Label text="{{ title }}" textWrap="true" />{% endraw %}
```
```JavaScript
const page = args.object;
const vm = new Observable();
vm.set("title", "Expected Value");
page.bindingContext = vm;
```

[Improve this document](undefined/edit/master/app/ui/label/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/label/basics)

---

## Code Behind

Creating a `Label` programmatically with `text`.
```JavaScript
const myLabel = new labelModule.Label();
myLabel.text = "The quick brown fox jumps over the lazy dog.";

// Styling a label via css type
myLabel.text = "The quick brown fox jumps over the lazy dog.";
let pageCSS = "label {background-color: #C6C6C6; color: #10C2B0; font-size: 14;} ";

const mySecondLabel = new labelModule.Label();
mySecondLabel.text = "The quick brown fox jumps over the lazy dog.";
// Styling a label via css class
mySecondLabel.className = "title";
pageCSS += ".title {background-color: #7974bc; color: #54ff5f; font-size: 20;} ";

const myThirdLabel = new labelModule.Label();
myThirdLabel.text = "The quick brown fox jumps over the lazy dog.";
// Turning on text wrapping for a label
myThirdLabel.textWrap = true;
// Styling a label via css control identifier
myThirdLabel.id = "testLabel";
pageCSS += "#testLabel {background-color: #bc7474; color: #8754ff; font-size: 25;}";

// Binding text property of a label to an observable model
const myFourthlabel = new labelModule.Label();
const expValue = "Expected Value";
const bindingOptions = {
    sourceProperty: "sourceProperty",
    targetProperty: "text"
};
myFourthlabel.bind(bindingOptions, vm);
vm.set("sourceProperty", expValue);
// set to the page css property the CSS style defined in the pageCSS
page.css = pageCSS;
```

[Improve this document](undefined/edit/master/app/ui/label/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/label/code-behind)

---

## Styling

To style and customizse the `Label` widget use the conventional CSS properties and Icon Fonts.
The example below shows a label with icon (using icon font), several CSS properties.

```CSS
.my-label {
    background-color: orangered;
    border-radius: 5;
    color: white;
    font-family: FontAwesome;
    font-size: 24;
    vertical-align: middle;
    width: 80%;
}
```
```XML
<Label text="&#xff17b; Sample label" class="my-label" />
```


[Improve this document](undefined/edit/master/app/ui/label/styling/article.md)

[Demo Source](undefined/edit/master/app/ui/label/styling)

---


**API Reference for** [Label Class](http://docs.nativescript.org/api-reference/modules/_ui_label_.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |


