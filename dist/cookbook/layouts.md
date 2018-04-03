---
title: Layouts
description: Layouts SDK Examples
position: 24
slug: layouts
---

# Layouts

NativeScript provides a recursive layout system that sizes and positions views on the screen.
`Layout` is the base class for all views that provide positioning of child elements.
We can use the various layout containers to position elements. 
They evaluate the base properties of view such as `width`, `height`, `minWidth` and alignments, and expose additional properties for positioning child views (such as `padding`). 
Depending on the way they arrange the children, there are six types of layouts - `AbsoluteLayout`, `DockLayout`, `GridLayout`, `StackLayout`, `FlexboxLayout` and `WrapLayout`.

## Absolute Layout

The `AbsoluteLayout` is the simplest layout in NativeScript. 
It uses absolute left-top (x/y) coordinates to position its children and the place of each of them depends on its Top, Left, Width and Height properties. 
The `AbsoluteLayout` will not enforce any layout constraints on its elements and will not resize them at runtime when its size changes.

**API Reference for** [AbsoluteLayout Class](http://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_.html)

Basic usage and definition of `AbsoluteLayout` and the properties `left` and `top` to position its children views within the layout.
```XML
<AbsoluteLayout>
        <Button text="Left: 10, Top: 5" left="10" top="5"/>
        <Button text="Left: 30, Top: 80" left="30" top="80"/>
        <Button text="Left: 150, Top: 25" left="150" top="25"/>
        <Button text="Left: 70, Top: 150" left="70" top="150"/>
</AbsoluteLayout>
```

Creating of `AbsoluteLayout` in JavaScript.
```JavaScript
const absoluteLayout = new AbsoluteLayout();
absoluteLayout.addChild(button1);
absoluteLayout.addChild(button2);
absoluteLayout.addChild(button3);
absoluteLayout.addChild(button4);

AbsoluteLayout.setLeft(button1, 10);
AbsoluteLayout.setTop(button1, 5);

AbsoluteLayout.setLeft(button2, 30);
AbsoluteLayout.setTop(button2, 80);

AbsoluteLayout.setLeft(button3, 150);
AbsoluteLayout.setTop(button3, 25);

AbsoluteLayout.setLeft(button4, 70);
AbsoluteLayout.setTop(button4, 150);

stack.addChild(absoluteLayout);
```

[Improve this document](undefined/edit/master/app/ui/layouts/absolute-layout/article.md)

[Demo Source](undefined/edit/master/app/ui/layouts/absolute-layout)

---

## Dock Layout

The DockLayout is a layout that arranges its children at its own outer edges (top, bottom, left and right or center). 
To define the docking side of a child element, use its dock property. 
To dock a child element to the center of the `DockLayout`, it must be the last child of the DockLayout and the `stretchLastChild` property of the `DockLayout` must be set to `true`.
```XML
<DockLayout stretchLastChild="true">
        <Button dock="Left" text="left"/>
        <Button dock="Right" text="right"/>
        <Button dock="Bottom" text="bottom"/>
        <Button dock="Top" text="top"/>
        <Button text="Fill"/>
</DockLayout>
```

Using `DockLayout` via JavaScrupt code-behind file.
```JavaScript
const myDockLayout = new DockLayout();
myDockLayout.addChild(button1);
myDockLayout.addChild(button2);
myDockLayout.addChild(button3);
myDockLayout.addChild(button4);
myDockLayout.addChild(button5);
myDockLayout.stretchLastChild = true;

// const DockLayout = require("tns-core-modules/ui/layouts/dock-layout").DockLayout;
DockLayout.setDock(button1, "left");
DockLayout.setDock(button2, "right");
DockLayout.setDock(button3, "top");
DockLayout.setDock(button4, "bottom");
```

[Improve this document](undefined/edit/master/app/ui/layouts/dock-layout/article.md)

[Demo Source](undefined/edit/master/app/ui/layouts/dock-layout)

---

## Flexbox Layout

The FlexboxLayout is a non-conforming implementation of the [CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/) based on an existing Apache-2 licensed flexbox implementation hosted on [github.com/google/flexbox-layout](https://github.com/google/flexbox-layout).

[Improve this document](undefined/edit/master/app/ui/layouts/flexbox-layout/article.md)

[Demo Source](undefined/edit/master/app/ui/layouts/flexbox-layout)

---

## Grid Layout

The GridLayout is a layout that arranges its child elements in a table structure of rows and columns. A cell can contain multiple child elements. Each one can span over multiple rows and columns, and even overlap the others. The GridLayout has one column and one row by default. To add additional columns and rows, you have to specify column definition items (separated by commas) to the columns property and row definition items (separated by commas) to the rows property of the GridLayout. The width of a column and the height of a row can be specified as an absolute amount of pixels, as a percentage of the available space or automatically.

[Improve this document](undefined/edit/master/app/ui/layouts/grid-layout/article.md)

[Demo Source](undefined/edit/master/app/ui/layouts/grid-layout)

---

## Wrap Layout

The WrapLayout is similar to the StackLayout, but it does not just stack all child elements to one column/row, it wraps them to new columns/rows if no space is left. The WrapLayout is often used with items of the same size, but this is not a requirement.

[Improve this document](undefined/edit/master/app/ui/layouts/wrap-layout/article.md)

[Demo Source](undefined/edit/master/app/ui/layouts/wrap-layout)

---



