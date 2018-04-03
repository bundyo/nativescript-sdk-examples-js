---
title: Dialogs
description: Dialogs SDK Examples
position: 12
slug: dialogs
---

# Dialogs

NativeScript lets us create dialogs in your app in a manner similar to the web browser. 
We can create alerts, confirmations, prompts, logins and dialogs that require action.
The module `tns-core-modules/ui/dialogs` is loaded globally in every NativeScript applicaiton so 
there is no need for explicit require/import of the module.

* [Alert](#alert)
* [Confirm](#confirm)
* [Prompt](#prompt)
* [Login](#login)
* [Action](#action)

> **NOTE**: You can call dialog functions with parameters similar to the web browser API or the `options` object. All dialog functions return a `Promise` object. **In both iOS and Android, dialogs will not block your code execution!**

> **TIP**: You can try [this NativeScript Playground project](https://play.nativescript.org/?template=play-ng&id=dWQhV7) to see all of this article’s examples in action on your device.

## Action

An Action Dialog will require a particular activity from the user.
The `action` method accepts multiple parametes or an `ActionOptions` object 
with keys `title`, `message`, `cancelBUttonText`, `actions`, and `cancelable`(Android only property).

Action with parameters (Web browser style).
```JavaScript
alert("Your message").then(() => {
    console.log("Dialog closed!");
});
```

Action with `ActionOptions` object.
```JavaScript
const alertOptions = {
    title: "Your Title",
    message: "Your message",
    okButtonText: "OK",
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
};

alert(alertOptions).then(() => {
    console.log("Dialog closed!");
});
```

[Improve this document](undefined/edit/master/app/ui/dialogs/action/article.md)

[Demo Source](undefined/edit/master/app/ui/dialogs/action)

---

## Alert

An Alert Dialog will notify the user for an action that has happened.
The `alert` method accepts string value to be displayed as the alert message or `AlertOptions` object 
with keys `title`, `message`, `okBUttonText`, and `cancelable`(Android only property).

Alert with string message (Web browser style).
```JavaScript
alert("Your message").then(() => {
    console.log("Dialog closed!");
});
```

Alert with `AlertOptions` object.
```JavaScript
const alertOptions = {
    title: "Your Title",
    message: "Your message",
    okButtonText: "OK",
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
};

alert(alertOptions).then(() => {
    console.log("Dialog closed!");
});
```

[Improve this document](undefined/edit/master/app/ui/dialogs/alert/article.md)

[Demo Source](undefined/edit/master/app/ui/dialogs/alert)

---

## Confirm

A Confirm Dialog will expect the user to accept or reject the action that is about the happen.

Confirm with parameters (Web browser style).
```JavaScript
confirm("Your message").then((result) => {
    console.log("Dialog result: ", result);
});
```

Confirm with `ConfirmOptions` object.
```JavaScript
const confirmOptions = {
    title: "Your title",
    message: "Your message",
    okButtonText: "Ok",
    cancelButtonText: "Cancel",
    neutralButtonText: "Neutral"
};
confirm(confirmOptions)
    .then((result) => {
        // result can be true/false/undefined
        console.log(result);
    });
```

[Improve this document](undefined/edit/master/app/ui/dialogs/confirm/article.md)

[Demo Source](undefined/edit/master/app/ui/dialogs/confirm)

---

## Login

A Login Dialog will wait for the user to input their credentials.

login with parameters (Web browser style).
```JavaScript
login("Your message", "Username", "Password").then((r) => {
    console.log("Dialog result: ", r.result);
    console.log(`User: ${r.userName}  Password: ${r.password}`, r.userName, r.password);
});
```

login with `ConfirmOptions` object.
```JavaScript
const loginOptions = {
    title: "Your title",
    message: "Your message",
    okButtonText: "Login",
    cancelButtonText: "Cancel",
    neutralButtonText: "Neutral",
    userName: "Username",
    password: "Password"
};
login(loginOptions).then((r) => {
    console.log("Dialog result: ", r.result);
    console.log(`User: ${r.userName}  Password: ${r.password}`, r.userName, r.password);
});
```

[Improve this document](undefined/edit/master/app/ui/dialogs/login/article.md)

[Demo Source](undefined/edit/master/app/ui/dialogs/login)

---

## Prompt

A Prompt Dialog will request for an input.

Prompt with parameters (Web browser style).
```JavaScript
prompt("Your message", "Default text").then((r) => {
    console.log("Dialog result: ", r.result);
    console.log("Text: ", r.text);
});
```

Prompt with `ConfirmOptions` object.
```JavaScript
const promptOptions = {
    title: "Your title",
    message: "Your message",
    okButtonText: "Ok",
    cancelButtonText: "Cancel",
    neutralButtonText: "Neutral",
    defaultText: "Default",
    inputType: "password" // text, password, or email
};
prompt(promptOptions).then((r) => {
    console.log("Dialog result: ", r.result);
    console.log("Text: ", r.text);
});
```

[Improve this document](undefined/edit/master/app/ui/dialogs/prompt/article.md)

[Demo Source](undefined/edit/master/app/ui/dialogs/prompt)

---


**API Reference for the** [Dialogs module](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_)

**API Reference for the** [ActionOptions interface](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.actionoptions)
**API Reference for the** [AlertOptions interface](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.alertoptions)
**API Reference for the** [ConfirmOptions interface](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.confirmoptions)
**API Reference for the** [LoginOptions interface](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.loginoptions)
**API Reference for the** [PromptOptions interface](https://docs.nativescript.org/api-reference/interfaces/_ui_dialogs_.promptoptions)


