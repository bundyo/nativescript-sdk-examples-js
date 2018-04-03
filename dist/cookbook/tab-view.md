---
title: Tab View
description: Tab View SDK Examples
position: 39
slug: tab-view
---

# Tab View

The TabView component provides a simple way to navigate between different views by tapping on some of the tabs or by swiping between the views.
By default the TabView will load the view of the first tab, however it is possible to load alternative tabs when the app starts by setting the component’s `selectedIndex` property.

```JavaScript
const textViewModule = require("tns-core-modules/ui/text-view");
```

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)
* [Icon Fonts](#icon-fonts)

## Basics

In a pure NativeScript application, `TabView` has an items property which could be set via XML to an array of TabViewItems (basically, an array of objects with `title` and `view` properties). The following example shows how to add a `TabView` to your page:

XML
```XML
<TabView id="tabViewContainer">
        <TabView.items>
                <TabViewItem title="NativeScript">
                        <TabViewItem.view>
                                <StackLayout>
                                        <Label text="NativeScript" class="m-15 h2 text-left" color="blue"/>
                                        <ScrollView>
                                            <StackLayout height="100%">
{% raw %}                                                <Label text="{{content}}" textWrap="true" class="m-15"/>{% endraw %}
                                            </StackLayout>
                                        </ScrollView>
                                </StackLayout>
                        </TabViewItem.view>
                </TabViewItem>
                <TabViewItem title="Icon">
                        <TabViewItem.view>
                                <StackLayout>
                                        <Image class="m-t-30 m-b-15" src="res://icon" width="80" height="80"/>
                                        <Label text="NativeScript" textWrap="true" class="h2 m-x-auto" color="blue"/>
                                </StackLayout>        
                        </TabViewItem.view>
                </TabViewItem>
        </TabView.items>
</TabView>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const sampleText = "NativeScript is a free and open source framework for building native iOS and Android apps using JavaScript and CSS. NativeScript renders UIs with the native platform’s rendering engine—no WebViews—resulting in native-like performance and UX.NativeScript provides a best-of-both-worlds development experience. Our cross-platform JavaScript modules give you the convenience of writing iOS and Android apps from a single JavaScript codebase, while our runtimes give you the power of accessing native APIs, SDKs, and frameworks when you need them—all without needing to open Xcode or Android Studio. NativeScript was created and is supported by Telerik.\n\n\n NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular, the latest and greatest (and fastest) Angular framework. Open source and backed by Telerik.";
    const vm = new observableModule.Observable();
    vm.set("content", sampleText);

    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/ui/tab-view/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/tab-view/basics)

---

## Code Behind

This sample shows how to create TabView via code-behind

XML
```XML
<StackLayout id="stackLayoutId">
        
</StackLayout>
```

JavaScript
```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const stackLayout = page.getViewById("stackLayoutId");
    const items = [];
    // creating TabView Item content body
    const StackLayout0 = new StackLayout();
    const label0 = new Label();
    label0.text = "Tab 0";
    StackLayout0.addChild(label0);
    const tabEntry0 = new tabViewModule.TabViewItem();
    // creating TabView Item title
    tabEntry0.title = "Tab 0";
    tabEntry0.view = StackLayout0;
    items.push(tabEntry0);

    const StackLayout1 = new StackLayout();
    const label1 = new Label();
    label1.text = "Tab 1";
    StackLayout1.addChild(label1);
    const tabEntry1 = new tabViewModule.TabViewItem();
    tabEntry1.title = "Tab 1";
    tabEntry1.view = StackLayout1;
    items.push(tabEntry1);
    // creating TabView
    const tabView = new tabViewModule.TabView();
    // setting up its items and the selected index
    tabView.items = items;
    tabView.selectedIndex = 1;
    // handling selectedIndexChangedEvent
    tabView.on(tabViewModule.TabView.selectedIndexChangedEvent, (args) => {
        dialogs.alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex})`)
        .then(() => {
            console.log("Dialog closed!");
        });
    });


    stackLayout.addChild(tabView);
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/tab-view/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/tab-view/code-behind)

---

## Icon Fonts

The example demonstrates, how to use Icon font for the TabView items title.

XML
<snippet id='tabview-icon-font-html'/>

[Improve this document](undefined/edit/master/app/ui/tab-view/icon-fonts/article.md)

[Demo Source](undefined/edit/master/app/ui/tab-view/icon-fonts)

---

## Styling

The following example shows how to use `selectedIndex` property and how to handle its change. In the sample code, you will also find how to change the TabView index via code behind as well as how to set up some platform specific styling properties.



For the TabView component could be set three different styling properties

* `selectedTabTextColor` (coresponding CSS property selected-tab-text-color ) - change the color of the text, while selecting some of the tabs.

* `tabBackgroundColor` (coresponding CSS property tab-background-color) - changing the background of the tabs.

* `textTransform` (coresponding CSS property text-transform) - setting up textTransform individual for every TabViewItem. Value options: capitalize, lowercase, none, uppercase.

* `androidSelectedTabHighlightColor`<sup>android specific property</sup> (coresponding CSS property `android-selected-tab-highlight-color`) - setup underline color of the `Tab`s in Android.

XML
```XML
{% raw %}<TabView selectedIndex="{{tabSelectedIndex}}" selectedIndexChanged="onSelectedIndexChanged" selectedColor="#FF0000" iosIconRenderingMode="alwaysOriginal" androidSelectedTabHighlightColor="red">{% endraw %}
        <TabView.items>
                <TabViewItem title="Profile" iconSource="res://icon">
                        <TabViewItem.view>
                               <StackLayout>
{% raw %}                                       <Label text="{{ tabSelectedIndexResult }}" class="h2 m-t-16 text-center" textWrap="true"/>{% endraw %}
                                       <Button text="Change Tab" tap="changeTab" class="btn btn-primary btn-active"/>
                               </StackLayout>
                        </TabViewItem.view>
                </TabViewItem>
                <TabViewItem title="Stats" textTransform="lowercase">
                        <TabViewItem.view>
                               <StackLayout>
{% raw %}                                       <Label text="{{ tabSelectedIndexResult }}" class="h2 m-t-16 text-center" textWrap="true"/>{% endraw %}
                                       <Button text="Change Tab" tap="changeTab" class="btn btn-primary btn-active"/>
                               </StackLayout>
                        </TabViewItem.view>
                </TabViewItem>
                <TabViewItem title="Settings">
                        <TabViewItem.view>
                               <StackLayout>
{% raw %}                                       <Label text="{{ tabSelectedIndexResult }}" class="h2 m-t-16 text-center" textWrap="true"/>{% endraw %}
                                       <Button text="Change Tab" tap="changeTab" class="btn btn-primary btn-active"/>
                               </StackLayout>
                        </TabViewItem.view>
                </TabViewItem>
        </TabView.items>
</TabView>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tabSelectedIndex", 0);
    vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");

    page.bindingContext = vm;
}

function changeTab(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const tabSelectedIndex = vm.get("tabSelectedIndex");
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndex", 1);
        vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
    } else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndex", 2);
        vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
    } else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndex", 0);
        vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
    }
}
// displaying the old and new TabView selectedIndex
function onSelectedIndexChanged(args) {
    const tabSelectedIndex = args.object.selectedIndex;
    const page = args.object.page;
    const vm = page.bindingContext;
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
    } else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
    } else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
    }
    dialogs.alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
    .then(() => {
        console.log("Dialog closed!");
    });
}
exports.onNavigatingTo = onNavigatingTo;
exports.changeTab = changeTab;
exports.onSelectedIndexChanged = onSelectedIndexChanged;
```


[Improve this document](undefined/edit/master/app/ui/tab-view/styling/article.md)

[Demo Source](undefined/edit/master/app/ui/tab-view/styling)

---


**API Reference for the** [TabView Class](http://docs.nativescript.org/api-reference/modules/_ui_tab_view_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.support.v4.view.ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [UITabBarController](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITabBarController_Class/) |


