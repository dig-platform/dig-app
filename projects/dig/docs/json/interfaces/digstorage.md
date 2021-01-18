[dig](../README.md) / [Exports](../modules.md) / DigStorage

# Interface: DigStorage

## Hierarchy

* **DigStorage**

## Table of contents

### Methods

- [ref](digstorage.md#ref)
- [upload](digstorage.md#upload)

## Methods

### ref

▸ **ref**(`path`: *string*): AngularFireStorageReference

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |

**Returns:** AngularFireStorageReference

Defined in: [interfaces/dig-storage.ts:6](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-storage.ts#L6)

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

Defined in: [interfaces/dig-storage.ts:5](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-storage.ts#L5)
