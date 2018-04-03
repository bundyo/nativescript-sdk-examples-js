---
title: Image Source
description: Image Source SDK Examples
position: 22
slug: image-source
---

# Image Source

In this article, we will look at different ways to load or save image while using ImageSource module.

```JavaScript
const imageSourceModule = require("tns-core-modules/image-source");
```

The pre-required imageSource module is used throughout the following code snippets. We also use fs module defined as follows:
```JavaScript
const fileSystemModule = require("tns-core-modules/file-system");
```

* [Load Image](#load-image)
* [Save Image](#save-image)


## Load Image


## Load image using resource name
This is similar to loading Bitmap from R.drawable.logo on Android or calling [UIImage imageNamed@"logo"] on iOS. The method fromResource creates an ImageSource instance and loads it from the specified resource name.
```JavaScript
const imgFromResources = imageSourceModule.fromResource("icon");
```

## Load image from a local file
Use fromFile(path: string): Promise<boolean> to load an ImageSource instance from the specified file asynchronously.
```JavaScript
const folder = fileSystemModule.knownFolders.currentApp();
const path = fileSystemModule.path.join(folder.path, "images/logo.png");
const imageFromLocalFile = imageSourceModule.fromFile(path);
```

## Creating PNG image file from base64 string
The method fromBase64(source: string): Promise<boolean> loads this instance from the specified base64 encoded string asynchronously.
<snippet id='image-source-base64'/>

[Improve this document](undefined/edit/master/app/image-source/load-image/article.md)

[Demo Source](undefined/edit/master/app/image-source/load-image)

---

## Save Image

## Save image to PNG or JPG file
The method saveToFile(path: string, format: "png" | "jpeg" | "jpg", quality?: number): boolean saves ImageSource instance to the specified file, using the provided image format and quality. The supported formats are png, jpeg, and jpg. The quality parameter is optional and defaults to maximum quality. Returns true if the file is saved successfully.
```JavaScript
const img = imageSourceModule.fromFile(imagePath);
const folderDest = fileSystemModule.knownFolders.documents();
const pathDest = fileSystemModule.path.join(folderDest.path, "test.png");
const saved = img.saveToFile(pathDest, "png");
if (saved) {
    console.log("Image saved successfully!");
}
```

## Save image from image asset to PNG file
Use fromAsset(asset: ImageAsset): Promise<ImageSource> to load ImageSource from the specified ImageAsset asynchronously.
```JavaScript
const source = new imageSourceModule.ImageSource();
source.fromAsset(imageAsset)
.then((imageSource) => {
    const folder = fileSystemModule.knownFolders.documents().path;
    const fileName = "test.png";
    const path = fileSystemModule.path.join(folder, fileName);
    const saved = imageSource.saveToFile(path, "png");
    if (saved) {
        console.log("Image saved successfully!");
    }
```

## Creating base64 string from PNG image file
The method toBase64String(format: "png" | "jpeg" | "jpg", quality?: number): string converts the image to base64 encoded string, using the provided image format and quality. The supported formats are png, jpeg, and jpg. The quality parameter is optional and defaults to maximum quality.
<snippet id='image-source-create-base64'/>

[Improve this document](undefined/edit/master/app/image-source/save-image/article.md)

[Demo Source](undefined/edit/master/app/image-source/save-image)

---


**API Reference for the** [Image Source Class](https://docs.nativescript.org/api-reference/classes/_image_source_.imagesource)


