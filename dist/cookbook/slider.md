---
title: Slider
description: Slider SDK Examples
position: 36
slug: slider
---

# Slider

The NativeScript Slider component lets the user to drag a control to select a value. 
You can set the specific range to use by setting the component’s `minValue` and `maxValue`.

```JavaScript
const sliderModule = require("tns-core-modules/ui/slider");
```

* [Basics](#basics)
* [Code Behind](#code-behind)


## Basics

The example shows how to create basic slider component as well as, how to change its properties values via code-behind. 

XML
```XML
<GridLayout class="m-15" rows="auto auto" columns="50 * 50">
{% raw %}    <Label row="0" colSpan="3" class="h2 p-15" text="{{ currentValue }}" textWrap="true"/>{% endraw %}
    <Label row="1" col="0" text="&#xe90b;" textWrap="true" fontSize="15" class="icon"/>
{% raw %}    <Slider row="1" col="1" value="{{ sliderValue }}"  minValue="{{ firstMinValue }}" maxValue="{{ firstMaxValue }}"/>{% endraw %}
    <Label row="1" col="2" text="&#xe90b;" textWrap="true" fontSize="20" class="icon"/>
</GridLayout>

<GridLayout rows="auto auto" columns="50 * 50">
{% raw %}    <Label row="0" colSpan="3" text="&#xe901;" fontSize="{{ fontSize }}" textWrap="true" class="icon"/>{% endraw %}
    <Label row="1" col="0" text="min" textWrap="true" fontSize="15"/>
    <Slider loaded="onSliderLoaded" row="1" col="1" value="20"  minValue="15" maxValue="100"/>
    <Label row="1" col="2" text="max" textWrap="true" fontSize="20"/>
</GridLayout>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    // set up the initial values for the slider components
    const vm = new observableModule.Observable();
    vm.set("currentValue", 10);
    vm.set("sliderValue", 10);
    vm.set("fontSize", 20);
    vm.set("firstMinValue", 0);
    vm.set("firstMaxValue", 100);
    // handle value change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sliderValue") {
            vm.set("currentValue", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// handle value change
function onSliderLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = sargs.object.page;
        const vm = page.bindingContext;
        vm.set("fontSize", sargs.object.value);
    });
}

exports.onSliderLoaded = onSliderLoaded;
exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/ui/slider/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/slider/basics)

---

## Code Behind

In the following example is shown, how to create Slider via Code-behind


XML
```XML
<StackLayout id="stackLayoutId">
{% raw %}        <Label text="{{ 'Result: ' + slResult}}" textWrap="true" />{% endraw %}
        
</StackLayout>
```

JavaScript
```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("slResult", 22);
    // creating new Switch and binding the value property
    const options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    const sliderComponent = new sliderModule.Slider();
    sliderComponent.bind(options, vm);
    // setting slider.value to 22
    vm.set("age", 22);

    sliderComponent.on("valueChange", (args) => {
        vm.set("slResult", args.object.value);
    });

    stackLayout.addChild(sliderComponent);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/slider/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/slider/code-behind)

---


**API Reference for the** [Slider Class](http://docs.nativescript.org/api-reference/modules/_ui_slider_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.SeekBar](http://developer.android.com/reference/android/widget/SeekBar.html) | [UISlider](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISlider_Class/) |


