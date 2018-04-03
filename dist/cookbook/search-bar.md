---
title: Search Bar
description: Search Bar SDK Examples
position: 34
slug: search-bar
---

# Search Bar

The SearchBar module represents a UI component similar to `UISearchBar` in iOS and `SearchView` for Android, both of which allow you to to create a simple filter for the the content in the app. 
This module gives you the simple way to handle a `submit` event and a `clear` event.


```JavaScript
const searchBarModule = require("tns-core-modules/ui/search-bar");
```

* [Basics](#basics)
* [Events](#events)
* [Code Behind](#code-behind)


## Basics

The example shows how to create SerachBr component via XML and handle submit and clear events.


```XML
    <StackLayout class="p-20">
{% raw %}   <SearchBar id="searchBar" hint="{{sbHint}}" text="{{sbText}}" clear="onClear" submit="onSubmit" />{% endraw %}
</StackLayout>
```

```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    // binding SegmentedBar `text` abd `hint` properties
    const vm = new observableModule.Observable();
    vm.set("sbHint", "Search");
    vm.set("sbText", "");
    // handle text change event
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sbText") {
            console.log("SearchBar text changed! New value: ", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}

// Handle SearchBar `submit` event.
function onSubmit(args) {
    const searchbar = args.object;
    console.log("Search submit result: ", searchbar.text);
    dialogs.alert(`You are searching for ${searchbar.text}`)
    .then(() => {
        console.log("Dialog closed!");
    });
}

// Handle SearchBar `clear` event.
function onClear(args) {
    console.log("clear search-bar text");
    dialogs.alert("clear search-bar text")
    .then(() => {
        console.log("Dialog closed!");
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
```

[Improve this document](undefined/edit/master/app/ui/search-bar/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/search-bar/basics)

---

## Code Behind

In the following example is shown, how to create SearchBar via Code-behind


```XML
<StackLayout id="stackLayoutId">
{% raw %}    <Label text="{{ 'Result(text): ' + sbResult}}" textWrap="true" />{% endraw %}
        
</StackLayout>
```

```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("sbResult", "");
    // creating new SearchBar
    const searchBar = new searchBarModule.SearchBar();
    // set up SearchBar submit event
    searchBar.on(searchBarModule.SearchBar.submitEvent, (args) => {
        console.log("Search for ", args.object.text);
        dialogs.alert(`Search for ${args.object.text}`)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
    // set up SearchBar clear event
    searchBar.on(searchBarModule.SearchBar.clearEvent, (args) => {
        console.log("Clear");
        dialogs.alert("Clear SearchBar text")
        .then(() => {
            console.log("Dialog closed!");
        });
    });

    searchBar.on("textChange", (args) => {
        vm.set("sbResult", args.object.text);
    });


    stackLayout.addChild(searchBar);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/search-bar/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/search-bar/code-behind)

---

## Events

Example showing how to use SearchBar `submit` and `clear` events.


```XML
<SearchBar row="0" hint="Search for a country and press enter" clear="onClear" submit="onSubmit"/>

{% raw %}<ListView row="1" items="{{ myItems }}"  class="list-group">{% endraw %}
    <ListView.itemTemplate>
        <GridLayout class="item list-group-item">
{% raw %}            <Label text="{{ name }}" class="list-group-item-heading"/>{% endraw %}
        </GridLayout>
    </ListView.itemTemplate>
</ListView>
```

```JavaScript
const arrayItems = [
    { name: "United States" },
    { name: "Bulgaria" },
    { name: "Germany" },
    { name: "Denmark" },
    { name: "India" },
    { name: "Spain" },
    { name: "Italy" }
];
function onNavigatingTo(args) {
    const page = args.object;
    // set up the ListView items
    const vm = new observableModule.Observable();
    const myItems = new observableArrayModule.ObservableArray(arrayItems);

    vm.set("myItems", myItems);

    page.bindingContext = vm;
}
// search for country
function onSubmit(args) {
    const searchBar = args.object;
    const searchValue = searchBar.text.toLowerCase();

    const myItems = new observableArrayModule.ObservableArray();
    if (searchValue !== "") {
        for (let i = 0; i < arrayItems.length; i++) {
            if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                myItems.push(arrayItems[i]);
            }
        }
    }
    const page = searchBar.page;
    const vm = page.bindingContext;
    vm.set("myItems", myItems);
}
// clear SearchBar text and load ListView initial data
function onClear(args) {
    const searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";

    const myItems = new observableArrayModule.ObservableArray();
    arrayItems.forEach((item) => {

        myItems.push(item);

    });

    const page = searchBar.page;
    const vm = page.bindingContext;
    vm.set("myItems", myItems);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onSubmit = onSubmit;
exports.onClear = onClear;
```

[Improve this document](undefined/edit/master/app/ui/search-bar/events/article.md)

[Demo Source](undefined/edit/master/app/ui/search-bar/events)

---


**API Reference for the** [SearchBar Class](https://docs.nativescript.org/api-reference/classes/_ui_search_bar_.searchbar)



