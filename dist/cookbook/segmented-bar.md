---
title: Segmented Bar
description: Segmented Bar SDK Examples
position: 35
slug: segmented-bar
---

# Segmented Bar

Using a SegementedBar inside an Angular project gives you a simple way to define a collection of tabbed views.
The SegmentedBar’s `selectedIndexChange` property notifies you for every changes of the component’s `selectedIndex`.

The specific `SegmentedBar` properties are:
 - `items`
 - `selectedIndex`
 - `selectedIndexChange`

```JavaScript
const segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
```

* [Basics](#basics)
* [Code Behind](#code-behind)
* [Views](#views)


## Basics

The example shows how to create SegmentedBar component via XML and handle selectedIndex change.


```XML
{% raw %}<SegmentedBar row="0"  class="m-5" selectedIndex="{{ sbSelectedIndex }}">{% endraw %}
    <SegmentedBar.items>
        <SegmentedBarItem title="Item 1" />
        <SegmentedBarItem title="Item 2" />
        <SegmentedBarItem title="Item 3" />
    </SegmentedBar.items>
</SegmentedBar>
```

```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    // set up the SegmentedBar selected index
    const vm = new observableModule.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    // handle selected index change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbSelectedIndex") {
            vm.set("prop", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}

exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/ui/segmented-bar/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/segmented-bar/basics)

---

## Code Behind

In the following example is shown, how to create SegmentedBar via Code-behind


```XML
<StackLayout id="stackLayoutId">
{% raw %}    <Label text="{{ 'Result(index): ' + sbResult}}" textWrap="true" />{% endraw %}
        
</StackLayout>
```

```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", 0);
    // creating new SegmentedBar and binding the selectedIndex property
    const options = {
        sourceProperty: "sbindex",
        targetProperty: "selectedIndex"
    };
    const segmentedBar = new segmentedBarModule.SegmentedBar();
    const items = [];
    const item1 = new segmentedBarModule.SegmentedBarItem();
    item1.title = "Item1";
    items.push(item1);
    const item2 = new segmentedBarModule.SegmentedBarItem();
    item2.title = "Item2";
    items.push(item2);
    const item3 = new segmentedBarModule.SegmentedBarItem();
    item3.title = "Item3";
    items.push(item3);
    segmentedBar.items = items;

    segmentedBar.bind(options, vm);
    // setting SegmentedBar selected index to 0
    vm.set("sbindex", 0);

    segmentedBar.on("selectedIndexChange", (args) => {
        vm.set("sbResult", args.object.selectedIndex);
    });

    stackLayout.insertChild(segmentedBar, 0);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/segmented-bar/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/segmented-bar/code-behind)

---

## Views

Example showing how to handle the SegmentedBar index change event and changing the displayed Layouts.


```XML
{% raw %}<SegmentedBar row="0" loaded="sbLoaded" class="m-5" selectedIndex="{{ sbSelectedIndex }}">{% endraw %}
    <SegmentedBar.items>
        <SegmentedBarItem title="Item 1" />
        <SegmentedBarItem title="Item 2" />
        <SegmentedBarItem title="Item 3" />
    </SegmentedBar.items>
</SegmentedBar>
{% raw %}<GridLayout row="1" rows="*" visibility="{{ visibility1 ? 'visible' : 'collapsed' }}" backgroundColor="white">{% endraw %}
{% raw %}    <Label text="{{ 'The new selectedIndex is: ' + prop }}" class="m-15 h3 p-5 text-center"/>{% endraw %}
</GridLayout>

{% raw %}<GridLayout row="1" rows="*" visibility="{{ visibility2 ? 'visible' : 'collapsed' }}" backgroundColor="green">{% endraw %}
{% raw %}    <Label text="{{ 'The new selectedIndex is: ' + prop }}" class="m-15 h3 p-5 text-center" color="white"/>{% endraw %}
</GridLayout>

{% raw %}<GridLayout row="1" rows="*" visibility="{{ visibility3 ? 'visible' : 'collapsed' }}" backgroundColor="red">{% endraw %}
{% raw %}    <Label text="{{ 'The new selectedIndex is: ' + prop }}" class="m-15 h3 p-5 text-center" color="white"/>{% endraw %}
</GridLayout>
```

```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    // set up the SelectedBar selected index
    const vm = new observableModule.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.set("visibility1", true);
    vm.set("visibility2", false);
    vm.set("visibility3", false);

    page.bindingContext = vm;
}

function sbLoaded(args) {
    // handle selected index change
    const segmentedBarComponent = args.object;
    segmentedBarComponent.on("selectedIndexChange", (sbargs) => {
        const page = sbargs.object.page;
        const vm = page.bindingContext;
        const selectedIndex = sbargs.object.selectedIndex;
        vm.set("prop", selectedIndex);
        switch (selectedIndex) {
            case 0:
                vm.set("visibility1", true);
                vm.set("visibility2", false);
                vm.set("visibility3", false);
                break;
            case 1:
                vm.set("visibility1", false);
                vm.set("visibility2", true);
                vm.set("visibility3", false);
                break;
            case 2:
                vm.set("visibility1", false);
                vm.set("visibility2", false);
                vm.set("visibility3", true);
                break;
            default:
                break;
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.sbLoaded = sbLoaded;
```

[Improve this document](undefined/edit/master/app/ui/segmented-bar/views/article.md)

[Demo Source](undefined/edit/master/app/ui/segmented-bar/views)

---


**API Reference for the** [SegementedBar Class](http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.TabHost](http://developer.android.com/reference/android/widget/TabHost.html) | [UISegmentedControl](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UISegmentedControl_Class/index.html) |


