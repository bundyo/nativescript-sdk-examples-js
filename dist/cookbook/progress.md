---
title: Progress
description: Progress SDK Examples
position: 31
slug: progress
---

# Progress

The Progress widget is a visual bar indicator of a progress in a operation. 
It shows a bar representing the current progress of the operation.

```JavaScript
const progressModule = require("tns-core-modules/ui/progress");
```

* [Basics](#basics)
* [Code Behind](#code-behind)


## Basics

The example shows how to create basic progress component as well as, how to change its value property via code-behind. 

```XML
<StackLayout verticalAlign="center" row="0" height="100">
{% raw %}    <Progress width="100%" value="{{ progressValue }}"  maxValue="{{ progressMaxValue }}" loaded="onProgressLoaded" class="p-20"/>{% endraw %}
</StackLayout>
```

```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    // set up the initial values for the progress components
    const vm = new observableModule.Observable();
    vm.set("progressValue", 10);
    vm.set("progressMaxValue", 100);
    setInterval(() => {
        const value = vm.get("progressValue");
        vm.set("progressValue", value + 2);
    }, 300);
    page.bindingContext = vm;
}
// handle value change
function onProgressLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (pargs) => {
        console.log(`Old Value: ${pargs.oldValue}`);
        console.log(`New Value: ${pargs.value}`);
    });
}

exports.onProgressLoaded = onProgressLoaded;
exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/ui/progress/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/progress/basics)

---

## Code Behind

In the following example is shown, how to create Progress via Code-behind

```XML
<StackLayout id="stackLayoutId">
{% raw %}        <Label text="{{ 'Result: ' + prResult}}" textWrap="true" />{% endraw %}
        
</StackLayout>
```

```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("prResult", 0);
    // creating new Switch and binding the value property
    const progress = new progressModule.Progress();
    progress.value = 0;
    setInterval(() => {
        progress.value += 2;
    }, 300);

    progress.on("valueChange", (args) => {
        vm.set("prResult", args.object.value);
    });

    stackLayout.addChild(progress);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/progress/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/progress/code-behind)

---


**API Reference for** [Progress Class](http://docs.nativescript.org/api-reference/modules/_ui_progress_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ProgressBar](http://developer.android.com/reference/android/widget/ProgressBar.html) (indeterminate = false) | [UIProgressView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIProgressView_Class/) |


