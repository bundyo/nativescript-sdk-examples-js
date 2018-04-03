---
title: Web View
description: Web View SDK Examples
position: 46
slug: web-view
---

# Web View

The WebView component is used to display web content within your application. You use the control by providing a `src` attribute that points at a URL or a local HTML file.

```JavaScript
const webViewModule = require("tns-core-modules/ui/web-view");
```

* [Basics](#basics)
* [Gestures](#gestures)
* [Source](#source-load)


## Basics

The sample shows a fundamental way of using the WebView in a NativeScript application. 

XML
```XML
<GridLayout rows="75 * 50">
    <GridLayout row="0" rows="*" columns="50 *" class="form">
        <Button class="btn btn-primary btn-active icon" row="0" col="0" text="&#xea44;" tap="goBack"/>
{% raw %}        <TextField row="0" col="1" id="urlField" hint="Enter URL" text="{{ tftext }}" returnKeyType="done" returnPress="submit"{% endraw %}
            autocorrect="false" verticalAlignment="center" class="input input-border m-t-0" autocapitalizationType="none"/>
    </GridLayout>
{% raw %}    <WebView row="1" loaded="onWebViewLoaded" id="myWebView" src="{{ webViewSrc }}" />{% endraw %}
{% raw %}    <Label row="2" text="{{ result }}" />{% endraw %}
</GridLayout>
```

Add WebView `src` and handle `loadFinishedEvent` event
```JavaScript
const Observable = require("tns-core-modules/data/observable").Observable;
const dialogs = require("tns-core-modules/ui/dialogs");
const webViewModule = require("tns-core-modules/ui/web-view");
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("webViewSrc", "https://docs.nativescript.org/");
    vm.set("result", "");
    vm.set("tftext", "https://docs.nativescript.org/");
    page.bindingContext = vm;
}
// handling WebView load finish event
function onWebViewLoaded(webargs) {
    const page = webargs.object.page;
    const vm = page.bindingContext;
    const webview = webargs.object;
    vm.set("result", "WebView is still loading...");

    webview.on(webViewModule.WebView.loadFinishedEvent, (args) => {
        let message = "";
        if (!args.error) {
            message = `WebView finished loading of ${args.url}`;
        } else {
            message = `Error loading ${args.url} : ${args.error}`;
        }

        vm.set("result", message);
        console.log(`WebView message - ${message}`);
    });
}
// going to the previous page if such is available
function goBack(args) {
    const page = args.object.page;
    const webview = page.getViewById("myWebView");
    if (webview.canGoBack) {
        webview.goBack();
    }
}
// changing WebView source
function submit(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const textField = args.object;
    const text = textField.text;
    if (text.substring(0, 4) === "http") {
        vm.set("webViewSrc", text);
        textField.dismissSoftInput();
    } else {
        dialogs.alert("Please, add `http://` or `https://` in front of the URL string")
        .then(() => {
            console.log("Dialog closed!");
        });
    }
}
exports.onNavigatingTo = onNavigatingTo;
exports.onWebViewLoaded = onWebViewLoaded;
exports.submit = submit;
exports.goBack = goBack;
```

CSS
```CSS
.icon{
    font-family: 'icomoon';
    vertical-align: center;
    margin: 6;
}

/*WebView {
    border-color: lightgray; 
    border-width: 0.5;
}*/
```

[Improve this document](undefined/edit/master/app/ui/web-view/basics/article.md)

[Demo Source](undefined/edit/master/app/ui/web-view/basics)

---

## Gestures

The code samples show, how we could use gestures in WebView for both platforms iOS and Android.

XML
```XML
 <GridLayout rows="50 50 *">
{% raw %}    <Label row="0" text="{{ touchResult }}" textWrap="true" />{% endraw %}
{% raw %}    <Label row="1" text="{{ panResult }}" textWrap="true" />{% endraw %}
{% raw %}    <WebView row="2" loaded="onWebViewLoaded"  touch="webViewTouch" pan="webViewPan" src="{{ webViewSrc }}" />{% endraw %}
</GridLayout>
```

JavaScript
```JavaScript
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("webViewSrc", "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    vm.set("touchResult", "Touch: x: _ y: _");
    vm.set("panResult", "Pan: deltaX: _ deltaY: _");
    page.bindingContext = vm;
}
// disabling the WebView's zoom control(required only for Android)
function onWebViewLoaded(webargs) {
    const webview = webargs.object;
    if (platformModule.isAndroid) {
        webview.android.getSettings().setDisplayZoomControls(false);
    }
}
// setting up Touch gesture callback method
function webViewTouch(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("touchResult", `Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
    console.log(`Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
}
// setting up Pan gesture callback method
function webViewPan(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("panResult", `Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
    console.log(`Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onWebViewLoaded = onWebViewLoaded;
exports.webViewTouch = webViewTouch;
exports.webViewPan = webViewPan;
```

>Note: to be able to use gestures in `WebView` component on Android, we should first disabled the zoom control. To do that we could access the `android` property and with the help of  `setDisplayZoomControls` to set this controll to `false`.

[Improve this document](undefined/edit/master/app/ui/web-view/gestures/article.md)

[Demo Source](undefined/edit/master/app/ui/web-view/gestures)

---

## Source Load

The example demonstrates, how to load content in the WebView component, while using a local file or while providing HTML code directly to its `src` property.

XML
```XML
<GridLayout rows="100 50 * 50" columns="*">
{% raw %}    <WebView row="0" col="0" loaded="onFirstWebViewLoaded" src="{{ firstWebViewSRC }}"/>{% endraw %}
{% raw %}    <Label row="1" text="{{ resultFirstWebView }}" textWrap="true" />{% endraw %}
{% raw %}    <WebView row="2" col="0" loaded="onSecondWebViewLoaded" src="{{ secondWebViewSRC }}"/>{% endraw %}
{% raw %}    <Label row="3" text="{{ resultSecondWebView }}" textWrap="true" />{% endraw %}
</GridLayout>
```

Add WebView `src` from local file
```JavaScript
const Observable = require("tns-core-modules/data/observable").Observable;
const webViewModule = require("tns-core-modules/ui/web-view");
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    // loading the WebView source while providing a HTML code
    vm.set("firstWebViewSRC", "<!DOCTYPE html><html><head><title>MyTitle</title><meta charset='utf-8' /></head><body><span style='color:#0099CC; text-align: center;'>First WebView</span></body></html>");
    vm.set("resultFirstWebView", "");
    // loading the WebView source from a local file
    vm.set("secondWebViewSRC", "~/ui/web-view/source-load/test.html");
    vm.set("resultSecondWebView", "");
    page.bindingContext = vm;
}

function onFirstWebViewLoaded(webargs) {
    const page = webargs.object.page;
    const vm = page.bindingContext;
    const webview = webargs.object;
    vm.set("resultFirstWebView", "First WebView is still loading...");
    // handling WebView load finish event
    webview.on(webViewModule.WebView.loadFinishedEvent, (args) => {
        let message = "";
        if (!args.error) {
            message = `First WebView finished loading of ${args.url}`;
        } else {
            message = `Error loading first WebView ${args.url} : ${args.error}`;
        }

        vm.set("resultFirstWebView", message);
        console.log("First WebView message - ", message);
    });
}

function onSecondWebViewLoaded(webargs) {
    const page = webargs.object.page;
    const vm = page.bindingContext;
    const webview = webargs.object;
    vm.set("resultSecondWebView", "Second WebView is still loading...");

    webview.on(webViewModule.WebView.loadFinishedEvent, (args) => {
        let message = "";
        if (!args.error) {
            message = `Second WebView finished loading of ${args.url}`;
        } else {
            message = `Error loading second WebView  ${args.url} : ${args.error}`;
        }

        vm.set("resultSecondWebView", message);
        console.log("Second WebView message - ", message);
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.onFirstWebViewLoaded = onFirstWebViewLoaded;
exports.onSecondWebViewLoaded = onSecondWebViewLoaded;
```

[Improve this document](undefined/edit/master/app/ui/web-view/source-load/article.md)

[Demo Source](undefined/edit/master/app/ui/web-view/source-load)

---


**API Reference for the** [WebView Class](http://docs.nativescript.org/api-reference/modules/_ui_web_view_.html)

**Native Component**

| Android                | iOS      |
|:-----------------------|:---------|
| [android.webkit.WebView](http://developer.android.com/reference/android/webkit/WebView.html) | [UIWebView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/) | 


