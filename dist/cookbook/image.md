---
title: Image
description: Image SDK Examples
position: 20
slug: image
---

# Image


The `Image` widget shows an image in your mobile application. 
In a NativeScript application images are added to an application either declaratively (XML) or with code. We can load the image from an `ImageSource` or a URL using the `src` property.
Behind the `Image` module stands `UIImage` on iOS and `android.widget.ImageView` on Android.
As working with images is an essential part of each mobile application following [the best practices](https://docs.nativescript.org/best-practices/images-optimisations) is a must.


## Basics

The prefix of the `src` value specifies where the image will be loaded form. 
The possible options are:

* [From applicaiton resource](#using-resources) (`res://` prefix)
* [From local file system](#using-local-files) (`~/` prefix)
* [From URL](#using-online-resources) (`http://` or `https://` prefix)

### Using Resources

Using the `res://` prefix you can load a resource image. This is the suggested approach, as it uses the native methods for loading the best image for the current device screen density and resolution.

Loading an image from application resources (in `App_Resources/<platform>`).
```XML
<Image src="res://icon" stretch="aspectFill" />
```
```JavaScript
const newImage = new Image();
newImage.src = "res://icon";
newImage.stretch = "aspectFill";
```

### Using Local Files

Using the `~/` prefix, you can load images relative to the App folder inside your project.

Loading an image from the local file system. In the example below the full path of the image is `<project-folder>/app/images/logo.png`
```XML
<Image src="~/images/logo.png" stretch="aspectFill" />
```

### Using Online Resources

Web images have an http:// or https:// prefix. When such an image is loaded, an asynchronous http request will be sent and the image will be shown if the request is successful.

Loading an image from URL. For large images use `loadMode` property to avoid blocking of the UI (see the [best practices](https://docs.nativescript.org/best-practices/images-optimisations) article for more information)
```XML
<Image src="https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/NativeScript_logo.png" stretch="aspectFill" />
```


[Improve this document](undefined/edit/master/app/ui/image/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/image/basics)

---

## Binding


Common scenario would be to bind the `src` property to a dynamically received value.

Loading an image with `src` property binding.
```XML
{% raw %}<Image src="{{ imageUri }}" width="100" height="100" stretch="aspectFill" />{% endraw %}
```
```JavaScript
const vm = new Observable();
vm.set("imageUri", "~/images/logo.png");
page.bindingContext = vm;
```

[Improve this document](undefined/edit/master/app/ui/image/binding/article.md)

[Demo Source](undefined/edit/master/app/ui/image/binding)

---

## Image Source

We can use the `image-source` module to create an image source and manually set it to the image.
```JavaScript
const image = new Image();
const imageSource = imageSourceModule.fromResource("logo");
image.imageSource = imageSource;
image.height = 300;
image.stretch = "aspectFill";
```

Common scenario when working with images is to convert them to and from Base64 encoded string.
In NativeScript converting is achieved by using `toBase64String` and `fromBase64` methods from `image-source` module. Then create an `ImageSource` instance and bind it to the source property of Image.
<snippet id='using-base64-strings'/>

[Improve this document](undefined/edit/master/app/ui/image/image-source/article.md)

[Demo Source](undefined/edit/master/app/ui/image/image-source)

---

## Stretching

The stretch functionality allows us to describe how content is resized to fill its allocated space. The available options for this property are as follow:

* `none` - The image preserves its original size
```XML
<Image src="~/images/logo.png" stretch="none" />
```
* `fill` - The image is resized to fill the destination dimensions. In this case, the aspect ratio is not preserved.
```XML
<Image src="~/images/logo.png" stretch="fill" />
```
* `aspectFit` - The image is resized to fit the destination dimensions while it preserves its native aspect ratio. If the aspect ratio of the destination rectangle differs from the image, the image will be clipped to fit in the destination.
```XML
<Image src="~/images/logo.png" stretch="aspectFill" />
```
* `aspectFill` - Tthe image is resized to fill in the destination dimensions while it preserves its native aspect ratio.
```XML
<Image src="~/images/logo.png" stretch="aspectFit" />
```

> **Note:** The default value for this property is `aspectFit`.

[Improve this document](undefined/edit/master/app/ui/image/stretching/article.md)

[Demo Source](undefined/edit/master/app/ui/image/stretching)

---

**API Reference for** 
 * [Image module](http://docs.nativescript.org/api-reference/modules/_ui_image_.html)
 * [ImageSource module](https://docs.nativescript.org/api-reference/classes/_image_source_.imagesource)


**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.widget.ImageView](http://developer.android.com/reference/android/widget/ImageView.html) | [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) |

**See Also**  [Android Image Optimization](https://docs.nativescript.org/best-practices/images-optimisations)


