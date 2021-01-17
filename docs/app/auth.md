# [DigApp](../README.md) auth

Auth provides the user state to a DigApp. The user session is provided as both a static getter or an observable stream, and always implements 
[DigUser](../../projects/dig/docs/interfaces/interfaces.diguser.md).


## Example

```typescript
// create DigApp instance
const app: DigApp = DigPlatform.factory({
  config: {
    id: 'todo-min',
  },
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
console.log(app.auth().current);

// observable user instance
app.auth().current$.subscribe(user => console.log(user));
```

## Adapters

Auth adapters provide the current user session to DigApps

## AngularFireAuth

The AngularFireAuth adapter loads the Firebase auth session using the AngularFirebase package. 

```typescript
export class TodoService {
  public readonly app: DigApp = DigPlatform.factory({
    config: {
      id: 'todo-min',
    },
    adapters: {
      auth: new AngularFireAuthAdapter(this.auth)
    }
  });

  constructor(
      private auth: AngularFireAuth
  ) { }
}
```

## CallbackAdapter

If your preferred auth provider doesn't have an adapter yet you can handle the auth logic yourself with the Callback Adapter, 
which should return an observable instance of `DigUser`.

```typescript
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
```

> Please share your adapter with the community! 







