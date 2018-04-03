---
title: Activity Indicator
description: Activity Indicator SDK Examples
position: 2
slug: activity-indicator
---

# Activity Indicator

The `ActivityIndicator` represents a UI widget which displays a progress indicator hinting the user 
for some background operation running like loading image, data, accepting a request, etc. 
We can control its behavior by setting or binding to its boolean property `busy`.

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)

## Basics

Using the activity indicator requires the `ActivityIndicator` module.
```JavaScript
const ActivityIndicator = require("tns-core-modules/ui/activity-indicator").ActivityIndicator;
```

You can work with its `busy` property and set it to `true` or `false`, thus displaying or hiding the control.

Setting an activity indicator’s `busy` boolean property via binding:
```XML
{% raw %}<ActivityIndicator busy="{{ isLoading }}" />{% endraw %}
```
```JavaScript
const vm = new Observable();
vm.set("isLoading", true);
page.bindingContext = vm;
```

[Improve this document](undefined/edit/master/app/ui/activity-indicator/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/activity-indicator/basics)

---

## Code Behind

Dynamic code-behind creationg of `ActivityIndicator` and showing the indicator while image is loading.
```JavaScript
const image = new Image();
image.isLoading = true; // mock image downloading in progress

const indicator = new ActivityIndicator();
// Bind the busy property of the indicator to the isLoading property of the image
indicator.bind({
    sourceProperty: "isLoading",
    targetProperty: "busy"
}, image);

myStsck.addChild(indicator);
```

[Improve this document](undefined/edit/master/app/ui/activity-indicator/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/activity-indicator/code-behind)

---

## Styling

The `ActivityIndicator` default color can be set using the `color` property.
```XML
<ActivityIndicator id="myIndicator"
{% raw %}                    busy="{{ isLoading }}"{% endraw %}
                    backgroundColor="lightgray"
                    borderRadius="50"
                    color="blue" 
                    width="100" 
                    height="100"/>               
```

White on Android we can use `width` and `height` to set our Indicator's size on iOS we need access to the native API.
Changing the default indicator size on iOS.
<snippet id='large-ios-indicato' />

[Improve this document](undefined/edit/master/app/ui/activity-indicator/styling/article.md)

[Demo Source](undefined/edit/master/app/ui/activity-indicator/styling)

---


**API Reference for** [ActivityIndicator Class](http://docs.nativescript.org/api-reference/modules/_ui_activity_indicator_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = true) | [UIActivityIndicatorView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIActivityIndicatorView_Class/) |


