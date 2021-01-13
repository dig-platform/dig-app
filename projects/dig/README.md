# DigApps

The vast majority of apps have the same basic platform dependencies:

* Configuration
* User authentication
* Database
* File storage
* State

Thankfully we now have platforms like Firebase to build on that provide almost all of the resources to our app as a service.

DigApps creates a lightweight, immutable app container that provides access to these resources in a consistent way.

## Standalone apps

For single apps use the static `DigPlatform.factory(options: DigAppOptions)` method to avoid unnecessary overhead:

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
    state: {
      todos: []
    },
    adapters: {
      db: new AngularFirestoreAdapter(this.afs),
      auth: new AngularFireAuthAdapter(this.auth)
    }
  });


  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
  }
}
```

## Multi Tenant Apps

In multi-tenant environments you can create use an instance of DigPlatform to manage your apps. In this example
we create a service that serves as a hub for your apps, initializing your todo app.

> note that in this example we also specify the dbRoot, which puts your app's data in a subcollection of your database

```typescript
@Injectable({
  providedIn: 'root'
})
export class AppHubService {
  private platform = new DigPlatform();

  get todoApp() {
    return this.platform.get('todo');
  }

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.platform.init({
      config: {
        id: 'todo',
        status: 'plan',
        dbRoot: 'apps/todoApp',
        title: 'Todo',
        description: 'Beginner tutorial',
        icon: 'construct',
      },
      state: {
        todos: []
      },
      adapters: {
        db: new AngularFirestoreAdapter(this.afs),
        auth: new AngularFireAuthAdapter(this.auth)
      }
    });
  }
}
```


