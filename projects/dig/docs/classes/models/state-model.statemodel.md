[dig](../../README.md) / [Exports](../../modules.md) / [models/state-model](../../modules/models_state_model.md) / StateModel

# Class: StateModel

[models/state-model](../../modules/models_state_model.md).StateModel

## Hierarchy

* **StateModel**

## Table of contents

### Constructors

- [constructor](state-model.statemodel.md#constructor)

### Properties

- [stores](state-model.statemodel.md#stores)

### Methods

- [create](state-model.statemodel.md#create)
- [exists](state-model.statemodel.md#exists)
- [get](state-model.statemodel.md#get)
- [reset](state-model.statemodel.md#reset)
- [snapshot](state-model.statemodel.md#snapshot)

## Constructors

### constructor

\+ **new StateModel**(`data?`: *any*): [*StateModel*](state-model.statemodel.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | *any* | null |

**Returns:** [*StateModel*](state-model.statemodel.md)

Defined in: [models/state-model.ts:4](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L4)

## Properties

### stores

• `Private` **stores**: [*Store*](state-model.store.md)[]

Defined in: [models/state-model.ts:4](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L4)

## Methods

### create

▸ **create**(`id`: *any*, `defaultState?`: {}): [*Store*](state-model.store.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`id` | *any* | - |
`defaultState` | {} | ... |

**Returns:** [*Store*](state-model.store.md)

Defined in: [models/state-model.ts:22](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L22)

___

### exists

▸ **exists**(`id`: *any*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`id` | *any* |

**Returns:** *boolean*

Defined in: [models/state-model.ts:32](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L32)

___

### get

▸ **get**(`id`: *any*): [*Store*](state-model.store.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *any* |

**Returns:** [*Store*](state-model.store.md)

Defined in: [models/state-model.ts:14](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L14)

___

### reset

▸ **reset**(): *void*

**Returns:** *void*

Defined in: [models/state-model.ts:44](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L44)

___

### snapshot

▸ **snapshot**(): *any*

**Returns:** *any*

Defined in: [models/state-model.ts:36](https://github.com/dig-platform/dig-app/blob/67b98b9d/projects/dig/src/lib/models/state-model.ts#L36)
