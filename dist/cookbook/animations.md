---
title: Animations
description: Animations SDK Examples
position: 3
slug: animations
---

# Animations

One of the ways to improve the attractiveness of your application is by adding animations. 
NativeScript exposes a simple and easy, but powerful enough API to allow animating almost every native element in your application.

* [Animated Properties](#animated-properties)
* [Chained Animations](#chained-animations)
* [Animating Multiple Views](#animating-multiple-views)

For your convenience, we exposed two ways of creating animations - Imperative (`Animation` class from `ui/animation` module) and Declarative (`CSS3` keyframe animations).
The Imperative way provides full control of any animation by calling animation methods directly via the NativeScript `ui/animation` module.
The declarative way uses the familiar CSS3 animations API and create CSS keyframe animations. 
more information about CSS Animations vsm be found in this section, while the current article will provide detailed informatiion on how to use the NativeScript `Animation` module.

The following classes, interfaces and enums can be explicitly used in your applications.
```JavaScript
// Main Animation class
const Animation = require("tns-core-modules/ui/animation").Animation;
```
```JavaScript
// AnimationCurveEnum: ease, easeIn, easeInOut, easeOut, linear, spring
const AnimationCurveEnum = require("tns-core-modules/ui/enums").AnimationCurve;
```
```JavaScript
// Full list of animating properties at https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition
const AnimationDefinition = require("tns-core-modules/ui/animation").AnimationDefinition;

// Defines a pair of values (horizontal and vertical) for translate and scale animations.
const Pair = require("tns-core-modules/ui/animation").Pair;
```

## Animating Properties

NativeScript allows us to animate the properties of the element we want. 
Once the parameters of the animate method are set (e.g. `scale`, `rotate`, `duration`, etc.), the properties will be animated.

NativeScript lets you animate the following properties:

`opacity`
`backgroundColor`
`translateX` and `translateY`
`scaleX` and `scaleY`
`rotate`

In every animation, you can control the following properties:

`duration`: The length of the animation.
`delay`: The amount of time to delay starting the animation.
`iterations`: Specifies how many times the animation should be played.
`curve`: The speed curve of the animation. Available options are defined below.

Property value types.
| JavaScript Property   | Value Description     |
|:----------------------|:----------------|
| `backgroundColor`     | Accepts hex or `Color` value. |
| `curve`               | Timing funciton that uses the `AnimationCurve` enumeration. |
| `delay`               | Delay the animation start in milliseconds. |
| `duration`            | Duration of animation in milliseconds. |
| `iterations`          | Number of times to repeat the animation. |
| `opacity`             | Number value (0 - 1 where 0 is full opacity). |
| `rotate`              | Number value for degrees (0 - 360 degrees). |
| `scale`               | Object value `{ x:1, y:2 }` (1 = Original scale). |
| `translate`           | Object value `{ x:100, y:200 }` (Translate by given DIPs). |

The first example will change the background color of a `view` from "red" to "green". 
```JavaScript
view.backgroundColor = new Color("red");
view.animate({
    backgroundColor: new Color("green"),
    duration: 2000
});
```

The following example shows a test case where all the properties are used in single animation.
```JavaScript
myView.animate({
    backgroundColor: "#414b7d",
    curve: AnimationCurveEnum.easeOut,
    delay: 300,
    duration: 3000,
    iterations: 3,
    opacity: 0.8,
    rotate: 360,
    scale: {
        x: 2,
        y: 2
    },
    translate: {
        x: 0,
        y: 200
    }
}).then(() => {
    console.log("Animation finished");
}).catch((e) => {
    console.log(e.message);
});
```

By default, an animation moves with a linear speed without acceleration or deceleration. This might look unnatural and different from the real world where objects need time to reach their top speed and can't stop immediately. The animation curve (sometimes called an easing or timing function) is used to give animations an illusion of inertia. It controls the animation speed by modifying the fraction of the duration. NativeScript comes with a number of predefined animation curves defined in [`AnimationCurve` enumeration](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve).

- `linear`: The simplest animation curve is linear. It maintains a constant speed while the animation is running.
- `easeIn`: The ease-in curve causes the animation to begin slowly, and then speed up as it progresses. 
- `easeOut`: An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
- `easeInOut`: An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- `spring`: A spring animation curve causes an animation to produce a spring (bounce) effect. 

In NativeScript, the animation curve is represented by the `AnimationCurve` enumeration and can be specified with the curve property of the animation.
```JavaScript
view.animate({
    translate: {
        x: 0,
        y: 100
    },
    duration: 1000,
    curve: AnimationCurve.easeIn
});
```

[Experiment with the different animation timing functions in the NativeScript Playground](https://play.nativescript.org/?template=play-tsc&id=RE7NqF&v=53)

It is easy to create your own animation curve by passing in the X and Y components of two control points of a cubic Bezier curve. 
Using Bezier curves is a common technique to create smooth curves in computer graphics and they are widely used in vector-based drawing tools. 
The values passed to the cubicBezier method control the curve shape. The animation speed will be adjusted based on the resulting path.

For help finding the cubicBezier values you need for your custom animation timing function, use the visual tools on [cubic-bezier.com](http://cubic-bezier.com). 
Once you find an animation path you like, simply copy and paste the cubic bezier values and paste them in the AnimationCurve.cubicBezier function. 
There should be four numbers (X,Y coordinates for each of the two points in the animation).

```JavaScript
view.animate({
    translate: {
        x: 0,
        y: 100
    },
    duration: 1000,
    curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
});
```

To animate a target view (or to create a complex animation for multiple views/layouts) we can an array of `AnimationDefinition` and pass it to the `Animation` constructor.
Using the `target` proerty in the definition, allows us full control of the animation object via code.
```JavaScript
const myView = args.object;

const animationDefinition = {
    target: myView, // provide the view to animate
    curve: AnimationCurveEnum.easeOut,
    duration: 1000,
    scale: {
        x: 0.2,
        y: 0.2
    },
    translate: {
        x: -50,
        y: -50
    }
};

animation = new Animation([animationDefinition], false);
animation.play()
    .then(() => {
        console.log("Animation finished");
        console.log("animation.isPlaying: ", animation.isPlaying);
    }).catch((e) => {
        console.log(e.message);
    });
```

Cancelling an animation via the `cancel` method.
```JavaScript
animation.cancel();
```

[Improve this document](undefined/edit/master/app/ui/animations/animating-properties/article.md)

[Demo Source](undefined/edit/master/app/ui/animations/animating-properties)

---

## Chaining Animations

Chained animations allows us to create a chain of conseclutive animations for one or multiple views.
The `animate` method returns a promise that we can use to chain multiple animations.
```JavaScript
const duration = 300;
myView.animate({
    opacity: 0,
    duration: duration
})
    .then(() => myView.animate({
        opacity: 1,
        duration: duration
    }))
    .then(() => myView.animate({
        translate: {
            x: 200,
            y: 200
        },
        duration: duration
    }))
    .then(() => myView.animate({
        translate: {
            x: 0,
            y: 0
        },
        duration: duration
    }))
    .then(() => myView.animate({
        scale: {
            x: 5,
            y: 5
        },
        duration: duration
    }))
    .then(() => myView.animate({
        scale: {
            x: 1,
            y: 1
        },
        duration: duration
    }))
    .then(() => myView.animate({
        rotate: 180,
        duration: duration
    }))
    .then(() => myView.animate({
        rotate: 0,
        duration: duration
    }))
    .then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });
```

[Improve this document](undefined/edit/master/app/ui/animations/chaining-animations/article.md)

[Demo Source](undefined/edit/master/app/ui/animations/chaining-animations)

---

## Multiple Views

When needed, we can animate multiple views simultaneously. 
It is as easy as placing all the animations in a single array and playing them with the help of `Animation` class.
```JavaScript
const definitions = [];

const definition1 = {
    target: view1,
    translate: {
        x: 200,
        y: 0
    },
    duration: 1000
};
definitions.push(definition1);

const definition2 = {
    target: view2,
    translate: {
        x: 0,
        y: 200
    },
    duration: 1000
};
definitions.push(definition2);

const definition3 = {
    target: view3,
    translate: {
        x: -200,
        y: 0
    },
    duration: 1000
};
definitions.push(definition3);

const definition4 = {
    target: view4,
    translate: {
        x: 0,
        y: -200
    },
    duration: 1000
};
definitions.push(definition4);

const animationSet = new Animation(definitions);

animationSet.play()
    .then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });
```

[Improve this document](undefined/edit/master/app/ui/animations/multiple-views/article.md)

[Demo Source](undefined/edit/master/app/ui/animations/multiple-views)

---


**API Reference for the** [Animation Class](https://docs.nativescript.org/api-reference/classes/_ui_animation_.animation)

**API Reference for the** [CubicBezierAnimationCurve Class](https://docs.nativescript.org/api-reference/classes/_ui_animation_.cubicbezieranimationcurve)

**API Reference for the** [AnimationDefinition Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition)

**API Reference for the** [Cancelable Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.cancelable)

**API Reference for the** [Pair Interface](https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.pair)

**API Reference for the** [AnimationCurve Enum](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve)

**See also:** [CSS Animations](https://docs.nativescript.org/ui/animation-css)



