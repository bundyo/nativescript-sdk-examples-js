---
title: Borders
description: Borders SDK Examples
position: 6
slug: borders
---

# Borders

NativeScript supports the creation of rounded corners through a subset of CSS properties.
The supported CSS vorder properties are `border-width`, `border-color`, `border-radius`.

* [Basics](#basics)
* [Border Radius](#border-radius)
* [Code Behind](#code-behind)

## Basics


| CSS Property        | JavaScript         | Property Description                       |
| :----------------:|:------------------:|:------------------------------------------:|
| border-color      | borderColor         | Sets a border color to the matched view’s. Accepts hex color value or `Color` instance.| 
| border-width        | borderWidth         | Sets a border width to the matched view’s. Accepts number value as a DIP (Device independent pixels).| 
| border-radius        | borderRadius         | Sets a border radius to the matched view’s. Accepts number value as a DIP (Device independent pixels).| 

Setting border properties thought CSS class.
```CSS
.border-props {
    border-width: 3;
    border-color: orangered;
    border-radius: 20;
}
```

[Improve this document](undefined/edit/master/app/ui/borders/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/borders/basics)

---

## Border Radius

The `border-radius` property allows us to create rounded corners for NativeScript elements.
This property can have from one, two or four values.

Rules about applying `border-radius` values:

- Four values - `border-radius: 15 50 30 5`; 
First value applies to the top-left corner, second value applies to the top-right corner, third value applies to bottom-right corner, and fourth value applies to the bottom-left corner.

- Two values - `border-radius: 5 10;` 
First value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners.

- One value - `border-radius: 10;` 
The value applies to all four corners, which are rounded equally.

```CSS
.no-top-left {
    border-radius: 0 20 20 20;
}

.no-top-left-right {
    border-radius: 0 0 20 20;
}

.no-bottom-left {
    border-radius: 20 20 20 0;
}

.no-bottom-left-right {
    border-radius: 20 20 0 0;
}

.radius-all-corners {
    border-radius: 20;
}

.no-radius-at-all {
    border-radius: 0;
}

.diagonal {
    border-radius: 20 0;
}

.reverse-diagonal {
    border-radius: 0 20;
}
```

[Improve this document](undefined/edit/master/app/ui/borders/border-radius/article.md)

[Demo Source](undefined/edit/master/app/ui/borders/border-radius)

---

## Code Behind

Borders can be set dynamically via code-behind implementation.
```JavaScript
label.borderWidth = 2;
label.borderColor = new Color("orangered");
label.borderRadius = 10;
```

[Improve this document](undefined/edit/master/app/ui/borders/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/borders/code-behind)

---




