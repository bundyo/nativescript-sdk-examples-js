---
title: Image Cache
description: Image Cache SDK Examples
position: 21
slug: image-cache
---

# Image Cache

The `image-cache` module contains the `Cache` class, which handles image download requests and caches the already downloaded images.

## Basics

Using `Cache` objects requires the `tns-core-modules/ui/image-cache` module.
<sippet id='image-cache-require'/>

Requesting and caching images with `image-cache` module while using a placeholder image.
```JavaScript
const cache = new Cache();
cache.placeholder = fromFile("~/images/logo.png");
cache.maxRequests = 5;

// set the placeholder while the desired image is donwloaded
viewModel.set("imageSource", cache.placeholder);

// Enable download while not scrolling
cache.enableDownload();

let cachedImageSource;
const url = "https://avatars1.githubusercontent.com/u/7392261?v=4";
// Try to read the image from the cache
const image = cache.get(url);

if (image) {
    // If present -- use it.
    cachedImageSource = imageSource.fromNativeSource(image);
    viewModel.set("imageSource", cachedImageSource);
} else {
    // If not present -- request its download + put it in the cache.
    cache.push({
        key: url,
        url: url,
        completed: (image, key) => {
            if (url === key) {
                cachedImageSource = fromNativeSource(image);
                viewModel.set("imageSource", cachedImageSource); // set the downloaded iamge
            }
        }
    });
}

// Disable download while scrolling
cache.disableDownload();
```

[Improve this document](undefined/edit/master/app/ui/image-cache/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/image-cache/basics)

---

**API Reference for** 
 * [Image Cache Module](https://docs.nativescript.org/api-reference/modules/_ui_image_cache_)
 * [Image Module](http://docs.nativescript.org/api-reference/modules/_ui_image_.html)
 * [ImageSource Module](https://docs.nativescript.org/api-reference/classes/_image_source_.imagesource)

**See Also**  [Android Image Optimization](https://docs.nativescript.org/best-practices/images-optimisations)




