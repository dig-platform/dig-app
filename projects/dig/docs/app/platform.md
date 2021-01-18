
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
      adapters: {
        db: new AngularFirestoreAdapter(this.afs),
        auth: new AngularFireAuthAdapter(this.auth),
        state: new DigStateAdapter({
          todos: []
        })
      }
    });
  }
}
```
