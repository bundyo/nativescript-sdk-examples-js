---
title: Text View
description: Text View SDK Examples
position: 41
slug: text-view
---

# Text View

The TextView component can be used to type large text in your app. The component can also be used show any content by setting the `editable` property to `false`.

```JavaScript
const textViewModule = require("tns-core-modules/ui/text-view");
```

* [Basics](#basics)
* [Code Behind](#code-behind)


## Basics

This example shows how to bind TextView `text`, `hint` and `editable` properties and to change their values as well as how to handle the text change.

XML
```XML
{% raw %}<Button text="{{ buttonText }}" class="btn btn-primary btn-active" tap="textViewEditStateChange"></Button>{% endraw %}
<Button text="Show text" class="btn btn-outline btn-active" tap="showText"></Button>
<StackLayout class="input-field">
{% raw %}    <Label text="{{ 'Result: ' + tvResult}}" textWrap="true" />{% endraw %}
            
    <Label text="Enter text:" class="label"></Label>
{% raw %}    <TextView text="{{ tvText }}" hint="{{ tvHint }}"  editable="{{ editState }}"{% endraw %}
        class="input input-border"></TextView>
</StackLayout>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("tvHint", "Enter text");
    vm.set("tvText", "");
    vm.set("tvResult", "");
    vm.set("editState", true);
    vm.set("buttonText", "Disable TextView");
    // handling TextView text change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "tvText") {
            vm.set("tvResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// changing TextView editable property value on button tap
function textViewEditStateChange(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    const editState = vm.get("editState");
    vm.set("editState", !editState);
    if (editState) {
        vm.set("buttonText", "Enable TextView");
    } else {
        vm.set("buttonText", "Disable TextView");
    }
}
// displaying the TextView text in an Alert dialog
function showText(args) {
    const page = args.object.page;
    const vm = page.bindingContext;

    dialogs.alert(`Text: ${vm.get("tvText")}`)
    .then(() => {
        console.log("Dialog closed!");
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.textViewEditStateChange = textViewEditStateChange;
exports.showText = showText;
```

[Improve this document](undefined/edit/master/app/ui/text-view/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/text-view/basics)

---

## Code Behind

Creating TextView via code behind and setting up `hint`, `text` and `editable` properties via Code-Behind.

XML
```XML
<StackLayout id="stackLayoutId">
{% raw %}    <Button text="Disable third TextView" tap="{{ onTap }}" />{% endraw %}
        
</StackLayout>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    // changing TextView editable property value on button tap
    vm.set("onTap", (btargs) => {
        const button = btargs.object;
        const thirdTextview = btargs.object.page.getViewById("thirdTextViewId");
        thirdTextview.editable = !thirdTextview.editable;
        if (thirdTextview.editable) {
            button.text = "Disable third TextView";
        } else {
            button.text = "Enable third TextView";
        }
    });
    page.bindingContext = vm;
}

function onPageLoaded(args) {
    const page = args.object;
    const vm = page.bindingContext;
    const stackLayout = page.getViewById("stackLayoutId");
    // creating new TextView and changing the hint
    const firstTextview = new textViewModule.TextView();
    firstTextview.hint = "Enter text";
    // creating new TextView and binding the text property
    const secondTextview = new textViewModule.TextView();
    const options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    };
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");
    // creating new TextView and changing the text
    const thirdTextview = new textViewModule.TextView();
    thirdTextview.id = "thirdTextViewId";
    thirdTextview.text = "Third TextView";
    // adding the newly created TextViews in a StackLayout
    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/text-view/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/text-view/code-behind)

---


**API Reference for the** [TextView Class](http://docs.nativescript.org/api-reference/modules/_ui_text_view_.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextView_Class/) |


