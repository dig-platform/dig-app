[dig](../README.md) / [Exports](../modules.md) / [interfaces](../modules/interfaces.md) / DigStorage

# Interface: DigStorage

[interfaces](../modules/interfaces.md).DigStorage

## Hierarchy

* **DigStorage**

## Table of contents

### Methods

- [ref](interfaces.digstorage.md#ref)
- [upload](interfaces.digstorage.md#upload)

## Methods

### ref

▸ **ref**(`path`: *string*): AngularFireStorageReference

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |

**Returns:** AngularFireStorageReference

Defined in: [interfaces/dig-storage.ts:6](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-storage.ts#L6)

___

### upload

▸ **upload**(`path`: *string*, `data`: *string*, `metadata?`: UploadMetadata): AngularFireUploadTask

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`data` | *string* |
`metadata?` | UploadMetadata |

**Returns:** AngularFireUploadTask

Defined in: [interfaces/dig-storage.ts:5](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-storage.ts#L5)
