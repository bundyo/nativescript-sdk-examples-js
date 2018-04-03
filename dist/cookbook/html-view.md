---
title: Html View
description: Html View SDK Examples
position: 18
slug: html-view
---

# Html View

The `HtmlView` control represents a view with HTML content. 
Use this component when you want to show static HTML content.
For more advanced scenarios and for dynamic content use `WebView`.


## Basics


Creating a `HtmlView` in XML.
```XML
{% raw %}<HtmlView html="{{ htmlString }}"></HtmlView>{% endraw %}
```

Creating a `HtmlView` element cia code-behind files.
```JavaScript
const HtmlView = require("tns-core-modules/ui/html-view").HtmlView;
```
```JavaScript
const myHtmlView = new HtmlView();
myHtmlView.html = "<span><h1><font color=\"blue\">NativeScript HtmlView</font></h1></br><h3>This component accept simple HTML strings</h3></span>";
```

> Note: The `HtmlView` component has limited styling capabilities. For more complex scenarios use the `WebView` component.



[Improve this document](undefined/edit/master/app/ui/html-view/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/html-view/basics)

---

**API Reference for the** [HtmlView Class](http://docs.nativescript.org/api-reference/modules/_ui_html_view_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TextView](http://developer.android.com/reference/android/widget/TextView.html) | [UILabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UILabel_Class/) |


