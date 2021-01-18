# [DigApp](../README.md) auth

DigApps are configuration driven, which makes integration and extension as easy as possible. 

## Example

```typescript
const app: DigApp = DigPlatform.factory({
  config: {
    id: 'todo',
    status: 'plan',
    title: 'Todo',
    description: 'Beginner tutorial',
    icon: 'construct',
  },
  adapters: {}
});
```

## API

DigApp configuration must implement [DigConfig](../api/interfaces/interfaces.digconfig.md):

| Property | Description |
| -------- | ----------- |
| `id: string` | unique app id |
| `status?: string` | current status |
| `title?: string` | app title |
| `description?: string` | app description |
| `icon?: string` | app icon |


