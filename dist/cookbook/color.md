---
title: Color
description: Color SDK Examples
position: 8
slug: color
---

# Color

Represents a color object. Stores all color components (alpha (opacity), red, green, blue) in a [0..255] range.


## Basics

Using `Color` class requires the `tns-core-modules/color` module.

Creating a `Color` from a hex value.
```JavaScript
// Creates the red color
const color = new Color("#FF0000");
```

Creating a `Color` from a short hex value.
```JavaScript
// Creates the color #FF8800
const color = new Color("#F80");
```

Creating a `Color` from four ARGB values.
```JavaScript
// Creates the color with 100 alpha, 255 red, 100 green, 100 blue
const color = new Color(100, 255, 100, 100);
```

Creating a `Color` from a single ARGB value.
```JavaScript
// Creates the color with 100 alpha, 100 red, 100 green, 100 blue
const color = new Color(0x64646464);
```

Creating a `Color` from a known name. 
Full list of the known color names can be found [here](https://docs.nativescript.org/api-reference/modules/_color_known_colors_).
<snippet id='olor-color-name'/>

Comparing two colors for equality.
```JavaScript
const red = new Color("#FF0000");
const isRed = red.equals(new Color("red"));
console.log("Are both colors identical: ", isRed);
```

[Improve this document](undefined/edit/master/app/color/basics/article.md)

[Demo Source](undefined/edit/master/app/color/basics)

---

**API Reference for the** [Color Class](https://docs.nativescript.org/api-reference/classes/_color_.color.html)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.graphics.Color](https://developer.android.com/reference/android/graphics/Color.html) | [UIColor](https://developer.apple.com/reference/uikit/uicolor) | 

