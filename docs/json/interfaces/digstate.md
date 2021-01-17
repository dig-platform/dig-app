[dig](../README.md) / [Exports](../modules.md) / DigState

# Interface: DigState

## Hierarchy

* **DigState**

## Table of contents

### Properties

- [id](digstate.md#id)

### Methods

- [create](digstate.md#create)
- [exists](digstate.md#exists)
- [get](digstate.md#get)
- [snapshot](digstate.md#snapshot)

## Properties

### id

• `Readonly` **id**: *string*

Defined in: [interfaces/dig-state.ts:5](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-state.ts#L5)

## Methods

### create

▸ **create**(`id`: *string*, `defaultState?`: *any*): DigStateStore

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`defaultState?` | *any* |

**Returns:** DigStateStore

Defined in: [interfaces/dig-state.ts:8](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-state.ts#L8)

___

### exists

▸ **exists**(`id`: *string*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *boolean*

Defined in: [interfaces/dig-state.ts:11](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-state.ts#L11)

___

### get

▸ **get**(`id`: *string*): DigStateStore

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** DigStateStore

Defined in: [interfaces/dig-state.ts:14](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-state.ts#L14)

___

### snapshot

▸ **snapshot**(`id?`: *string*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`id?` | *string* |

**Returns:** *string*

Defined in: [interfaces/dig-state.ts:18](https://github.com/dig-platform/dig-app/blob/42915763/projects/dig/src/lib/interfaces/dig-state.ts#L18)
