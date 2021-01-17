[dig](../../README.md) / [Exports](../../modules.md) / [models/config-model](../../modules/models_config_model.md) / ConfigModel

# Class: ConfigModel

[models/config-model](../../modules/models_config_model.md).ConfigModel

## Hierarchy

* **ConfigModel**

## Implements

* [*DigConfig*](../../interfaces/interfaces/dig-config.digconfig.md)

## Table of contents

### Constructors

- [constructor](config-model.configmodel.md#constructor)

### Properties

- [dbRoot](config-model.configmodel.md#dbroot)
- [description](config-model.configmodel.md#description)
- [icon](config-model.configmodel.md#icon)
- [id](config-model.configmodel.md#id)
- [status](config-model.configmodel.md#status)
- [storageRoot](config-model.configmodel.md#storageroot)
- [title](config-model.configmodel.md#title)

## Constructors

### constructor

\+ **new ConfigModel**(`id`: *string*, `status?`: *new* \| *plan* \| *dev* \| *test* \| *live*, `dbRoot?`: *string*, `storageRoot?`: *string*, `title?`: *string*, `description?`: *string*, `icon?`: *string*): [*ConfigModel*](config-model.configmodel.md)

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`status?` | *new* \| *plan* \| *dev* \| *test* \| *live* |
`dbRoot?` | *string* |
`storageRoot?` | *string* |
`title?` | *string* |
`description?` | *string* |
`icon?` | *string* |

**Returns:** [*ConfigModel*](config-model.configmodel.md)

Defined in: [models/config-model.ts:3](https://github.com/dig-platform/dig-app/blob/df110311/projects/dig/src/lib/models/config-model.ts#L3)

## Properties

### dbRoot

• `Optional` `Readonly` **dbRoot**: *string*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[dbRoot](../../interfaces/interfaces/dig-config.digconfig.md#dbroot)

___

### description

• `Optional` `Readonly` **description**: *string*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[description](../../interfaces/interfaces/dig-config.digconfig.md#description)

___

### icon

• `Optional` `Readonly` **icon**: *string*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[icon](../../interfaces/interfaces/dig-config.digconfig.md#icon)

___

### id

• `Readonly` **id**: *string*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[id](../../interfaces/interfaces/dig-config.digconfig.md#id)

___

### status

• `Optional` `Readonly` **status**: *new* \| *plan* \| *dev* \| *test* \| *live*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[status](../../interfaces/interfaces/dig-config.digconfig.md#status)

___

### storageRoot

• `Optional` `Readonly` **storageRoot**: *string*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[storageRoot](../../interfaces/interfaces/dig-config.digconfig.md#storageroot)

___

### title

• `Optional` `Readonly` **title**: *string*

Implementation of: [DigConfig](../../interfaces/interfaces/dig-config.digconfig.md).[title](../../interfaces/interfaces/dig-config.digconfig.md#title)
