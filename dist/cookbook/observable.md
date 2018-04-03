---
title: Observable
description: Observable SDK Examples
position: 27
slug: observable
---

# Observable

Generally, almost every UI control could be bound to a data object (all NativeScript controls are created with data binding in mind). 
After the code has met the following requirements, data-binding can be used out of the box.

- The target object has to be a successor of the `Bindable` class. **All NativeScript UI controls inherit from `Bindable` class**.
- For one-way binding, using a plain property is sufficient.
- For two-way data binding, the target property should be a dependency property.
- The data object should raise a `propertyChange` event for every change in the value of its property in order to notify all of the listeners interested in the change.

THe article will shows basic and advanced binding techniques including the architectural pattern used in NativeScript framework - MVVM (Model-View-ViewModel).

* [Basics](#basics)
* [Two-Way Binding](#two-way)
* [MPlain Object Binding](#plain-object-binding)
* [Parent Binding](#parent-binding)
* [MVVM Pattern in NativeScript](#mvvm-pattern)


## Basics

Using Observable objects requires the `tns-core-modules/data/observable` module.
```JavaScript
const Observable = require("tns-core-modules/data/observable").Observable;
const fromObject = require("tns-core-modules/data/observable").fromObject;
const fromObjectRecursive = require("tns-core-modules/data/observable").fromObjectRecursive;
```

Creating an `Observable` and setting different observable types in the UI.
```JavaScript
const page = args.object;

// creating an Observable and setting title propertu with a string value
const viewModel = new Observable();
viewModel.set("myString", "Jonh Doe");
viewModel.set("myNumber", 42);
viewModel.set("myBoolean", true);

// fromObject creates an Observable instance and sets its properties according to the supplied JS object
viewModel.set("myObject", fromObject({ "myColor": "Lightgray" }));

// fromObjectRecursive will create new Observable for each nested object (expect arrays and functions)
viewModel.set("myNestedObject", fromObjectRecursive({
    client: "JohnDoe",
    favoriteColor: { hisColor: "Green" } // hisColor is an Observable
}));

// Binding function on event
viewModel.set("onLabelTap", () => {
    console.log("Tapped");
});

// when the observable was created recursivly chaning the ensted object's property will trigger propertyChange
viewModel.get("myNestedObject").favoriteColor.hisColor = "Lightblue"; // myNestedObject.favoriteColor.myColor is now "Lightblue"

// bind the view-model to the view's bindingContext property (in this case the curent page)
page.bindingContext = viewModel;
```
```XML
{% raw %}<Label text="{{ myString }}" tap="{{ onLabelTap }}" textWrap="true" backgroundColor="{{ myNestedObject.favoriteColor.hisColor }}" class="h2 text-center"/>{% endraw %}
{% raw %}<Label text="{{ myNumber }}" textWrap="true" backgroundColor="{{ myObject.myColor }}" class="h2 text-center" fontSize="{{ myNumber }}"/>{% endraw %}
{% raw %}<Label text="{{ myBoolean }}" textWrap="true" backgroundColor="{{ myNestedObject.favoriteColor.hisColor }}" visibility="{{ myBoolean ? 'visible' : 'collapsed' }}" class="h2 text-center"/>{% endraw %}
{% raw %}<Label text="{{ myObject.myColor }}" backgroundColor="{{ myObject.myColor }}" textWrap="true" class="h2 text-center"/>{% endraw %}
{% raw %}<Label text="{{ myNestedObject.favoriteColor.hisColor }}" backgroundColor="{{ myNestedObject.favoriteColor.hisColor }}" textWrap="true" class="h2 text-center"/>{% endraw %}
```

Getting an observable property value.
```JavaScript
console.log(viewModel.get("muString")); // Jonh Doe
console.log(viewModel.get("myNumber")); // 42
console.log(viewModel.get("myBoolean")); // true
console.log(viewModel.get("myObject").myColor); // Red
console.log(viewModel.get("myNestedObject").favoriteColor); // { "hisColor": "Lightblue" }
```

Using `propertyChangeEvent` and responding to property changes with arguments of type [`PropertyChangeData`](https://docs.nativescript.org/api-reference/interfaces/_data_observable_.propertychangedata).
```JavaScript
viewModel.addEventListener(Observable.propertyChangeEvent, (args) => {
    // args is of type PropertyChangeData
    console.log("propertyChangeEvent [eventName]: ", args.eventName);
    console.log("propertyChangeEvent [propertyName]: ", args.propertyName);
    console.log("propertyChangeEvent [value]: ", args.value);
    console.log("propertyChangeEvent [oldValue]: ", args.oldValue);
});
```

[Improve this document](undefined/edit/master/app/data/observable/basics/article.md)

[Demo Source](undefined/edit/master/app/data/observable/basics)

---

## Mvvm Pattern

MVVM ([(Model-View-ViewModel](https://en.wikipedia.org/wiki/Model–view–viewmodel)) is the base pattern on which NativeScript framework is build.
MVVM facilitates a separation of development of the graphical user interface from development of the business logic or back-end logic (the data model).

 * **Model:** The model defines and represents the data. Separating the model from the various views that might use it allows for code reuse.
 * **View:** The view represents the UI, which in NativeScript is written in XML. The view is often data-bound to the view model so that changes made to the view model in JavaScript instantly trigger visual changes to UI components.
 * **View Model:** The view model contains the application logic (often including the model), and exposes the data to the view. NativeScript provides a module called `Observable`, which facilitates creating a view model object that can be bound to the view.

The biggest benefit of separating models, views, and view models, is that you are able to use two-way data binding; that is, changes to data in the model get instantly reflected on the view, and vice versa. The other big benefit is code reuse, as you're often able to reuse models and view models across views.

Complete example fdemonstrating MVVM pattern in NativeScript application.

ViewModel (`main-view-model.js`)
```JavaScript
const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();

    viewModel.set("counter", 42);
    viewModel.set("message", getMessage(viewModel.counter));

    viewModel.onTap = function () {
        this.set("message", getMessage(--this.counter));
    };

    return viewModel;
}
exports.createViewModel = createViewModel;
```

Code-Behnid Page (`main-page.js`)
```JavaScript
const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
    const page = args.object;

    // using the view model as binding context for the current page
    const mainViewModel = createViewModel();
    page.bindingContext = mainViewModel;
}
exports.onNavigatingTo = onNavigatingTo;
```

XML Layout (`main-page.xml`)
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="onNavigatingTo" class="page">
    <Page.actionBar>
        <ActionBar title="MVVM Pattern"/>
    </Page.actionBar>
    <StackLayout class="p-20">
        <Label text="Tap the button" class="h1 text-center"/>
        <!-- using the view model method `onTap` and property `message` -->
{% raw %}        <Button text="TAP" tap="{{ onTap }}" class="btn btn-primary btn-active"/>{% endraw %}
{% raw %}        <Label text="{{ message }}" class="h2 text-center" textWrap="true"/>{% endraw %}
    </StackLayout>
</Page>
```

[Improve this document](undefined/edit/master/app/data/observable/mvvm-pattern/article.md)

[Demo Source](undefined/edit/master/app/data/observable/mvvm-pattern)

---

## Parent Binding

Another common case in working with bindings is requesting access to the parent binding context. It is because it might be different from the bindingContext of the child and might contain information, which the child has to use. Generally, the bindingContext is inheritable, but not when the elements (items) are created dynamically based on some data source. For example, ListView creates its child items based on an itemТemplate, which describes what the ListView element will look like. When this element is added to the visual tree, it gets for binding context an element from a ListView items array (with the corresponding index). This process creates a new binding context chain for the child item and its inner UI elements. So, the inner UI element cannot access the binding context of the `ListView`. In order to solve this problem, NativeScript binding infrastructure has two special keywords: `$parent` and `$parents`. While the first one denotes the binding context of the direct parent visual element, the second one can be used as an array (with a number or string index). This gives you the option to choose either N levels of UI nesting or get a parent UI element with a given type. Let's see how this works in a realistic example.

```XML
<Page navigatingTo="onNavigatingTo" xmlns="http://schemas.nativescript.org/tns.xsd">
    <Page.actionBar>
        <ActionBar title="Parents Binding"/>
    </Page.actionBar>
    <GridLayout rows="*" >
{% raw %}        <ListView items="{{ items }}">{% endraw %}
            <!--Describing how the element will look like-->
            <ListView.itemTemplate>
                <GridLayout columns="auto, *">
{% raw %}                    <Label text="{{ $value }}" col="0"/>{% endraw %}
                    <!--The TextField has a different bindingCotnext from the ListView, but has to use its properties. Thus the parents['ListView'] has to be used.-->
{% raw %}                    <TextField text="{{ $parents['ListView'].test, $parents['ListView'].test }}" col="1"/>{% endraw %}
                </GridLayout>
            </ListView.itemTemplate>
        </ListView>
    </GridLayout>
</Page>
```
```JavaScript
const fromObject = require("data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = fromObject({
        items: [1, 2, 3],
        test: "Parent binding! (the value came from the `test` property )"
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/data/observable/parent-binding/article.md)

[Demo Source](undefined/edit/master/app/data/observable/parent-binding)

---

## Plain Object Binding

A very common case is to provide a list (array) of plain elements (numbers, dates, strings) to a ListView items collection. All examples above demonstrate how to bind a UI element to a property of the bindingContext. If there is only plain data, there is no property to bind, so the binding should be to the entire object. Here comes another feature of NativeScript binding - object or value binding. To refer to the entire object, which is Date() in the example, the keyword `$value` should be used.

```XML
{% raw %}<ListView items="{{ items }}" class="list-group">{% endraw %}
    <ListView.itemTemplate>
        <StackLayout class="list-group-item">
            <Label text="Date" class="list-group-item-heading" />
            <!-- use $value to bind plain objects (e.g. number, string, Date)-->
{% raw %}            <Label text="{{ $value }}" class="list-group-item-text" />{% endraw %}
        </StackLayout>
    </ListView.itemTemplate>
</ListView>
```
```JavaScript
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onNavigatingTo(args) {
    const page = args.object;

    const list = [];
    for (let i = 0; i < 15; i++) {
        list.push(new Date());
    }

    const viewModel = fromObject({
        items: list
    });

    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
```

[Improve this document](undefined/edit/master/app/data/observable/plain-object-binding/article.md)

[Demo Source](undefined/edit/master/app/data/observable/plain-object-binding)

---

## Two Way

Two-way data binding is a way of binding that combines binding from and to the application UI (binding to model and binding to UI)
A typical example is a `TextField` that reads its value from the Model but also changes the Model based on user input.

The example is demonstrating two-way binding via code-behind. The `TextField` accepts an empty string as initial value (the same binding is used for the `Label` element).
Then when the user inputs new string into the `TextField`, the two-way binding will update the label's `text` property simultaneously.

```JavaScript
const observableSource = fromObject({
    myTextSource: "" // initial binding value (in this case empty string)
});

// create the TextField
const targetTextField = new TextField();
// create the Label
const targetLabel = new Label();
stackLayout.addChild(targetTextField);
stackLayout.addChild(targetLabel);

// binding the TextField with BindingOptions
const textFieldBindingOptions = {
    sourceProperty: "myTextSource",
    targetProperty: "text",
    twoWay: true
};
targetTextField.bind(textFieldBindingOptions, observableSource);

// binding the Label with BindingOptions
const labelBindingOptions = {
    sourceProperty: "myTextSource",
    targetProperty: "text",
    twoWay: false // we don't need two-way for the Label as it can not accept user input
};
targetLabel.bind(labelBindingOptions, observableSource);
```

To create a binding in XML, a source object is needed, which will be created the same way, as in the example above. Then the binding is described in the XML (using a mustache syntax). 
With an XML declaration, only the names of the properties are set - for the target: text, and for source: textSource. 
The interesting thing here is that the source of the binding is not specified explicitly. More about this topic will be discussed in the Binding source article.
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
    <StackLayout>
        <TextField text="{{ textSource }}" />
    </StackLayout>
</Page>
```

> **Note:** When creating UI elements with an XML declaration, the data binding is two-way by default.

[Improve this document](undefined/edit/master/app/data/observable/two-way/article.md)

[Demo Source](undefined/edit/master/app/data/observable/two-way)

---

**API Reference for** [Observable Module](https://docs.nativescript.org/api-reference/modules/_data_observable_)

**API Reference for** [EventData Interface](https://docs.nativescript.org/api-reference/interfaces/_data_observable_.eventdata)

**API Reference for** [Bindable Module](https://docs.nativescript.org/api-reference/modules/_ui_core_bindable_)

**API Reference for** [BindingOptions Intergace](https://docs.nativescript.org/api-reference/interfaces/_ui_core_bindable_.bindingoptions)

**See Also** [Data Binding Concepts in NativeScript](https://docs.nativescript.org/core-concepts/data-binding)


