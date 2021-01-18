# DigApps

The vast majority of apps have the same basic platform dependencies. DigApps creates a lightweight, immutable app container that provides access to these resources in a consistent way.

* [Configuration](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/config.md)
* [User authentication](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/auth.md)
* [Database](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/db.md)
* [File Storage](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/storage.md)
* [State](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/state.md)

## Installation

`npm install @dig-platform/dig-app`

## Getting started

DigApps are based on configuration, which should implement [DigConfig](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/api/interfaces/interfaces.digconfig.md) and 
adapters for the other resources your app requires.

```typescript
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public readonly app: DigApp = DigPlatform.factory({
    config: {
      id: 'todo',
      status: 'plan',
      title: 'Todo',
      description: 'Beginner tutorial',
      icon: 'construct',
    },
    adapters: {
      db: new AngularFirestoreAdapter(this.afs),
      auth: new AngularFireAuthAdapter(this.auth),
      state: new DigStateAdapter({
       todos: []
      })
    }
  });


  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
  }
}
```

## App Resources

### [Configuration](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/config.md)

DigApps are configuration driven, which makes integration and extension as easy as possible.

### [User authentication](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/auth.md)

You can optionally load an authentication adapter which will load the auth state from a wide range of providers into your DigApp.

### [Database](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/db.md)

At the time of writing we only support Firebase Firestore, but you can use our generic adapter to integrate with other data sources.

### [File Storage](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/storage.md)

At the time of writing we only support Firebase Storage, but you can use our generic adapter to integrate with other data sources.

### [State](https://github.com/dig-platform/dig-app/tree/main/projects/dig/docs/app/state.md)

DigApp ships with a simple Rxjs based state container. An Ngrx adapter is in development.



