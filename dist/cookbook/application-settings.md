---
title: Application Settings
description: Application Settings SDK Examples
position: 5
slug: application-settings
---

# Application Settings

The Application Settings module is used to store strings, booleans and numbers in built-in key/value store.
Uses `SharedPreferences` on Android and `NSUserDefaults` on iOS.

## Basics

The application settings module is required from `tns-core-modules/application-settings`.
```JavaScript
const appSettings = require("application-settings");
```

Set and get a `boolean` value and provide default value in case it is not set.
```JavaScript
appSettings.setBoolean("isTurnedOn", true);
const isTurnedOn = appSettings.getBoolean("isTurnedOn", false);
console.log(isTurnedOn);
```

Set and get a string value.
```JavaScript
appSettings.setString("username", "NickIliev");
const username = appSettings.getString("username");
console.log(username);
```

Set and get a numeric value.
```JavaScript
appSettings.setNumber("locationX", 54.321);
const locationX = parseFloat(appSettings.getNumber("locationX").toFixed(3));
console.log(locationX);
```

Reading values that are not set before while providing default value.
```JavaScript
// will return "No string value" if there is no value for "noSuchKey"
const someKey = appSettings.getString("noSuchKey", "No string value");
console.log(someKey);
```

Reading values that are not set before not providing default value.
```JavaScript
// will return undefined if there is no value for "noSuchKey"
const defaultValue = appSettings.getString("noSuchKey");
console.log(defaultValue);
```

Checking for existence of specific key.
```JavaScript
// will return false if there is no "noBoolKey"
const noBoolKey = appSettings.hasKey("noBoolKey");
console.log(noBoolKey);
```

[Improve this document](undefined/edit/master/app/application-settings/basics/article.md)

[Demo Source](undefined/edit/master/app/application-settings/basics)

---

**API Reference for the** [Application Settings module](https://docs.nativescript.org/api-reference/modules/_application_settings_)

**Native Component**

| Android               | iOS      |
|:----------------------|:---------|
| [android.content.SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences.html) | [NSUserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) | 


