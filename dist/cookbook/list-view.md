---
title: List View
description: List View SDK Examples
position: 26
slug: list-view
---

# List View

Using a ListView control inside NativeScript app requires some special attention due to the complexity of the NativeScript implementation of the component, with custom item templates, bindings and so on. 

The NativeScript modules provides a custom component which simplifies the way native ListView is used. 


```JavaScript
const listViewModule = require("tns-core-modules/ui/list-view");
```

* [Basics](#basics)
* [Code Behind](#code-behind)
* [Events](#events)
* [Multiple Templates](#multiple-templates)
* [Multiple Templates Selector Function](#multiple-templates-selector-function)

## Basics

The example demonstrates how to set a `ListView` component in XML page and how to bind its items property to a collection in the view model.
In the sample is shown how to define custom UI while using ListView's `itemTemplate`.

```XML
<Label row="0" text="Binding the ListView items property to collection" textWrap="true" />
<Button row="1" text="Add new item" tap="onTap" />
{% raw %}<ListView row="2" id="firstListView" items="{{ myItems }}" itemTap="listViewItemTap" class="list-group" />{% endraw %}
<Label row="3" text="Define the ListView itemTemplate property" textWrap="true" />
<Button row="4" text="Add new item (Second ListView)" tap="onSecondTap" />
{% raw %}<ListView row="5" items="{{ mySecondItems }}" itemTap="secondListViewItemTap" class="list-group">{% endraw %}
    <ListView.itemTemplate>
        <StackLayout class="list-group-item">
{% raw %}            <Label text="{{ title || 'Downloading...' }}" textWrap="true" class="title" />{% endraw %}
        </StackLayout>
    </ListView.itemTemplate>
</ListView>
```

```JavaScript
const colors = ["red", "green", "blue"];
const secondArray = new observableArrayModule.ObservableArray(
    [
        {
            title:"The Da Vinci Code"
        },
        {
            title:"Harry Potter and the Chamber of Secrets"
        },
        {
            title:"The Alchemist"
        },
        {
            title:"The Godfather"
        },
        {
            title:"Goodnight Moon"
        },
        {
            title:"The Hobbit"
        }
    ]);
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();

    vm.set("myItems", colors);
    vm.set("mySecondItems", secondArray);

    page.bindingContext = vm;
}
```

```JavaScript
colors.push("yellow");
// Manually trigger the update so that the new color is shown.
listView.refresh();
```
> Note: Note, that changing the array after the list view is shown will not update the UI. You can force-update the UI using the refresh() method.

```JavaScript
secondArray.push(
    {
        title:"Alice's Adventures in Wonderland"
    }
);
// The ListView will be updated automatically.
```
> Note: When using ObservableArray the list view will be automatically updated when items are added or removed form the array.

[Improve this document](undefined/edit/master/app/ui/list-view/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/list-view/basics)

---

## Code Behind

Creating a `ListView` programmatically and setting up its `items` and UI for each item.

```XML
<StackLayout id="container"/>
```
<snippet id='create-list-view-code' />

[Improve this document](undefined/edit/master/app/ui/list-view/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/list-view/code-behind)

---

## Events

In the example is shown how to set up `itemTap` and `loadMoreItems` events as well as how to set up the needed callback methods in the Code-Behind.

```XML
{% raw %}<ListView row="0" items="{{ listArray }}" itemTap="onItemTap" loadMoreItems="onLoadMoreItems" class="list-group">{% endraw %}
    <ListView.itemTemplate>
        <StackLayout class="list-group-item">
{% raw %}            <Label text="{{ title || 'Downloading...' }}" textWrap="true" class="title" />{% endraw %}
        </StackLayout>
    </ListView.itemTemplate>
</ListView>
```

```JavaScript
// The event will be raise when an item inside the ListView is tapped.
function onItemTap(args) {
    const index = args.index;
    dialogs.alert(`ListView item tap ${index}`)
       .then(() => {
           console.log("Dialog closed!");
       });
}

// The event will be raised when the ListView is scrolled so that the last item is visible. This even is intended to be used to add additional data in the ListView.
function onLoadMoreItems(args) {
    if (loadMore) {
        console.log("ListView -> LoadMoreItemsEvent");
        setTimeout(() => {
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
            listArray.push(moreListItems.getItem(Math.floor(Math.random() * moreListItems.length)));
        }, 3000);

        loadMore = false;
    }
}
```

[Improve this document](undefined/edit/master/app/ui/list-view/events/article.md)

[Demo Source](undefined/edit/master/app/ui/list-view/events)

---

## Multiple Templates

The example shows, how to define multiple item templates and an item template selector in the XML

The `itemTemplateSelector` can be an expression specified directly in XML. The context of the expression is the data item for each row.
```XML
{% raw %}<ListView row="1" items="{{ listArray }}"  class="list-group" itemTemplateSelector="age > 18 ? 'green' : 'red'">{% endraw %}
    <ListView.itemTemplates>
        <template key="green">
            <StackLayout class="list-group-item" style.backgroundColor="green">
{% raw %}                <Label text="{{ 'Name: ' + name }}" class="h2" textWrap="true"/>{% endraw %}
{% raw %}                <Label text="{{ 'Age: ' + age }}"/>{% endraw %}
            </StackLayout>
        </template>
        <template key="red">
            <StackLayout class="list-group-item" style.backgroundColor="red">
{% raw %}                <Label text="{{ 'Name: ' + name }}" class="h2" textWrap="true" />{% endraw %}
{% raw %}                <Label text="{{ 'Age: ' + age }}"/>{% endraw %}
            </StackLayout>
        </template>
    </ListView.itemTemplates>
</ListView>
```


You can use the special value `$index` in the item template selector expression which represents the row index.
```XML
{% raw %}<ListView row="3" items="{{ listArray }}"  class="list-group" itemTemplateSelector="$index % 2 === 0 ? 'even' : 'odd'">{% endraw %}
    <ListView.itemTemplates>
        <template key="even">
            <StackLayout class="list-group-item" style.backgroundColor="white">
{% raw %}                <Label text="{{ 'Name: ' + name }}" class="h2" textWrap="true"/>{% endraw %}
{% raw %}                <Label text="{{ 'Age: ' + age }}"/>{% endraw %}
            </StackLayout>
        </template>
        <template key="odd">
            <StackLayout class="list-group-item" style.backgroundColor="gray">
{% raw %}                <Label text="{{ 'Name: ' + name }}" class="h2" textWrap="true" />{% endraw %}
{% raw %}                <Label text="{{ 'Age: ' + age }}"/>{% endraw %}
            </StackLayout>
        </template>
    </ListView.itemTemplates>
</ListView>
```

[Improve this document](undefined/edit/master/app/ui/list-view/multiple-templates/article.md)

[Demo Source](undefined/edit/master/app/ui/list-view/multiple-templates)

---

## Multiple Templates Selector Function

The example shows, how to specify the item template selector as a function in the code-behind file


In case your item template selector involves complicated logic which cannot be expressed with an expression, you can create an item template selector function in the code behind of the page in which the ListView resides. The function receives the respective data item, the row index and the entire ListView items collection as parameters. It has to return the the key of the template to be used based on the supplied information.
```XML
{% raw %}<ListView row="0" items="{{ listArray }}"  class="list-group" itemTemplateSelector="selectItemTemplate">{% endraw %}
    <ListView.itemTemplates>
        <template key="even">
            <StackLayout class="list-group-item" style.backgroundColor="white">
{% raw %}                <Label text="{{ 'Name: ' + name }}" class="h2" textWrap="true"/>{% endraw %}
{% raw %}                <Label text="{{ 'Age: ' + age }}"/>{% endraw %}
            </StackLayout>
        </template>
        <template key="odd">
            <StackLayout class="list-group-item" style.backgroundColor="gray">
{% raw %}                <Label text="{{ 'Name: ' + name }}" class="h2" textWrap="true" />{% endraw %}
{% raw %}                <Label text="{{ 'Age: ' + age }}"/>{% endraw %}
            </StackLayout>
        </template>
    </ListView.itemTemplates>
</ListView>      
```
```JavaScript
function selectItemTemplate(item, index, items) {
    return item.age % 2 === 0 ? "even" : "odd";
}
```

[Improve this document](undefined/edit/master/app/ui/list-view/multiple-templates-selector-function/article.md)

[Demo Source](undefined/edit/master/app/ui/list-view/multiple-templates-selector-function)

---


**API Reference for the** [ListView Class](http://docs.nativescript.org/api-reference/modules/_ui_list_view_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ListView](http://developer.android.com/reference/android/widget/ListView.html) | [UITableView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/) |


