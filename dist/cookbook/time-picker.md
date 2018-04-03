---
title: Time Picker
description: Time Picker SDK Examples
position: 42
slug: time-picker
---

# Time Picker

NativeScript provides a TimePicker control that enables users to choose a time as a ready-to-use dialog. Every time part can be picked separately by its corresponding section of the control - for hour, minutes and AM/PM. 


* [Basics](#basics)
* [Binding](#binding)

## Basics

TimePicker can be easily configured by setting the required properties.

XML
```XML
<TimePicker loaded="onPickerLoaded" verticalAlignment="center" row="2" col="0" colSpan="2" class="m-15"></TimePicker>
```

JavaScript
```JavaScript
const Observable = require("tns-core-modules/data/observable").Observable;
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("hourResult", "Hour: _");
    vm.set("minuteResult", "Minute: _");
    vm.set("timeResult", "TIme: _");
    page.bindingContext = vm;
}

function onPickerLoaded(args) {
    const timePicker = args.object;

    timePicker.hour = 10;
    timePicker.minute = 25;
    // handling 'time change' via code behind
    timePicker.on("timeChange", (result) => {
        const page = args.object.page;
        const vm = page.bindingContext;
        vm.set("hourResult", `Hour: ${result.object.hour}`);
        vm.set("minuteResult", `Minute: ${result.object.minute}`);
        vm.set("timeResult", `TIme: ${result.object.time}`);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPickerLoaded = onPickerLoaded;
```

[Improve this document](undefined/edit/master/app/ui/time-picker/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/time-picker/basics)

---

## Binding

Set up properties TimePicker while using data binding.

XML
```XML
<TimePicker loaded="onPickerLoaded" 
{% raw %}            hour="{{ tphour }}" minute="{{ tpminute }}" {% endraw %}
{% raw %}            maxHour="{{ tpMaxHour }}" maxMinute="{{ tpMaxMinute }}"{% endraw %}
{% raw %}            minuteInterval="{{ tpminuteInterval }}"{% endraw %}
{% raw %}            minHour="{{ tpMinHour }}" minMinute="{{ tpMinMinute }}" {% endraw %}
            verticalAlignment="center" row="4" col="0" colSpan="2" class="m-15"></TimePicker>
```

JavaScript
```JavaScript
const Observable = require("tns-core-modules/data/observable").Observable;
// setting up the initial values for the TimePicker component
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("tphour", 16);
    vm.set("tpminute", 15);
    vm.set("tpMaxHour", 18);
    vm.set("tpMaxMinute", 48);
    vm.set("tpMinHour", 10);
    vm.set("tpMinMinute", 10);
    vm.set("tpminuteInterval", 5);
    vm.set("timeResult", "_");
    page.bindingContext = vm;
}

function onPickerLoaded(args) {
    const timePicker = args.object;
    // handling 'time change' via code behind
    timePicker.on("timeChange", (result) => {
        const page = args.object.page;
        const vm = page.bindingContext;
        vm.set("timeResult", result.object.time);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPickerLoaded = onPickerLoaded;
```

[Improve this document](undefined/edit/master/app/ui/time-picker/binding/article.md)

[Demo Source](undefined/edit/master/app/ui/time-picker/binding)

---


**API Reference for the** [TimePicker Class](http://docs.nativescript.org/api-reference/modules/_ui_time_picker_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) | [UIDatePicker](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) | 


