---
title: File System
description: File System SDK Examples
position: 14
slug: file-system
---

# File System

File System module provides high-level abstractions for file system entities 
such as files, folders, known folders, paths, separators, etc.

```JavaScript
const fileSystemModule = require("tns-core-modules/file-system");
```

* [Create](#create)
* [Delete](#delete)
* [Paths](#paths)
* [Read](#read)
* [Update](#update)


## Create

The example demostrates, how to create folders, files and file content
<snippet id='fs-create-import-code'/>

```JavaScript
const documents = fileSystemModule.knownFolders.documents();
const folder = documents.getFolder(vm.get("folderName") || "testFolder");
const file = folder.getFile((vm.get("fileName") || "testFile") + ".txt");

file.writeText(vm.get("fileTextContent") || "some random content")
    .then((result) => {
        file.readText()
            .then((res) => {
                vm.set("successMessage", "Successfully saved in " + file.path);
                vm.set("writtenContent", res);
                vm.set("isItemVisible", true);
            });
    }).catch((err) => {
        console.log(err);
    });
```

[Improve this document](undefined/edit/master/app/file-system/create/article.md)

[Demo Source](undefined/edit/master/app/file-system/create)

---

## Delete

Removing a File
<snippet id='fs-delete-file-code '/>

Removing a Folder
<snippet id='fs-delete-folder-code '/>

Clearing the Contents of a Folder
<snippet id='fs-clear-folder-code '/>


[Improve this document](undefined/edit/master/app/file-system/delete/article.md)

[Demo Source](undefined/edit/master/app/file-system/delete)

---

## Paths

Normalize a Path
```JavaScript
const documentsFolder = fileSystemModule.knownFolders.documents();
const currentAppFolder = fileSystemModule.knownFolders.currentApp();
const tempFolder = fileSystemModule.knownFolders.temp();

const testPath = "///test.txt";
// Get a normalized path such as <folder.path>/test.txt from <folder.path>///test.txt
vm.set("documents", fileSystemModule.path.normalize(documentsFolder.path + testPath));
vm.set("currentApp", fileSystemModule.path.normalize(currentAppFolder.path + testPath));
vm.set("temp", fileSystemModule.path.normalize(tempFolder.path + testPath));
```

Path Join
Concatenate a path to a file by providing multiple path arguments.
```JavaScript
// Generate a path like <documents.path>/myFiles/test.txt
documentsFolder = fileSystemModule.knownFolders.documents();
const filePath = fileSystemModule.path.join(documentsFolder.path, "myFiles", "test.txt");
```

Get the Path Separator
```JavaScript
// An OS dependent path separator, "\" or "/".
const separator = fileSystemModule.path.separator;
```

Get or Create a File With Path
```JavaScript
const documentsFolder = fileSystemModule.knownFolders.documents();
const path = fileSystemModule.path.join(documentsFolder.path, "FileFromPath.txt");
const file = fileSystemModule.File.fromPath(path);

// Writing text to the file.
file.writeText(vm.get("textContentToBeSaved"))
    .then((result) => {
        // Succeeded writing to the file.
        file.readText().then((res) => {
            // Succeeded read from file.
            vm.set("isContentSaved", true);
            vm.set("savedContent", res);
            console.log(`File content:  ${res}`);
        });
    }).catch((err) => {
        console.log(err.stack);
    });
```

Get or Create a Folder With Path
```JavaScript
const folderPath = fileSystemModule.path.join(fileSystemModule.knownFolders.documents().path, "music");
const folder = fileSystemModule.Folder.fromPath(folderPath);
```

[Improve this document](undefined/edit/master/app/file-system/paths/article.md)

[Demo Source](undefined/edit/master/app/file-system/paths)

---

## Read

Reading from a File
```JavaScript
file.readText()
    .then(res => {
        vm.set("writtenContent", res);
    }).catch(err => {
        console.log(err.stack);
    });
```

Reading binary data from a File
```JavaScript
const image = imageSourceModule.fromResource("icon");
const folder = fileSystemModule.knownFolders.documents();
const path = fileSystemModule.path.join(folder.path, "Test.png");
const saved = image.saveToFile(path, "png");

if (saved) {
    const imageFile = fileSystemModule.File.fromPath(path);
    const binarySource = imageFile.readSync((err) => {
        console.log("Error:" + err);
    });
    console.log(this.binarySource);
```

Writing binary data to a File
```JavaScript
imageFile.writeSync(binarySource, (err) => {
    console.log(err);
});
```

Getting Folder Contents

Getting all folder entities in array may be slow with large number of files. 
Enumerating the folder entities would iterate the files one by one without blocking the UI.
```JavaScript
documents = fileSystemModule.knownFolders.documents();
documents.getEntities()
    .then((entities) => {
        // entities is array with the document's files and folders.
        entities.forEach((entity) => {
            array.push(
                {
                    name: entity.name,
                    path: entity.path,
                    lastModified: entity.lastModified.toString()
                }
            );
        });
    }).catch((err) => {
        // Failed to obtain folder's contents.
        console.log(err.stack);
    });
```

Checking if a File Exists
```JavaScript
documents = fileSystemModule.knownFolders.documents();
const path = fileSystemModule.path.join(documents.path, "Text.txt");
const exists = fileSystemModule.File.exists(path);
console.log(`Does Text.txt exists: ${exists}`);
```

Checking if a Folder Exists
```JavaScript
const temp = fileSystemModule.knownFolders.temp();
const tempExists = fileSystemModule.Folder.exists(temp.path);
console.log(`Does temp folder exists: ${tempExists}`);
```

[Improve this document](undefined/edit/master/app/file-system/read/article.md)

[Demo Source](undefined/edit/master/app/file-system/read)

---

## Update

Renaming a File
```JavaScript
const fileName = vm.get("fileName");
file.rename(fileName + ".txt")
    .then((res) => {
        // File Successfully Renamed.
        vm.set("fileSuccessMessage", `File renamed to:  ${fileName}.txt`);
        vm.set("isItemVisible", true);
    }).catch((err) => {
        // Error!
        console.log("Error: ");
        console.log(err);
        dialogs.alert(err)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
```

Renaming a Folder
```JavaScript
const folderName = vm.get("folderName");
myFolder.rename(folderName)
    .then((res) => {
        // Folder Successfully Renamed.
        vm.set("folderSuccessMessage", `Folder renamed to:  ${folderName}`);
        vm.set("isFolderItemVisible", true);
    }).catch((err) => {
        // Error!
        console.log("Error: ");
        console.log(err);
        dialogs.alert(err)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
```


[Improve this document](undefined/edit/master/app/file-system/update/article.md)

[Demo Source](undefined/edit/master/app/file-system/update)

---


**API Reference for the** [File System Module](https://docs.nativescript.org/api-reference/modules/_file_system_.html)

**API Reference for the** [File Class](https://docs.nativescript.org/api-reference/classes/_file_system_.file.html)

**API Reference for the** [FileSystemEntity Class](https://docs.nativescript.org/api-reference/classes/_file_system_.filesystementity.html)

**API Reference for the** [Folder Class](https://docs.nativescript.org/api-reference/classes/_file_system_.folder.html)


