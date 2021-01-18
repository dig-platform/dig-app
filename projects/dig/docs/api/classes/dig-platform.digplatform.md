[dig](../README.md) / [Exports](../modules.md) / [dig-platform](../modules/dig_platform.md) / DigPlatform

# Class: DigPlatform

[dig-platform](../modules/dig_platform.md).DigPlatform

## Hierarchy

* **DigPlatform**

## Table of contents

### Constructors

- [constructor](dig-platform.digplatform.md#constructor)

### Properties

- [app$](dig-platform.digplatform.md#app$)
- [appRegistry](dig-platform.digplatform.md#appregistry)

### Methods

- [exists](dig-platform.digplatform.md#exists)
- [get](dig-platform.digplatform.md#get)
- [init](dig-platform.digplatform.md#init)
- [factory](dig-platform.digplatform.md#factory)

## Constructors

### constructor

\+ **new DigPlatform**(): [*DigPlatform*](dig-platform.digplatform.md)

**Returns:** [*DigPlatform*](dig-platform.digplatform.md)

## Properties

### app$

• `Readonly` **app$**: *Observable*<*any*\>

Defined in: [dig-platform.ts:13](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/dig-platform.ts#L13)

___

### appRegistry

• `Private` **appRegistry**: *BehaviorSubject*<[*DigPlatformRef*](../interfaces/interfaces/dig-platform-ref.digplatformref.md)[]\>

Defined in: [dig-platform.ts:12](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/dig-platform.ts#L12)

## Methods

### exists

▸ **exists**(`id`: *any*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`id` | *any* |

**Returns:** *boolean*

Defined in: [dig-platform.ts:32](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/dig-platform.ts#L32)

___

### get

▸ **get**(`id`: *any*): [*DigApp*](../interfaces/interfaces/dig-app.digapp.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *any* |

**Returns:** [*DigApp*](../interfaces/interfaces/dig-app.digapp.md)

Defined in: [dig-platform.ts:36](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/dig-platform.ts#L36)

___

### init

▸ **init**(`options`: [*DigAppOptions*](../interfaces/interfaces/dig-app-options.digappoptions.md)): [*DigApp*](../interfaces/interfaces/dig-app.digapp.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | [*DigAppOptions*](../interfaces/interfaces/dig-app-options.digappoptions.md) |

**Returns:** [*DigApp*](../interfaces/interfaces/dig-app.digapp.md)

Defined in: [dig-platform.ts:21](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/dig-platform.ts#L21)

___

### factory

▸ `Static`**factory**(`options`: [*DigAppOptions*](../interfaces/interfaces/dig-app-options.digappoptions.md)): [*DigApp*](../interfaces/interfaces/dig-app.digapp.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | [*DigAppOptions*](../interfaces/interfaces/dig-app-options.digappoptions.md) |

**Returns:** [*DigApp*](../interfaces/interfaces/dig-app.digapp.md)

Defined in: [dig-platform.ts:17](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/dig-platform.ts#L17)
