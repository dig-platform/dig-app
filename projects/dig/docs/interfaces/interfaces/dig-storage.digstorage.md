[dig](../../README.md) / [Exports](../../modules.md) / [interfaces/dig-storage](../../modules/interfaces_dig_storage.md) / DigStorage

# Interface: DigStorage

[interfaces/dig-storage](../../modules/interfaces_dig_storage.md).DigStorage

## Hierarchy

* **DigStorage**

## Table of contents

### Methods

- [ref](dig-storage.digstorage.md#ref)
- [upload](dig-storage.digstorage.md#upload)

## Methods

### ref

▸ **ref**(`path`: *string*): AngularFireStorageReference

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |

**Returns:** AngularFireStorageReference

Defined in: [interfaces/dig-storage.ts:6](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-storage.ts#L6)

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

Defined in: [interfaces/dig-storage.ts:5](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-storage.ts#L5)
