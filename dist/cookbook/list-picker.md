---
title: List Picker
description: List Picker SDK Examples
position: 25
slug: list-picker
---

# List Picker

Spinner type module with listed options.
Using a ListPicker requires the "ui/list-picker" module.

```JavaScript
const listPickerModule = require("tns-core-modules/ui/list-picker");
```

* [Basics](#basics)
* [Code Behind](#code-behind)

## Basics

The example demonstrates how to set a `ListPicker` in XML page, how to bind its `selectedIndex` property and to handle its change.

```XML
<StackLayout row="0">
        <Label text="Use the slider to change ListPicker's selectedIndex" textWrap="true" class="h3 p-15 text-left"/>
{% raw %}        <Slider loaded="onSliderLoaded" minValue="0" maxValue="{{ pokemons.length -1 }}" value="{{ index }}"  class="slider"/>{% endraw %}
</StackLayout>
{% raw %}<ListPicker loaded="onListPickerLoaded" row="1" items="{{ pokemons }}" selectedIndex="{{ index }}"  class="p-15 picker" />{% endraw %}
```

```JavaScript
function onNavigatingTo(args) {

    const page = args.object;
    const vm = new Observable();
    vm.set("pokemons", pokemonList);
    vm.set("index", 0);
    page.bindingContext = vm;
}

function onSliderLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = sargs.object.page;
        const vm = page.bindingContext;
        console.log(`slider index: ${sargs.object.value}`);
        vm.set("index", sargs.object.value);
    });
}

function onListPickerLoaded(args) {
    const listPickerComponent = args.object;
    const vm = listPickerComponent.page.bindingContext;
    listPickerComponent.on("selectedIndexChange", (lpargs) => {
        const listPicker = lpargs.object;
        vm.set("index", listPicker.selectedIndex);
        console.log(`ListPicker selected index: ${listPicker.selectedIndex}`);
    });
}
```

[Improve this document](undefined/edit/master/app/ui/list-picker/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/list-picker/basics)

---

## Code Behind

Creating a `ListPicker` programmatically and setting up its items.
```JavaScript
const listPicker = new listPickerModule.ListPicker();
listPicker.items = pokemonList;
listPicker.selectedIndex = 9;
```

[Improve this document](undefined/edit/master/app/ui/list-picker/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/list-picker/code-behind)

---

**API Reference for** [ListPicker Class](http://docs.nativescript.org/api-reference/modules/_ui_list_picker_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.NumberPicker](http://developer.android.com/reference/android/widget/NumberPicker.html) | [UIPickerView](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIPickerView_Class/index.html) |

