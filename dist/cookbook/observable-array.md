---
title: Observable Array
description: Observable Array SDK Examples
position: 28
slug: observable-array
---

# Observable Array

The `ObservableArray` class expands the `Array` class by providng a capability of detecting and responding to changes of a collection of objects.
The `ObservableArray` supports the known methods like `concat`, `push`, `reduce`, `slice`, `splice`, `reverse` and many more (full list [here](https://docs.nativescript.org/api-reference/classes/_data_observable_array_.observablearray)). 


## Basics

Using the `ObservableArray` requires the related module.
```JavaScript
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
```

Creating an `ObservableArray` with different class constructors.
```JavaScript
// Create ObservableArray with lenght
let myObservableArray = new ObservableArray(10);

// Create ObservableArray from array.
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
myObservableArray = new ObservableArray(arr);
// Create ObservableArray from arguments.
myObservableArray = new ObservableArray(1, 2, 3, 5, 8, 13, 21, 33, 55, 89);
```

One difference with the base array implementation is in the way the items are accessed through their index.
While in the common JS array we would do `array[index]` with an `ObservableArray` we need to use `getItem(index)` method.
```JavaScript
const firstItem = myObservableArray.getItem(0);
const secondItem = myObservableArray.getItem(1);
const thirdItem = myObservableArray.getItem(2);
```

Setting item at specified index using `setItem(index, item)` method.
```JavaScript
myObservableArray.on(ObservableArray.changeEvent, (args) => {
    console.log(args.index); // Index of the changed item (in this case 7).
    console.log(args.action); // Action (In this case "update")
    console.log(args.addedCount); // Number of added items (In this case 1).
    console.log(args.removed); // Array of removed items (in this case 33).
});
myObservableArray.setItem(7, 34); // at seventh (7) index setting value of 34
```

Using `push(item)` method to add single element to the array.
```JavaScript
myObservableArray.push(144);
```

Using `push()` method to add multiple elements from source array to the `ObservableArray`.
```JavaScript
myObservableArray.push([377, 233]);
```

Using `reverse()` method to reverse the elements order of the `ObservableArray`.
```JavaScript
myObservableArray.reverse();
```

Using `shift()` method to remove the first element of the array.
```JavaScript
myObservableArray.shift();
```

Using `sort()` method to sort the array. This method can accept a comparing function.
```JavaScript
myArray.sort();
```

Using `indexOf(item)` method to get the index of the desired item in the array.
```JavaScript
const index = myObservableArray.indexOf(13);
console.log(index);
```




[Improve this document](undefined/edit/master/app/data/observable-array/basics/article.md)

[Demo Source](undefined/edit/master/app/data/observable-array/basics)

---

**API Reference for** [Observable Array Module](https://docs.nativescript.org/api-reference/modules/_data_observable_array_)

**API Reference for** [Observable Array Class](https://docs.nativescript.org/api-reference/classes/_data_observable_array_.observablearray)




