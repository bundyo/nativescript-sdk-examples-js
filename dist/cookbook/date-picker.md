---
title: Date Picker
description: Date Picker SDK Examples
position: 11
slug: date-picker
---

# Date Picker

NativeScript provides a `DatePicker` control that enables the user to choose a date as a ready-to-use dialog. 
Every date part can be picked separately by its corresponding section of the control - for day, month and year.

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)

## Basics

The date picker element can accept JavaScript `Date` object for `date`, `minDate`, and `maxDate` properties.
Emiting the properties `minDate` and `maxDate` will set default year range from 1900 AD to 2100 AD.
```XML
{% raw %}<DatePicker date="{{ date }}" minDate="{{ minDate }}" maxDate="{{ maxDate }}"></DatePicker>{% endraw %}
```
```JavaScript
const TODAY = new Date();
vm.set("date", TODAY);
vm.set("minDate", new Date(1975, 0, 29));
vm.set("maxDate", new Date(2045, 4, 12));
```

The control can also accept number values for `day`, `month`, and `year` properties.
```XML
<DatePicker day="20" month="04" year="1980"></DatePicker>
```

[Improve this document](undefined/edit/master/app/ui/date-picker/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/date-picker/basics)

---

## Code Behind

Using a `DatePicker` in code-behind files requires the `tns-core-modules/ui/date-picker` module.
```JavaScript
const DatePicker = require("tns-core-modules/ui/date-picker").DatePicker;
```

Creating and controlling `DatePicker` programmatically.
```JavaScript
const datePicker = new DatePicker();
datePicker.day = 20;
datePicker.month = 4;
datePicker.year = 1980;
// datePicker.date = new Date(1980, 4, 20);

datePicker.minDate = new Date(1970, 12, 31);
datePicker.maxDate = new Date(2040, 4, 20);
```

[Improve this document](undefined/edit/master/app/ui/date-picker/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/date-picker/code-behind)

---

## Styling

There are some limitations when styling `DatePicker` component, casued by the way the different native
controls works on Android and on iOS. One major difference is that on Android we can control the font color by modifying the `colors.xml` file
in `App_Resources/Android/values/colors.xml` while on iOS we can directly use the CSS property `color`.
```CSS
.date-picker {
    background-color: lightgray;
    border-radius: 20;
    color: orangered; /* iOS only*/
    width: 80%;
}
```

> **Android specifics:** On Android API21+ we can also change our `DatePicker` from the default `spinner` mode to `calendar` mode and also change the
default background and color using the project's `app/App_Resources/Android/values-v21/colors.xml` color settings.
To achieve that, go to `app/App_Resources/Android/values-v21/styles.xml` and modify the `DatePicker` default style.
```XML
<!-- DatePicker in calendar mode -->
<style name="AppTheme" parent="AppThemeBase">
    <item name="android:datePickerStyle">@style/CalendarDatePicker</item>
</style>

<style name="CalendarDatePicker" parent="android:Widget.Material.Light.DatePicker">
    <item name="android:datePickerMode">calendar</item>
    <item name="colorPrimary">@color/ns_blue</item>
    <item name="colorPrimaryDark">@color/ns_primaryDark</item>
    <item name="colorAccent">@color/ns_accent</item>
</style>
```

[Improve this document](undefined/edit/master/app/ui/date-picker/styling/article.md)

[Demo Source](undefined/edit/master/app/ui/date-picker/styling)

---

**API Reference for** [DatePicker Class](http://docs.nativescript.org/api-reference/modules/_ui_date_picker_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.DatePicker](http://developer.android.com/reference/android/widget/DatePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) | 

