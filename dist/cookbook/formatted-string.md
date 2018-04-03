---
title: Formatted String
description: Formatted String SDK Examples
position: 15
slug: formatted-string
---

# Formatted String

NativeScript has a special class called FormattedString to support various text transformations and decorations. The FormattedString class can be used with all text-related components like Label, TextView, TextField and even Button.

```JavaScript
const FormattedString = require("tns-core-modules/text/formatted-string").FormattedString;
const Span = require("tns-core-modules/text/span").Span;
```

* [Basics](#basics)
* [Code Behind](#code-behind)

## Basics

NativeScript has a special class called [FormattedString](http://docs.nativescript.org/api-reference/classes/_text_formatted_string_.formattedstring.html) to support various text transformations and decorations. The `FormattedString` class can be used with all text-related components like Label, TextView, TextField and even Button.

Label with formatted string
```XML
<Label class="h3 p-15 m-15 text-left">
    <FormattedString>
        <Span text="Words " color="#006600" ></Span>
        <Span text="with " color="#990000" fontAttributes="Bold"></Span>
        <Span text="different " color="#ffcc00"></Span>
        <Span text="color."></Span>
    </FormattedString>
</Label>
```

TextField with formatted string
```XML
<TextField class="h3 p-15 m-15 text-left input input-border">
    <FormattedString>
        <Span text="Formatted " fontSize="16"></Span>
        <Span text="String " fontSize="18"></Span>
        <Span text="TextField" fontSize="22"></Span>
    </FormattedString>
</TextField>
```

TextView with formatted string
<snippet id="formatted-string-textview-xml"/>

Button with formatted string
<snippet id="formatted-string-button-xml"/>

[Improve this document](undefined/edit/master/app/ui/formatted-string/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/formatted-string/basics)

---

## Code Behind

`FormattedString`s could also be defined via code-behind.

Label with formatted string
```JavaScript
const label = new Label();

const formattedStringLabel = new FormattedString();
const firstLabelSpan = new Span();
const secondLabelSpan = new Span();

firstLabelSpan.text = "Formatted String ";
secondLabelSpan.text = "Label";

formattedStringLabel.spans.push(firstLabelSpan);
formattedStringLabel.spans.push(secondLabelSpan);

label.formattedText = formattedStringLabel;
```

TextField with formatted string
```JavaScript
const textField = new TextField();

const formattedStringTextField = new FormattedString();
const firstTextFieldSpan = new Span();
const secondTextFieldSpan = new Span();

firstTextFieldSpan.fontSize = 15;
firstTextFieldSpan.text = "Formatted String ";
secondTextFieldSpan.text = "TextField";

formattedStringTextField.spans.push(firstTextFieldSpan);
formattedStringTextField.spans.push(secondTextFieldSpan);

textField.formattedText = formattedStringTextField;
```

TextView with formatted string
<snippet id="formatted-string-textview-code"/>

Button with formatted string
<snippet id="formatted-string-button-code"/>

[Improve this document](undefined/edit/master/app/ui/formatted-string/code-behind/article.md)

[Demo Source](undefined/edit/master/app/ui/formatted-string/code-behind)

---


**API Reference for the** [Formatted String](http://docs.nativescript.org/api-reference/modules/_text_formatted_string_.html)


