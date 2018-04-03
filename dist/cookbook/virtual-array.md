---
title: Virtual Array
description: Virtual Array SDK Examples
position: 45
slug: virtual-array
---

# Virtual Array

The `VirtualArray` class is an advanced array-like class that helps to load items on demand.
Through property `loadSize` and the `itemLoadingEvent`, the virtual array is used to load items only when needed.

## Basics

Using the `VirtualArray` requires the related module.
<snippet id=`virtual-array-require`>

> **Note:** Virtual array will divide total number of items to pages using `loadSize` property value. When you request an
item at specific index the array will raise `itemsLoading` event with `ItemsLoading` argument index set to the first index of the requested page
and count set to number of items in this page.

> **Inportant:** If you have already loaded items in the requested page the array will raise multiple times `itemsLoading` event to request
all ranges of still not loaded items in this page.

<snippet id=`virtual-array-creation`/>

Handling `change` event when you load items using `load()` method.
```JavaScript
virtualArray.on(VirtualArray.changeEvent, (args) => {
    // Argument (args) is ChangedData<T> Interface.
    console.log(args.eventName); // args.eventName is "change".
    console.log(args.action); // args.action is "update".
    console.log(args.removed.length); // args.removed.length and result.addedCount are equal to number of loaded items with load() method.
});
```

[Improve this document](undefined/edit/master/app/data/virtual-array/basics/article.md)

[Demo Source](undefined/edit/master/app/data/virtual-array/basics)

---

**API Reference for** [Virtual Array Module](https://docs.nativescript.org/api-reference/modules/_data_virtual_array_)

**API Reference for** [Virtual Array Class](https://docs.nativescript.org/api-reference/classes/_data_virtual_array_.virtualarray)

