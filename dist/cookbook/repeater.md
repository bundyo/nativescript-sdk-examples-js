---
title: Repeater
description: Repeater SDK Examples
position: 32
slug: repeater
---

# Repeater

The Repeater widget allows you to display a collection of data, which is present in an array.

```JavaScript
const repeaterModule = require("tns-core-modules/ui/repeater");
```

* [Basics](#basics)
* [Code Behind](#code-behind)


## Basics

The example shows how to define Repeater in the XML and hoe to load its data. 

```XML
<Label row="0" text="Binding the Repeater items property to collection" textWrap="true" />
<Button row="1" text="Add new item" tap="onTap" />
<ScrollView row="2">
{% raw %}    <Repeater  id="firstRepeater" items="{{ myItems }}" />{% endraw %}
</ScrollView>
<Label row="3" text="Define the Repeater itemTemplate property" textWrap="true" />
<Button row="4" text="Add new item (Second Repeater)" tap="onSecondTap" />
<ScrollView row="5" orientation="horizontal">
{% raw %}    <Repeater items="{{ mySecondItems }}">{% endraw %}
        <Repeater.itemsLayout>
            <StackLayout orientation="horizontal" />
        </Repeater.itemsLayout>
        <Repeater.itemTemplate>
{% raw %}            <Label text="{{ $value }}" margin="10" />{% endraw %}
        </Repeater.itemTemplate>
    </Repeater>
</ScrollView>
```

```JavaScript
const colors = ["red", "green", "blue"];
const secondColorsArray = new observableArrayModule.ObservableArray(["red", "green", "blue"]);
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("myItems", colors);
    vm.set("mySecondItems", secondColorsArray);

    page.bindingContext = vm;
}
```

> Note: Note, that changing the array after the repeater is shown will not update the UI. You can force-update the UI using the refresh() method.

```JavaScript
colors.push("yellow");
// Manually trigger the update so that the new color is shown.
repeater.refresh();
```

> Note: When using ObservableArray the repeater will be automatically updated when items are added or removed form the array.

```JavaScript
secondColorsArray.push("yellow");
// The Repeater will be updated automatically.
```

[Improve this document](undefined/edit/master/app/ui/repeater/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/repeater/basics)

---

## Code Behind

In the following example is shown, how to create Repeater via Code-behind

```XML
<StackLayout id="stackLayoutId">
{% raw %}        <Label text="{{ 'Result: ' + prResult}}" textWrap="true" />{% endraw %}
        
</StackLayout>
```

```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const stackLayoutContainer = page.getViewById("stackLayoutId");
    const secondColorsArray = new observableArrayModule.ObservableArray(["red", "green", "blue"]);

    const repeater = new repeaterModule.Repeater();
    const stackLayout = new stackLayoutModule.StackLayout();
    stackLayout.orientation = "horizontal";
    repeater.itemsLayout = stackLayout;
    repeater.items = secondColorsArray;

    stackLayoutContainer.addChild(repeater);
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/repeater/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/repeater/code-behind)

---


**API Reference for** [Repeater Class](https://docs.nativescript.org/api-reference/classes/_ui_repeater_.repeater)



