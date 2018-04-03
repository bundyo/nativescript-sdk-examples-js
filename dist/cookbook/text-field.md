---
title: Text Field
description: Text Field SDK Examples
position: 40
slug: text-field
---

# Text Field

The TextField component allows you to type text in your app. The TextField has attributes such as `secure` for handling password fields, and `autocapitalizationType` for specifying the text format the control should use.

```JavaScript
const textFieldModule = require("tns-core-modules/ui/text-field");
```

* [Basics](#basics)
* [Binding](#binding)
* [Code Behind](#code-behind)
* [Keyboard Type](#keyboard-type)


## Basics

<snippet id="textfield-require">

# Return press, Focus, Blur Events 
TextField provides multiple properties and several events for handling the user input and interaction.
To submit a value use the `returnPress` event along with the [returnKeyType](#return-key-type) property.
To handle a TextFiled being focused use the `focus` event. 
To handle an interaction when the user leaves TextField use the `blur` event.
To explicitly show and hide a keyboard, we can call the methods `focus` and `dismissSoftInput`.

```XML
<TextField hint="Enter date" 
{% raw %}        text='{{testDate, testDate | dateConverter(dateFormat)}}' {% endraw %}
        secure="false"
        keyboardType="datetime"
        returnKeyType="done" 
        returnPress="onReturnPress"
        autocorrect="false"
        maxLength="10"
        focus="onFocus" 
        blur="onBlur" 
        class="input input-border"/>
```

```JavaScript
function firstTfLoaded(args) {
    const firstTextfield = args.object;
    setTimeout(() => {
        firstTextfield.focus(); // Shows the soft input method, ususally a soft keyboard.
    }, 100);
}

function onReturnPress(args) {
    // returnPress event will be triggered when user submits a value
    const textField = args.object;
    // Gets or sets the placeholder text.
    console.log(textField.hint);
    // Gets or sets the input text.
    console.log(textField.text);
    // Gets or sets the secure option (e.g. for passwords).
    console.log(textField.secure);

    // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
    console.log(textField.keyboardType);
    // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
    console.log(textField.returnKeyType);
    // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
    console.log(textField.autocapitalizationType);

    // Gets or sets a value indicating when the text property will be updated.
    console.log(textField.updateTextTrigger);
    // Gets or sets whether the instance is editable.
    console.log(textField.editable);
    // Enables or disables autocorrection.
    console.log(textField.autocorrect);
    // Limits input to a certain number of characters.
    console.log(textField.maxLength);

    setTimeout(() => {
        textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}

function onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    console.log("onFocus event");
}

function onBlur(args) {
    // blur event will be triggered when the user leaves the TextField
    const textField = args.object;
    textField.dismissSoftInput();
    console.log("onBlur event");
}

exports.onNavigatingTo = onNavigatingTo;
exports.firstTfLoaded = firstTfLoaded;
exports.firstTfLoaded = firstTfLoaded;
exports.onReturnPress = onReturnPress;
exports.onFocus = onFocus;
exports.onBlur = onBlur;
```


# Return Key Type
The widgets that inherit from [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), i.e., [`TextField`](http://docs.nativescript.org/api-reference/classes/_ui_text_field_.textfield.html), have a **returnKeyType** property that gets or sets the soft keyboard return key type. Possible values are contained in the [`ReturnKeyType`](http://docs.nativescript.org/api-reference/modules/_ui_enums_.returnkeytype.html) enumeration.

## Done
 - Android: [IME_ACTION_DONE](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE)
 - iOS: [UIReturnKeyDone](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![done](../img/modules/keyboard/done.png "done")
```XML
<TextField class="input input-border" autocorrect="false" hint="done" text="" returnKeyType="done"/>
```

## Next
 - Android: [IME_ACTION_NEXT](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT)
 - iOS: [UIReturnKeyNext](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![next](../img/modules/keyboard/next.png "next")
```XML
<TextField class="input input-border" autocorrect="false" hint="next" text="" returnKeyType="next"/>
```

## Go
 - Android: [IME_ACTION_GO](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO)
 - iOS: [UIReturnKeyGo](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![go](../img/modules/keyboard/go.png "go")
```XML
<TextField class="input input-border" autocorrect="false" hint="go" text="" returnKeyType="go"/>
```

## Search
 - Android: [IME_ACTION_SEARCH](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH)
 - iOS: [UIReturnKeySearch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![search](../img/modules/keyboard/search.png "search")
```XML
<TextField class="input input-border" autocorrect="false" hint="search" text="" returnKeyType="search"/>
```

## Send
 - Android: [IME_ACTION_SEND](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND)
 - iOS: [UIReturnKeySend](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
 - ![send](../img/modules/keyboard/send.png "send")
```XML
<TextField class="input input-border" autocorrect="false" hint="send" text="" returnKeyType="send"/>
```


[Improve this document](undefined/edit/master/app/ui/text-field/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/text-field/basics)

---

## Binding

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

[Improve this document](undefined/edit/master/app/ui/text-field/binding/article.md)

[Demo Source](undefined/edit/master/app/ui/text-field/binding)

---

## Code Behind

Creating TextField via Code-Behind and setting up its properties.


XML
```XML
<StackLayout id="stackLayoutId">
{% raw %}    <Button text="{{ secureButton }}" tap="{{ onTap }}" />{% endraw %}
{% raw %}            <Label text="{{ 'Result: ' + tfResult}}" textWrap="true" />{% endraw %}
        
</StackLayout>
```

JavaScript
```JavaScript
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    // changing TextField secure property value on button tap
    vm.set("onTap", (btargs) => {
        const secure = vm.get("secure");
        vm.set("secure", !secure);
        if (secure) {
            vm.set("secureButton", "TextField secure:(OFF)");
        } else {
            vm.set("secureButton", "TextField secure:(ON)");
        }
    });
    // creating new TextField and binding the text property
    const options = {
        sourceProperty: "username",
        targetProperty: "text"
    };
    const firstTextField = new textFieldModule.TextField();
    firstTextField.updateTextTrigger = "textChanged";
    firstTextField.bind(options, vm);
    // registering for the TextField text change listener
    firstTextField.on("textChange", (args) => {

        vm.set("tfResult", args.object.text);
    });


    // creating new TextField and binding the secure property
    const secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    };
    const secondTextField = new textFieldModule.TextField();
    secondTextField.bind(secondOptions, vm);

    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
```

[Improve this document](undefined/edit/master/app/ui/text-field/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/text-field/code-behind)

---

## Keyboard Type


```XML
{% raw %}<Button text="{{ buttonText }}" class="btn btn-primary btn-active" tap="textFieldSecureStateChange"></Button>{% endraw %}
<Button text="Show text" class="btn btn-outline btn-active" tap="showText"></Button>
<StackLayout class="input-field">
{% raw %}    <Label text="{{ 'Result: ' + tfResult}}" textWrap="true" />{% endraw %}
            
    <Label text="Enter text:" class="label"></Label>
{% raw %}    <TextField hint="{{ tfHint }}" text="{{ tfText }}" secure="{{ secureState }}"/>{% endraw %}
            
</StackLayout>
```

## Keyboard Type
The widgets that inherit from [`EditableTextBase`](https://docs.nativescript.org/api-reference/classes/_ui_editor_text_base_.editabletextbase), i.e., [`TextField`](http://docs.nativescript.org/api-reference/classes/_ui_text_field_.textfield.html), have a **keyboardType** property that gets or sets the soft keyboard type that will be shown while in edit mode. Possible values are contained in the [`KeyboardType`](http://docs.nativescript.org/api-reference/modules/_ui_enums_.keyboardtype.html) enumeration. In the below given examnples are demostrated, how to set up the needed Keyboard types for both iOS and Android.

### Datetime
 - Android: [TYPE_CLASS_DATETIME](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_DATETIME) | [TYPE_DATETIME_VARIATION_NORMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_DATETIME_VARIATION_NORMAL)
 - iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![datetime](../img/modules/keyboard/datetime.png "datetime")

```XML
{% raw %}<Label text="{{ 'Result(datetime): ' + tfDateTimeResult}}" textWrap="true" />{% endraw %}
{% raw %}<TextField hint="Enter date" keyboardType="datetime" text="{{ tfDateTimeText }}" />{% endraw %}
```

### Phone
 - Android: [TYPE_CLASS_PHONE](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_PHONE)
 - iOS:  [UIKeyboardTypePhonePad](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![phone](../img/modules/keyboard/phone.png "phone")

```XML
{% raw %}<Label text="{{ 'Result(phone): ' + tfPhoneResult}}" textWrap="true" />{% endraw %}
{% raw %}<TextField hint="Enter phone number" keyboardType="phone" text="{{ tfPhoneText }}" />{% endraw %}
```

### Number
 - Android: [TYPE_CLASS_NUMBER](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_NUMBER) | [TYPE_NUMBER_VARIATION_NORMAL](http://developer.android.com/intl/es/reference/android/text/InputType.html#TYPE_NUMBER_VARIATION_NORMAL) | [TYPE_NUMBER_FLAG_SIGNED](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_SIGNED) | [TYPE_NUMBER_FLAG_DECIMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_DECIMAL)
 - iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![number](../img/modules/keyboard/number.png "number")

```XML
{% raw %}<Label text="{{ 'Result(number): ' + tfNumberResult}}" textWrap="true" />{% endraw %}
{% raw %}<TextField hint="Enter number" keyboardType="number" text="{{ tfNumberText }}" />{% endraw %}
```

### Url
 - Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_URI](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_URI)
 - iOS:  [UIKeyboardTypeURL](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![url](../img/modules/keyboard/url.png "url")

```XML
{% raw %}<Label text="{{ 'Result(url): ' + tfUrlResult}}" textWrap="true" />{% endraw %}
{% raw %}<TextField hint="Enter url" keyboardType="url" text="{{ tfUrlText }}" />{% endraw %}
```

### Email
 - Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_EMAIL_ADDRESS](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_EMAIL_ADDRESS)
 - iOS:  [UIKeyboardTypeEmailAddress](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
 - ![email](/img/modules/keyboard/email.png "email")

 ```XML
{% raw %}<Label text="{{ 'Result(email): ' + tfEmailResult}}" textWrap="true" />{% endraw %}
{% raw %}<TextField hint="Enter email address" keyboardType="email" text="{{ tfEmailText }}" />{% endraw %}
```


[Improve this document](undefined/edit/master/app/ui/text-field/keyboard-type/article.md)

[Demo Source](undefined/edit/master/app/ui/text-field/keyboard-type)

---


**API Reference for the** [TextField Class](http://docs.nativescript.org/api-reference/modules/_ui_text_field_.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.widget.EditText](http://developer.android.com/reference/android/widget/EditText.html) | [UITextField](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextField_Class/) |


