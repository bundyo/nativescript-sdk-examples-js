---
title: Action Bar
description: Action Bar SDK Examples
position: 1
slug: action-bar
---

# Action Bar

The `ActionBar` is NativeScript’s abstraction over the Android `ActionBar` and iOS `NavigationBar`. 
It represents a toolbar at the top of the activity window, and can have a title, 
application-level navigation, as well as other custom interactive items.

* [Basics](#basics)
* [Code Behind](#code-behind)

## Basics

The title of the ActionBar can be easily set by its corresponding property - `title`. 
We can additionally set an icon to use in your ActionBar on Android with the `icon` property.

Here’s what a basic usage of the `title` and `icon` properties looks like:
```XML
<Page.actionBar>
    <ActionBar title="Basics"/>
</Page.actionBar>
```

> Note: The icon can only be set in Android platform. It is hidden by default, but you can explicitly control its visibility with the `android.iconVisibility' property.

Furthermore, the title can be customized by placing a content component (button, label, layout-components, etc.) directly in the ActionBar.

[Improve this document](undefined/edit/master/app/ui/action-bar/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/action-bar/basics)

---

## Code Behind

The `ActionBar` can be dynamically created and controlled.
The property `navigationButton` allows us to overwrite the default navigation button (if one is present).
To explicitly show/hide an action bar on your page, use the `actionBarHidden` property of the current page.
```JavaScript
const newActionBar = new ActionBar();
newActionBar.title = "Code-Behind ActionBar";

const newNavigaitonButton = new NavigationButton();
newNavigaitonButton.text = "Go Back";
newActionBar.navigationButton = newNavigaitonButton;

page.actionBar = newActionBar;
page.actionBarHidden = false;
```

[Improve this document](undefined/edit/master/app/ui/action-bar/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/action-bar/code-behind)

---

**API Reference for the** [ActionBar Class](http://docs.nativescript.org/api-reference/modules/_ui_action_bar_.html)
**API Reference for the** [Known Colors](https://docs.nativescript.org/api-reference/modules/_color_known_colors_)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.Toolbar](https://developer.android.com/reference/android/widget/Toolbar.html) | [UIView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIView_Class/) | 

