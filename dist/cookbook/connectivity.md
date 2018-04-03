---
title: Connectivity
description: Connectivity SDK Examples
position: 9
slug: connectivity
---

# Connectivity

Obtaining connectivity information requires the `tns-core-modules/connectivity` module.
This module contains connectivity utility methods for observing the connection type and availability.

## Basics

Using the connectivity module with `getConnectionType` method, we can get the current Internet connection type.
<snippet id-'connectivity-type'/>

> **Android specifics:** On ANdroid to access any connection related information we will need explicit permission from the user.
To enable the permission request add the follwing in `app/App_Resources/Android/AndroidManifest/xml`
```XML
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

Monitoring connection type is achieved through `startMonitoring` method.
<snippet id-'connectivity-monitoring'/>

[Improve this document](undefined/edit/master/app/connectivity/basics/article.md)

[Demo Source](undefined/edit/master/app/connectivity/basics)

---

**API Reference for the** [Connectivity Module](https://docs.nativescript.org/api-reference/modules/_connectivity_)

