[dig](../README.md) / [Exports](../modules.md) / [interfaces](../modules/interfaces.md) / DigState

# Interface: DigState

[interfaces](../modules/interfaces.md).DigState

## Hierarchy

* **DigState**

## Table of contents

### Properties

- [id](interfaces.digstate.md#id)

### Methods

- [create](interfaces.digstate.md#create)
- [exists](interfaces.digstate.md#exists)
- [get](interfaces.digstate.md#get)
- [snapshot](interfaces.digstate.md#snapshot)

## Properties

### id

• `Readonly` **id**: *string*

Defined in: [interfaces/dig-state.ts:5](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state.ts#L5)

## Methods

### create

▸ **create**(`id`: *string*, `defaultState?`: *any*): [*DigStateStore*](interfaces/dig-state-store.digstatestore.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`defaultState?` | *any* |

**Returns:** [*DigStateStore*](interfaces/dig-state-store.digstatestore.md)

Defined in: [interfaces/dig-state.ts:8](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state.ts#L8)

___

### exists

▸ **exists**(`id`: *string*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *boolean*

Defined in: [interfaces/dig-state.ts:11](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state.ts#L11)

___

### get

▸ **get**(`id`: *string*): [*DigStateStore*](interfaces/dig-state-store.digstatestore.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** [*DigStateStore*](interfaces/dig-state-store.digstatestore.md)

Defined in: [interfaces/dig-state.ts:14](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state.ts#L14)

___

### snapshot

▸ **snapshot**(`id?`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`id?` | *string* |

**Returns:** *string*

Defined in: [interfaces/dig-state.ts:18](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state.ts#L18)
