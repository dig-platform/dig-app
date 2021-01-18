[dig](../../README.md) / [Exports](../../modules.md) / [models/app-model](../../modules/models_app_model.md) / AppModel

# Class: AppModel

[models/app-model](../../modules/models_app_model.md).AppModel

## Hierarchy

* **AppModel**

## Implements

* [*DigApp*](../../interfaces/interfaces/dig-app.digapp.md)

## Table of contents

### Constructors

- [constructor](app-model.appmodel.md#constructor)

### Properties

- [stateContainer](app-model.appmodel.md#statecontainer)
- [user$](app-model.appmodel.md#user$)
- [userSession](app-model.appmodel.md#usersession)

### Accessors

- [config](app-model.appmodel.md#config)
- [id](app-model.appmodel.md#id)
- [properties](app-model.appmodel.md#properties)
- [state](app-model.appmodel.md#state)
- [user](app-model.appmodel.md#user)

### Methods

- [db](app-model.appmodel.md#db)
- [model](app-model.appmodel.md#model)
- [storage](app-model.appmodel.md#storage)

## Constructors

### constructor

\+ **new AppModel**(`options`: [*DigAppOptions*](../../interfaces/interfaces/dig-app-options.digappoptions.md)): [*AppModel*](app-model.appmodel.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | [*DigAppOptions*](../../interfaces/interfaces/dig-app-options.digappoptions.md) |

**Returns:** [*AppModel*](app-model.appmodel.md)

Defined in: [models/app-model.ts:40](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L40)

## Properties

### stateContainer

• `Private` **stateContainer**: [*StateModel*](state-model.statemodel.md)

Defined in: [models/app-model.ts:14](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L14)

___

### user$

• `Readonly` **user$**: *Observable*<[*DigUser*](../../interfaces/interfaces/dig-user.diguser.md)\>

Implementation of: [DigApp](../../interfaces/interfaces/dig-app.digapp.md).[user$](../../interfaces/interfaces/dig-app.digapp.md#user$)

Defined in: [models/app-model.ts:16](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L16)

___

### userSession

• `Private` **userSession**: [*Store*](state-model.store.md)

Defined in: [models/app-model.ts:15](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L15)

## Accessors

### config

• **config**(): [*DigConfig*](../../interfaces/interfaces/dig-config.digconfig.md)

**Returns:** [*DigConfig*](../../interfaces/interfaces/dig-config.digconfig.md)

Defined in: [models/app-model.ts:21](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L21)

___

### id

• **id**(): *string*

**Returns:** *string*

Defined in: [models/app-model.ts:25](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L25)

___

### properties

• **properties**(): [*DigProperties*](../../interfaces/interfaces/dig-properties.digproperties.md)

**Returns:** [*DigProperties*](../../interfaces/interfaces/dig-properties.digproperties.md)

Defined in: [models/app-model.ts:29](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L29)

___

### state

• **state**(): [*StateModel*](state-model.statemodel.md)

**Returns:** [*StateModel*](state-model.statemodel.md)

Defined in: [models/app-model.ts:38](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L38)

___

### user

• **user**(): [*DigUser*](../../interfaces/interfaces/dig-user.diguser.md)

**Returns:** [*DigUser*](../../interfaces/interfaces/dig-user.diguser.md)

Defined in: [models/app-model.ts:17](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L17)

## Methods

### db

▸ **db**(): *AngularFirestore* \| *AngularFirestoreCollection*<DocumentData\>

**Returns:** *AngularFirestore* \| *AngularFirestoreCollection*<DocumentData\>

Implementation of: [DigApp](../../interfaces/interfaces/dig-app.digapp.md)

Defined in: [models/app-model.ts:56](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L56)

___

### model

▸ **model**(`collectionPath`: *string*): [*DigDbModel*](dig-db-model.digdbmodel.md)

#### Parameters:

Name | Type |
------ | ------ |
`collectionPath` | *string* |

**Returns:** [*DigDbModel*](dig-db-model.digdbmodel.md)

Defined in: [models/app-model.ts:65](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L65)

___

### storage

▸ **storage**(): *AngularFireStorage*

**Returns:** *AngularFireStorage*

Implementation of: [DigApp](../../interfaces/interfaces/dig-app.digapp.md)

Defined in: [models/app-model.ts:60](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/app-model.ts#L60)
