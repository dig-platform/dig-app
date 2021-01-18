[dig](../../README.md) / [Exports](../../modules.md) / [models/state-model](../../modules/models_state_model.md) / Store

# Class: Store

[models/state-model](../../modules/models_state_model.md).Store

## Hierarchy

* **Store**

## Table of contents

### Constructors

- [constructor](state-model.store.md#constructor)

### Properties

- [current$](state-model.store.md#current$)
- [store](state-model.store.md#store)

### Accessors

- [current](state-model.store.md#current)

### Methods

- [detach](state-model.store.md#detach)
- [getKey](state-model.store.md#getkey)
- [match](state-model.store.md#match)
- [set](state-model.store.md#set)
- [unset](state-model.store.md#unset)
- [update](state-model.store.md#update)

## Constructors

### constructor

\+ **new Store**(`id`: *string*): [*Store*](state-model.store.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** [*Store*](state-model.store.md)

Defined in: [models/state-model.ts:69](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L69)

## Properties

### current$

• `Readonly` **current$**: *Observable*<*any*\>

Defined in: [models/state-model.ts:56](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L56)

___

### store

• `Readonly` **store**: *BehaviorSubject*<*any*\>

Defined in: [models/state-model.ts:50](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L50)

## Accessors

### current

• **current**(): *any*

**Returns:** *any*

Defined in: [models/state-model.ts:52](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L52)

## Methods

### detach

▸ **detach**(`data`: *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |

**Returns:** *void*

Defined in: [models/state-model.ts:82](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L82)

___

### getKey

▸ **getKey**(): *string*

**Returns:** *string*

Defined in: [models/state-model.ts:74](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L74)

___

### match

▸ **match**(`id`: *string*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *boolean*

Defined in: [models/state-model.ts:78](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L78)

___

### set

▸ **set**(`data`: *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |

**Returns:** *void*

Defined in: [models/state-model.ts:63](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L63)

___

### unset

▸ **unset**(): *void*

**Returns:** *void*

Defined in: [models/state-model.ts:67](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L67)

___

### update

▸ **update**(`data`: *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |

**Returns:** *void*

Defined in: [models/state-model.ts:58](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/state-model.ts#L58)
