---
title: Switch
description: Switch SDK Examples
position: 38
slug: switch
---

# Switch

The switch component allows users to toggle a control between two states.
The default state of the component is off, or `false`, however you can change the state by setting the `checked` property to a boolean value.
To handle the state change event you can use the `checkedChange` property, which notifies the app when the value has changed.
Another useful feature of the component is the `isEnable` property, which gives the functionality to make the component inactive.

```JavaScript
const switchModule = require("tns-core-modules/ui/switch");
```

* [Basics](#basics)
* [Styling](#styling)
* [Code Behind](#code-behind)


## Basics

The example shows, how to handle `checkedChange` event and how to set up the `checked` and `isEnabled` properties. 

XML
```XML
<GridLayout rows="auto auto auto" columns="* *" class="m-5">
{% raw %}    <Label class="h3 m-15" text="{{ firstSwitchState }}" textWrap="true" row="0" col="0"/>{% endraw %}
{% raw %}    <Switch class="m-15" checked="{{ firstSwitch }}" isEnabled="{{ isEnabledSwitch }}" checkedChange="onFirstChecked" row="0" col="1"/>{% endraw %}
{% raw %}    <Label class="h3 m-15" text="{{ secondSwitchState }}" textWrap="true" row="1" col="0"/>{% endraw %}
{% raw %}    <Switch class="m-15" checked="{{ secondSwitch }}" loaded="switchLoaded" checkedChange="onSecondChecked" row="1" col="1"/>{% endraw %}
{% raw %}    <Button row="2" col="0" colSpan="2" text="{{ buttonText }}" tap="onTap" />{% endraw %}
</GridLayout>
```


```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    // set up the initial values for the switch components
    const vm = new observableModule.Observable();
    vm.set("buttonText", "Disable first switch");
    vm.set("firstSwitchState", "OFF");
    vm.set("secondSwitchState", "ON");
    vm.set("firstSwitch", false);
    vm.set("secondSwitch", true);
    vm.set("isEnabledSwitch", true);
    // handle checked change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "firstSwitch") {
            if (propertyChangeData.value) {
                vm.set("firstSwitchState", "ON");
            } else {
                vm.set("firstSwitchState", "OFF");
            }
        }
    });
    page.bindingContext = vm;
}
// handle checked change
function switchLoaded(args) {
    const switchComponent = args.object;
    switchComponent.on("checkedChange", (sargs) => {
        console.log("checkedChange ", sargs.object.checked);
        const page = sargs.object.page;
        const vm = page.bindingContext;
        if (sargs.object.checked) {
            vm.set("secondSwitchState", "ON");
        } else {
            vm.set("secondSwitchState", "OFF");
        }
    });
}
// setting up isEnabled property
function onTap(args) {
    const page = args.object;
    const vm = page.bindingContext;
    const isEnabledSwitch = vm.get("isEnabledSwitch");
    vm.set("isEnabledSwitch", !isEnabledSwitch);
    if (isEnabledSwitch) {
        vm.set("buttonText", "Enable first switch");
    } else {
        vm.set("buttonText", "Disable first switch");
    }
}

exports.switchLoaded = switchLoaded;
exports.onNavigatingTo = onNavigatingTo;
exports.onTap = onTap;
```

[Improve this document](undefined/edit/master/app/ui/switch/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/switch/basics)

---

## Code Behind

In the following example is shown, how to create Switch via Code-behind


XML
```XML
<StackLayout id="stackLayoutId">
{% raw %}    <Label text="{{ 'Result: ' + swResult}}" textWrap="true" />{% endraw %}
</StackLayout>
```

JavaScript
```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("swResult", "false");
    vm.set("secure", false);
    // creating new Switch and binding the checked property
    const options = {
        sourceProperty: "enabled",
        targetProperty: "checked"
    };
    const mySwitch = new switchModule.Switch();
    mySwitch.bind(options, vm);
    // setting up mySwitch.checked to false
    vm.set("enabled", false);
    mySwitch.on("checkedChange", (args) => {
        vm.set("swResult", args.object.checked);
    });

    stackLayout.addChild(mySwitch);
    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/switch/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/switch/code-behind)

---

## Styling

This example shows how to bind TextField `text`, `hint` and `secure` properties as well as how to handle the text change.

XML
```XML
{% raw %}<Button text="{{ buttonText }}" class="btn btn-primary btn-active" tap="textFieldSecureStateChange"></Button>{% endraw %}
<Button text="Show text" class="btn btn-outline btn-active" tap="showText"></Button>
<StackLayout class="input-field">
{% raw %}    <Label text="{{ 'Result: ' + tfResult}}" textWrap="true" />{% endraw %}
            
    <Label text="Enter text:" class="label"></Label>
{% raw %}    <TextField hint="{{ tfHint }}" text="{{ tfText }}" secure="{{ secureState }}"/>{% endraw %}
            
</StackLayout>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    vm.set("firstSwitchResult", true);
    vm.set("firstSwitch", true);
    vm.set("secondSwitchResult", false);
    vm.set("secondSwitch", false);
    vm.set("thirdSwitchResult", true);
    vm.set("thirdSwitch", true);
    // handling Switch checked change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        switch (propertyChangeData.propertyName) {
            case "firstSwitch":
                vm.set("firstSwitchResult", propertyChangeData.value);
                break;
            case "secondSwitch":
                vm.set("secondSwitchResult", propertyChangeData.value);
                break;
            case "thirdSwitch":
                vm.set("thirdSwitchResult", propertyChangeData.value);
                break;

            default:
                break;
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/ui/switch/styling/article.md)

[Demo Source](undefined/edit/master/app/ui/switch/styling)

---


**API Reference for the** [Switch Class](http://docs.nativescript.org/api-reference/modules/_ui_switch_.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.Switch](http://developer.android.com/reference/android/widget/Switch.html) | [UISwitch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UISwitch_Class/) |


