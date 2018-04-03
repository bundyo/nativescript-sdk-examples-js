---
title: Xml Parser
description: Xml Parser SDK Examples
position: 47
slug: xml-parser
---

# Xml Parser

`XML Module` presents a simple way to parse data from an XML content. One scenario, where similar functionality could be used is the cases when a service returns an XML response. The module allows you to go through the XML code and to search for specific attribute and its value or to take the data(e.g. `text` value) locked between the XML elements.

```JavaScript
const xmlModule = require("tns-core-modules/xml");
```


## Basics

The example demonstrates how to create parser event, which is needed for separating the XML into different types and for reading the saved data.  

Declaring `ParserEvent` callback method.
```JavaScript
const onEventCallback = (event) => {
    switch (event.eventType) {
        case xmlModule.ParserEventType.StartElement:
            if (event.attributes) {
                for (const attributeName in event.attributes) {
                    if (event.attributes.hasOwnProperty(attributeName)) {
                        source.push({
                            eventType:event.eventType,
                            elementName:event.elementName,
                            attributeName: attributeName,
                            result:event.attributes[attributeName],
                            significantText: null
                        });
                    }
                }
            } else {
                source.push({
                    eventType:event.eventType,
                    elementName:event.elementName,
                    attributeName:null,
                    result:null,
                    significantText:null
                });
            }
            break;
        case xmlModule.ParserEventType.EndElement:
            source.push({
                eventType:event.eventType,
                elementName:event.elementName,
                attributeName:null,
                result:null,
                significantText:null
            });
            break;
        case xmlModule.ParserEventType.Text:
            const significantText = event.data.trim();
            if (significantText !== "") {
                source.push({
                    eventType:event.eventType,
                    elementName:null,
                    attributeName: null,
                    result:null,
                    significantText:significantText
                });
            }
            break;
        default:
            break;
    }
};

const onErrorCallback = (error) => {
    console.log(`Error: ${error.message}`);
};
```

Calling `parse` method.
```JavaScript
const xmlParser = new xmlModule.XmlParser(onEventCallback, onErrorCallback);
    xmlParser.parse(`
    <Document>
        <First attr1=\ "attribute1\" attr2=\ "attribute2\">I am first</First>
        <Second>I am second</Second>
        <Third>
            <FirstChild attr3=\ "attribute3\"></FirstChild>
        </Third>
    </Document>
    `);
```

[Improve this document](undefined/edit/master/app/xml-parser/basics/article.md)

[Demo Source](undefined/edit/master/app/xml-parser/basics)

---


**API Reference for the** [XML Class](https://docs.nativescript.org/api-reference/modules/_xml_)


