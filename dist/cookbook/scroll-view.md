---
title: Scroll View
description: Scroll View SDK Examples
position: 33
slug: scroll-view
---

# Scroll View

The ScrollableView component allows you to display a scrollable area in your application, which has content that is larger than its bounds.
The ScrollView has an `orientation` property, which allows you to set different orientations to the view:

The possible values of `orientation` are:
 - `horizontal`
 - `vertical`
 
It is possible to handle the `scroll` event of the View by binding to the ScrollView’s `scroll` event.

```JavaScript
const searchBarModule = require("tns-core-modules/ui/search-bar");
```

* [Events](#events)
* [Vertical](#vertical)
* [Horizontal](#horizontal)


## Events

## Scroll events


<snippet id='scroll-event-xml'/>

```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("status", "not scrolling");

    page.bindingContext = vm;
}
function onScroll(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("status", "scrolling");
    setTimeout(() => {
        vm.set("status", "not scrolling");
    }, 300);

    console.log(`scrollX:  ${args.scrollX}`);
    console.log(`scrollY: ${args.scrollY}`);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onScroll = onScroll;
```

[Improve this document](undefined/edit/master/app/ui/scroll-view/events/article.md)

[Demo Source](undefined/edit/master/app/ui/scroll-view/events)

---

## Horizontal

Set ScrollView with `horizontal` orientation.

```XML
<ScrollView orientation="horizontal">
    <GridLayout class="m-15" columns="auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto">
        <Label width="50" height="50" class="h3 m-15" col="0" textWrap="true" text="Title 1"/>
        <Label width="50" height="50" class="h3 m-15" col="1" textWrap="true" text="Title 2"/>
        <Label width="50" height="50" class="h3 m-15" col="2" textWrap="true" text="Title 3"/>
        <Label width="50" height="50" class="h3 m-15" col="3" textWrap="true" text="Title 4"/>
        <Label width="50" height="50" class="h3 m-15" col="4" textWrap="true" text="Title 5"/>
        <Label width="50" height="50" class="h3 m-15" col="5" textWrap="true" text="Title 6"/>
        <Label width="50" height="50" class="h3 m-15" col="6" textWrap="true" text="Title 7"/>
        <Label width="50" height="50" class="h3 m-15" col="7" textWrap="true" text="Title 8"/>
        <Label width="50" height="50" class="h3 m-15" col="8" textWrap="true" text="Title 9"/>
        <Label width="50" height="50" class="h3 m-15" col="9" textWrap="true" text="Title 10"/>
        <Label width="50" height="50" class="h3 m-15" col="10" textWrap="true" text="Title 10"/>
        <Label width="50" height="50" class="h3 m-15" col="11" textWrap="true" text="Title 11"/>
        <Label width="50" height="50" class="h3 m-15" col="12" textWrap="true" text="Title 12"/>
        <Label width="50" height="50" class="h3 m-15" col="13" textWrap="true" text="Title 13"/>
        <Label width="50" height="50" class="h3 m-15" col="14" textWrap="true" text="Title 14"/>
        <Label width="50" height="50" class="h3 m-15" col="15" textWrap="true" text="Title 15"/>
    </GridLayout>
</ScrollView>
```

[Improve this document](undefined/edit/master/app/ui/scroll-view/horizontal/article.md)

[Demo Source](undefined/edit/master/app/ui/scroll-view/horizontal)

---

## Vertical

Set ScrollView with `vertical` orientation.

```XML
<ScrollView>
        <GridLayout class="m-15" rows="auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto">
                <Label class="h3 m-5" height="50" row="0" text="Title 1"/>
                <Label class="h3 m-5" height="50" row="1" text="Title 2"/>
                <Label class="h3 m-5" height="50" row="2" text="Title 3"/>
                <Label class="h3 m-5" height="50" row="3" text="Title 4"/>
                <Label class="h3 m-5" height="50" row="4" text="Title 5"/>
                <Label class="h3 m-5" height="50" row="5" text="Title 6"/>
                <Label class="h3 m-5" height="50" row="6" text="Title 7"/>
                <Label class="h3 m-5" height="50" row="7" text="Title 8"/>
                <Label class="h3 m-5" height="50" row="8" text="Title 9"/>
                <Label class="h3 m-5" height="50" row="9" text="Title 10"/>
                <Label class="h3 m-5" height="50" row="10" text="Title 10"/>
                <Label class="h3 m-5" height="50" row="11" text="Title 11"/>
                <Label class="h3 m-5" height="50" row="12" text="Title 12"/>
                <Label class="h3 m-5" height="50" row="13" text="Title 13"/>
                <Label class="h3 m-5" height="50" row="14" text="Title 14"/>
                <Label class="h3 m-5" height="50" row="15" text="Title 15"/>
        </GridLayout>
</ScrollView>
```


[Improve this document](undefined/edit/master/app/ui/scroll-view/vertical/article.md)

[Demo Source](undefined/edit/master/app/ui/scroll-view/vertical)

---


**API Reference for the** [ScrollView Class](http://docs.nativescript.org/api-reference/modules/_ui_scroll_view_.html)


