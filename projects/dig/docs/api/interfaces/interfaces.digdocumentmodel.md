[dig](../README.md) / [Exports](../modules.md) / [interfaces](../modules/interfaces.md) / DigDocumentModel

# Interface: DigDocumentModel

[interfaces](../modules/interfaces.md).DigDocumentModel

## Hierarchy

* **DigDocumentModel**

## Table of contents

### Methods

- [add](interfaces.digdocumentmodel.md#add)
- [collection](interfaces.digdocumentmodel.md#collection)
- [delete](interfaces.digdocumentmodel.md#delete)
- [doc](interfaces.digdocumentmodel.md#doc)
- [find](interfaces.digdocumentmodel.md#find)
- [on](interfaces.digdocumentmodel.md#on)
- [query](interfaces.digdocumentmodel.md#query)
- [registerPlugin](interfaces.digdocumentmodel.md#registerplugin)
- [set](interfaces.digdocumentmodel.md#set)
- [update](interfaces.digdocumentmodel.md#update)

## Methods

### add

▸ **add**(`doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:12](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L12)

___

### collection

▸ **collection**(`query?`: *QueryFn*<DocumentData\>): *AngularFirestoreCollection*<DocumentData\>

#### Parameters:

Name | Type |
------ | ------ |
`query?` | *QueryFn*<DocumentData\> |

**Returns:** *AngularFirestoreCollection*<DocumentData\>

Defined in: [interfaces/dig-document-model.ts:6](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L6)

___

### delete

▸ **delete**(`id`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:21](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L21)

___

### doc

▸ **doc**(`id`: *string*): *AngularFirestoreDocument*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *AngularFirestoreDocument*<*any*\>

Defined in: [interfaces/dig-document-model.ts:9](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L9)

___

### find

▸ **find**(`id`: *string*): *Observable*<*any*\> \| *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Observable*<*any*\> \| *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:24](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L24)

___

### on

▸ **on**(`e`: *string*, `callback`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`e` | *string* |
`callback` | *any* |

**Returns:** *any*

Defined in: [interfaces/dig-document-model.ts:30](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L30)

___

### query

▸ **query**(`QueryFn?`: *any*): *Observable*<*any*\> \| *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`QueryFn?` | *any* |

**Returns:** *Observable*<*any*\> \| *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:27](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L27)

___

### registerPlugin

▸ **registerPlugin**(`plugin`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`plugin` | *any* |

**Returns:** *any*

Defined in: [interfaces/dig-document-model.ts:31](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L31)

___

### set

▸ **set**(`id`: *string*, `doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:18](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L18)

___

### update

▸ **update**(`id`: *string*, `doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Defined in: [interfaces/dig-document-model.ts:15](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-document-model.ts#L15)
