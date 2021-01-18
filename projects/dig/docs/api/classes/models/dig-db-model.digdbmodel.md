[dig](../../README.md) / [Exports](../../modules.md) / [models/dig-db-model](../../modules/models_dig_db_model.md) / DigDbModel

# Class: DigDbModel

[models/dig-db-model](../../modules/models_dig_db_model.md).DigDbModel

## Hierarchy

* **DigDbModel**

## Implements

* [*DigDocumentModel*](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

## Table of contents

### Constructors

- [constructor](dig-db-model.digdbmodel.md#constructor)

### Properties

- [events](dig-db-model.digdbmodel.md#events)

### Methods

- [add](dig-db-model.digdbmodel.md#add)
- [collection](dig-db-model.digdbmodel.md#collection)
- [delete](dig-db-model.digdbmodel.md#delete)
- [doc](dig-db-model.digdbmodel.md#doc)
- [find](dig-db-model.digdbmodel.md#find)
- [handleEvent](dig-db-model.digdbmodel.md#handleevent)
- [on](dig-db-model.digdbmodel.md#on)
- [query](dig-db-model.digdbmodel.md#query)
- [registerPlugin](dig-db-model.digdbmodel.md#registerplugin)
- [set](dig-db-model.digdbmodel.md#set)
- [update](dig-db-model.digdbmodel.md#update)

## Constructors

### constructor

\+ **new DigDbModel**(`path`: *string*, `adapter`: *any*): [*DigDbModel*](dig-db-model.digdbmodel.md)

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`adapter` | *any* |

**Returns:** [*DigDbModel*](dig-db-model.digdbmodel.md)

Defined in: [models/dig-db-model.ts:22](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L22)

## Properties

### events

• `Private` **events**: {}

Defined in: [models/dig-db-model.ts:22](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L22)

## Methods

### add

▸ **add**(`doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:35](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L35)

___

### collection

▸ **collection**(`queryFn?`: *QueryFn*<DocumentData\>): *any*

#### Parameters:

Name | Type |
------ | ------ |
`queryFn?` | *QueryFn*<DocumentData\> |

**Returns:** *any*

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:27](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L27)

___

### delete

▸ **delete**(`id`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Promise*<*any*\>

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:50](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L50)

___

### doc

▸ **doc**(`id`: *string*): *AngularFirestoreDocument*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *AngularFirestoreDocument*<*any*\>

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:31](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L31)

___

### find

▸ **find**<T\>(`id`: *string*): *Observable*<T\> \| *Promise*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Observable*<T\> \| *Promise*<T\>

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:55](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L55)

___

### handleEvent

▸ `Private`**handleEvent**(`event`: *any*, `ref`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *any* |
`ref` | *any* |

**Returns:** *any*

Defined in: [models/dig-db-model.ts:85](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L85)

___

### on

▸ **on**(`e`: *any*, `callback`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`e` | *any* |
`callback` | *any* |

**Returns:** *any*

Defined in: [models/dig-db-model.ts:71](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L71)

___

### query

▸ **query**<T\>(`query`: *QueryFn*<DocumentData\>): *Observable*<T\> \| *Promise*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`query` | *QueryFn*<DocumentData\> |

**Returns:** *Observable*<T\> \| *Promise*<T\>

Defined in: [models/dig-db-model.ts:63](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L63)

___

### registerPlugin

▸ **registerPlugin**(`plugin`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`plugin` | *any* |

**Returns:** *any*

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:77](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L77)

___

### set

▸ **set**(`id`: *string*, `doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:40](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L40)

___

### update

▸ **update**(`id`: *string*, `doc`: *any*): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`doc` | *any* |

**Returns:** *Promise*<*any*\>

Implementation of: [DigDocumentModel](../../interfaces/interfaces/dig-document-model.digdocumentmodel.md)

Defined in: [models/dig-db-model.ts:45](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/dig-db-model.ts#L45)
