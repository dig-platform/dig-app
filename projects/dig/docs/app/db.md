# [DigApp](../../README.md) database

DigDb provides a common, event driven api to a range of database systems.

## Example

```typescript
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
      db: new AngularFirestoreAdapter(this.afs)
    }
  });

  constructor(
      private auth: AngularFireAuth
  ) { }
}
```

## DB Models

Models provide a common API to your app database.

### Methods

| Method | Description |
| ----- | ------------ |
| `collection(queryFn?: QueryFn)` | Fetches a collection reference |
| `doc(id: string)` | Fetches a document reference |
| `add(doc: any)` | Adds a new document |
| `set(id: string, doc: any)` | Replaces an existing document |
| `update(id: string, doc: any)` | Updates an existing document |
| `delete(id: string)` | Deletes an existing document |
| `find<T>(id: string)` | Fetches an existing document |
| `query<T>(query: QueryFn)` | Queries a collection |

### Example

```typescript
const model = app.dbModel('todo');
model.add({text: 'get the milk'});
// database doc = {text: 'get the milk'}
```

## Events

`DigDbModel` provides two types of events:

* Before: runs before the db request is processed, commonly used to transform data prior to pushing to the database
* After: runs after the db request is processed, commonly used to transform the result data from the database

| Event | Description | Data |
| ----- | ----------- | ---- |
| `beforeAdd` | runs before a record is inserted | document data |
| `afterAdd` | runs after a record is inserted | response from your database  |
| `beforeUpdate` | runs before a record is updated | document data |
| `afterUpdate` | runs after a record is updated | database response |
| `beforeDelete` | runs before a record is deleted | document id |
| `afterDelete` | runs after a record is deleted | database response |
| `beforeReadDoc` | runs before you fetch an individual document | document id |
| `afterReadDoc` | runs after you fetch a document | document data |
| `beforeReadCollection` | runs before you query a collection | query |
| `afterReadCollection` | runs after you query a collection | collection document data |

### Example

```typescript
const model = app.dbModel('todo');
model.on(DigDbModelEvents.beforeAdd, (doc) => Object.assign({}, doc, {status: 'new'}));
model.add({text: 'get the milk'});
// database doc = {text: 'get the milk', status: 'new'}
```

## Plugins

Plugins enable you to bundle event handlers for reuse.

### MetaData

DigPluginMetadata adds common metadata to documents

```typescript
const model = app.dbModel('todo', [DigPluginMetadata]);
```

| Field | Description |
| ----- | ----------- |
| `createdAt` | date/time the document was created |
| `createdBy` | uid of user who created the document |
| `lastModified` | date/time the document was last updated |
| `modifiedBy` | uid of user who updated the document |

### Writing your own plugins

A plugin is a class that bundles database events. The model will inject the current app instance and options into your class.

Your plugin can include a method to handle any of the database events listed above.

```typescript
export class StatusPlugin {

    constructor(private app: DigApp, private options?: any) {
    }

    beforeAdd(doc): any {
        doc.status = 'new';
        return doc;
    }

    beforeUpdate(doc): any {
        doc.status = 'updated';
        return doc;
    }
}
```

## Adapters

Adapters connect your database of choice to your app.

> At this time of writing Firebase Firestore is the only supported database, but we are currently working on a number of alternatives.

### AngularFirestore

```typescript
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
      db: new AngularFirestoreAdapter(this.afs)
    }
  });

  constructor(
      private auth: AngularFireAuth
  ) { }
}
```
