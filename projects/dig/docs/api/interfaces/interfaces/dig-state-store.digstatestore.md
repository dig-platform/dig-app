[dig](../../README.md) / [Exports](../../modules.md) / [interfaces/dig-state-store](../../modules/interfaces_dig_state_store.md) / DigStateStore

# Interface: DigStateStore

[interfaces/dig-state-store](../../modules/interfaces_dig_state_store.md).DigStateStore

## Hierarchy

* **DigStateStore**

## Table of contents

### Properties

- [current](dig-state-store.digstatestore.md#current)
- [current$](dig-state-store.digstatestore.md#current$)
- [id](dig-state-store.digstatestore.md#id)
- [store](dig-state-store.digstatestore.md#store)

### Methods

- [reset](dig-state-store.digstatestore.md#reset)
- [set](dig-state-store.digstatestore.md#set)
- [update](dig-state-store.digstatestore.md#update)

## Properties

### current

• **current**: *any*

Defined in: [interfaces/dig-state-store.ts:11](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L11)

___

### current$

• **current$**: *Observable*<*any*\>

Defined in: [interfaces/dig-state-store.ts:14](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L14)

___

### id

• `Readonly` **id**: *string*

Defined in: [interfaces/dig-state-store.ts:5](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L5)

___

### store

• `Readonly` **store**: *BehaviorSubject*<*any*\>

Defined in: [interfaces/dig-state-store.ts:8](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L8)

## Methods

### reset

▸ **reset**(): *void*

**Returns:** *void*

Defined in: [interfaces/dig-state-store.ts:23](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L23)

___

### set

▸ **set**(`data`: *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |

**Returns:** *void*

Defined in: [interfaces/dig-state-store.ts:17](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L17)

___

### update

▸ **update**(`data`: *any*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |

**Returns:** *void*

Defined in: [interfaces/dig-state-store.ts:20](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/interfaces/dig-state-store.ts#L20)
