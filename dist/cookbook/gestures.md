---
title: Gestures
description: Gestures SDK Examples
position: 17
slug: gestures
---

# Gestures

This module allows users to interact with an app via a set of different gestures. 
NativeScript provides a variety of APIs to help you create gestures.

* [Overview](#overview)
* [Tap](#tap)
* [Double Tap](#double-tap)
* [Long Press](#long-press)
* [Pan](#pan)
* [Pinch](#pinch)
* [Swipe](#swipe)
* [Rotation](#rotation)
* [Touch](#touch)

## Overview

Gestures, such as `tap`, `slide` and `pinch`, allow users to interact with your app by manipulating UI elements on the screen.
In NativeScript, `View` (the base class for all NativeScript UI elements) has `on` and `off` methods that let you subscribe or unsubscribe to all events and gestures recognized by the UI element.
As the first parameter, you pass an on or off method and the type of gesture you want to track. The second parameter is a function that is called each time the specified gesture is recognized. 
The function arguments contain additional information about the gesture, if applicable. 

- **on(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

- **off(** type _Number_ | name _String_ | names Comma separated _String_, callback _Function_... **)
   - **type** - _Number_ | **name** - _String_ | **names** - Comma separated _String_
   - **callback** - _Function_(args _GestureEventData_)

Example
```JavaScript
myView.on("tap", () => {
    console.log("myView tapped!");
})
```   

Gestures events can also be implemented directly in the XML layout by providing the callback method.
```XML
<StackLayout tap="onTap"/>
```
```JavaScript
exports.onTap = function(args) {
    console.log("Label tapped!");
};
```



## Double Tap

Action: Two taps in a quick succession.
```JavaScript
function onDoubleTap(args) {
    // args is of type GesturesEventData
    alert(`${args.eventName} event triggered for ${args.view}`);
}
exports.onDoubleTap = onDoubleTap;
```
```XML
<Label text="Double Tap me!" doubleTap="onDoubleTap" textWrap="true"/>
```

Possible implementations for `doubleTap` gesture:

 - Scale up the object with a predefined percentage, centered around the double-tapped region. 
If a user keeps repeating the double tap gesture, continue to scale up until the maximum scale is reached.
 - Scale up the smallest targetable view or returns it to its original scale in nested views.
 - Select text.

[Improve this document](undefined/edit/master/app/ui/gestures/double-tap/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/double-tap)

---

## Long Press

Action: Press your finger against the screen for a few moments.
```JavaScript
function onLongPress(args) {
    // args is of type GesturesEventData
    alert(`${args.eventName} gesture event triggered for ${args.view}`);
}
exports.onLongPress = onLongPress;
```
```XML
<Label text="Long Press me!" longPress="onLongPress" textWrap="true"/>
```

Possible implementation for `longPress` gesture: 
 - Select one or more items in a view and act upon the data using a contextual action bar. 
 - Enter data selection mode. 
 
> Tip: Avoid using long press for displaying contextual menus.

[Improve this document](undefined/edit/master/app/ui/gestures/long-press/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/long-press)

---

## Pan

Action: Press your finger down and immediately start moving it around. 
Pans are executed more slowly and allow for more precision, and the screen stops responding as soon as the finger is lifted off it.
```JavaScript
function onPan(args) {
    // args is of type PanGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.deltaX: ", args.deltaX);
    console.log("args.deltaY: ", args.deltaY);
}
exports.onPan = onPan;
```
```XML
<Label text="Pan me!" pan="onPan" textWrap="true"/>
```

Possible implementations for `pan` gesture:
- Drag'n'Drop functionality

[Improve this document](undefined/edit/master/app/ui/gestures/pan/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/pan)

---

## Pinch

Action: Touch the screen using two of your fingers, then move them towards each other or away from each other.
```JavaScript
function onPinch(args) {
    // args is of type GestureEventDataWithState
    // alert(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.scale: ", args.scale);
    console.log("args.state: ", args.state);
    console.log("args.getFocusX(): ", args.getFocusX());
    console.log("args.getFocusY(): ", args.getFocusY());
}
exports.onPinch = onPinch;
```
```XML
<Label text="Pinch me!" pinch="onPinch" textWrap="true"/>
```

Possible implementations for `pinch` gesture:
 - Zoom into content or out of content.



[Improve this document](undefined/edit/master/app/ui/gestures/pinch/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/pinch)

---

## Rotation

Action: Touch the screen using two of your fingers, then rotate them simultaneously left or right.
```JavaScript
function onRotation(args) {
    // args is of type RotationGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.rotation: ", args.rotation);
    console.log("args.state: ", args.state);
}
exports.onRotation = onRotation;
```
```XML
<Label text="Rotate me!" rotation="onRotation" textWrap="true"/>
```


[Improve this document](undefined/edit/master/app/ui/gestures/rotation/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/rotation)

---

## Swipe

Action: Swiftly slide your finger across the screen. 
Swipes are quick and affect the screen even after the finger is lifted off the screen.

```JavaScript
function onSwipe(args) {
    // args is of type SwipeGestureEventData
    alert(`${args.eventName} event triggered for ${args.view}`);
    console.log("args.direction: ", args.direction); // SwipeDirection enumeration: up, down, left, right
}
exports.onSwipe = onSwipe;
```
```XML
<Label text="Swipe me!" swipe="onSwipe" textWrap="true"/>
```

Possible implementation for `swipe` gesture: 
 - Navigate between views in the same hierarchy.


[Improve this document](undefined/edit/master/app/ui/gestures/swipe/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/swipe)

---

## Tap

Action: Briefly touch the screen.

```JavaScript
function onTap(args) {
    // args is of type GestureEventData
    alert(`${args.eventName} event triggered for ${args.view}`);
}
exports.onTap = onTap;
```
```XML
<Label text="Tap me!" tap="onTap" textWrap="true"/>
```


[Improve this document](undefined/edit/master/app/ui/gestures/tap/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/tap)

---

## Touch

Action: A finger action was performed.

This is a general purpose gesture that is triggered whenever a pointer (usually a finger)
 has performed a touch action (up, down, move or cancel). 
 `TouchGestureEventData` provides information about all the pointers currently on the screen and their position inside the view that triggered the event.

```JavaScript
function onTouch(args) {
    // args is of type TouchGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(args.action); // action: "up" | "move" | "down" | "cancel"
    console.log("getX(): ", args.getX());
    console.log("getY(): ", args.getY());
}
exports.onTouch = onTouch;
```
```XML
<Label text="Touch me!" touch="onTouch" textWrap="true"/>
```


[Improve this document](undefined/edit/master/app/ui/gestures/touch/article.md)

[Demo Source](undefined/edit/master/app/ui/gestures/touch)

---

 **API References**

 * [Gestures Module](https://docs.nativescript.org/api-reference/modules/_ui_gestures_)
 * [GesturesTypes Enumaration](https://docs.nativescript.org/api-reference/enums/_ui_gestures_.gesturetypes)
 * [GestureStateTypes Enumaration](https://docs.nativescript.org/api-reference/enums/_ui_gestures_.gesturestatetypes)
 * [SwipeDirection Enumaration](https://docs.nativescript.org/api-reference/enums/_ui_gestures_.swipedirection)
 * [GesturesEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.gestureeventdata)
 * [PinchGestureEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.pinchgestureeventdata)
 * [SwipeGestureEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.swipegestureeventdata)
 * [GestureEventDataWithState Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.gestureeventdatawithstate)
 * [TouchGestureEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.touchgestureeventdata)
 * [PanGestureEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.pangestureeventdata)
 * [RotationGestureEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.rotationgestureeventdata)
 * [Pointer Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.pointer)
 * [GesturesEventData Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_gestures_.gestureeventdata)

 **See Also**
[Implementation of Zoom using `pinch` and Dran'n'Drop using `pan` gestures](https://github.com/NickIliev/nativescript-zoom-and-drag)


