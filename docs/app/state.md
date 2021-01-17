# [DigApp](../README.md) state

State provides application state. 

## Example

```typescript
// create DigApp instance
const app: DigApp = DigPlatform.factory({
  config: {
    id: 'todo-min',
  },
  state: {},
  adapters: {
    auth: new CallbackAdapter(() => {
      return of({
        uid: 'test',
        email: 'test@email.com',
        photoURL: 'avatar.jpg',
        displayName: 'Test User'
      });
    })
  }
});

// static user instance
console.log(app.user);

// observable user instance
app.user$.subscribe(user => console.log(user));
```

## Adapters

Auth adapters provide the current user session to DigApps
