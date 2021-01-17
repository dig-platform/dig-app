[dig](../../README.md) / [Exports](../../modules.md) / [interfaces/dig-document-model](../../modules/interfaces_dig_document_model.md) / DigDocumentModel

# Interface: DigDocumentModel

[interfaces/dig-document-model](../../modules/interfaces_dig_document_model.md).DigDocumentModel

## Hierarchy

* **DigDocumentModel**

## Implemented by

* [*DigDbModel*](../../classes/models/dig-db-model.digdbmodel.md)

## Table of contents

### Methods

- [add](dig-document-model.digdocumentmodel.md#add)
- [collection](dig-document-model.digdocumentmodel.md#collection)
- [delete](dig-document-model.digdocumentmodel.md#delete)
- [doc](dig-document-model.digdocumentmodel.md#doc)
- [find](dig-document-model.digdocumentmodel.md#find)
- [on](dig-document-model.digdocumentmodel.md#on)
- [query](dig-document-model.digdocumentmodel.md#query)
- [registerPlugin](dig-document-model.digdocumentmodel.md#registerplugin)
- [set](dig-document-model.digdocumentmodel.md#set)
- [update](dig-document-model.digdocumentmodel.md#update)

## Methods

### add

▸ **add**(`doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:12](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L12)

___

### collection

▸ **collection**(`query?`: *QueryFn*<DocumentData\>): *AngularFirestoreCollection*<DocumentData\>

#### Parameters:

Name | Type |
------ | ------ |
`query?` | *QueryFn*<DocumentData\> |

**Returns:** *AngularFirestoreCollection*<DocumentData\>

Defined in: [interfaces/dig-document-model.ts:6](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L6)

___

### delete

▸ **delete**(`id`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:21](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L21)

___

### doc

▸ **doc**(`id`: *string*): *AngularFirestoreDocument*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *AngularFirestoreDocument*<*any*\>

Defined in: [interfaces/dig-document-model.ts:9](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L9)

___

### find

▸ **find**(`id`: *string*): *Observable*<*any*\> \| *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Observable*<*any*\> \| *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:24](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L24)

___

### on

▸ **on**(`e`: *string*, `callback`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`e` | *string* |
`callback` | *any* |

**Returns:** *any*

Defined in: [interfaces/dig-document-model.ts:30](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L30)

___

### query

▸ **query**(`QueryFn?`: *any*): *Observable*<*any*\> \| *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`QueryFn?` | *any* |

**Returns:** *Observable*<*any*\> \| *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:27](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L27)

___

### registerPlugin

▸ **registerPlugin**(`plugin`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`plugin` | *any* |

**Returns:** *any*

Defined in: [interfaces/dig-document-model.ts:31](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L31)

___

### set

▸ **set**(`id`: *string*, `doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:18](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L18)

___

### update

▸ **update**(`id`: *string*, `doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:15](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/interfaces/dig-document-model.ts#L15)
