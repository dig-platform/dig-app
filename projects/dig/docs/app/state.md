# [DigApp](../../README.md) state

State provides application state. 

## Example

```typescript
// create DigApp instance
const app: DigApp = DigPlatform.factory({
  config: {
    id: 'todo-min',
  },
  adapters: {
    state: new DigStateAdapter({tasks: ['get the milk']})
  }
});

// get the state container
const taskState = app.state().get('tasks');

// log the tasks to the console
taskState.current$.subscribe(console.log);

// get the existing state using the current property, which returns the current static state
const tasks = {...taskState.current};
tasks.push('get steak if its nice');

// save the updated tasks
taskState.set(tasks);
```

## Adapters

State adapters provide state for your app

### DigStateAdapter

A lightweight, observable state container built on Rxjs Behavior Subjects. See [StateModel](..pi/classes/models/state-model.store.md) for more details.

```typescript
// create a new state container for error messages
const errorStore = app.state().create('error');

try {
    // connect to db
} catch (e) {
    errorStore.set({error: 'Unable to connect to db', read: false});
}

// display the message to the user

// update the read status
errorStore.update({read: true});

// reset the error data
errorStore.reset();
// or if you need to initialize it with values
errorStore.set({error: null, read: false});

// destroy the store and observable subscriptions
errorStore.destroy();

// destroy all state and observable subscriptions
app.state().destroy();
```

#### Array Access

DigState provides direct array access to any stores which model arrays.

> note that you must instantiate your container with an array since DigState will throw an error if your data is not an array

| Method | Description |
| ------ | ----------- |
| `push(entry: any): void` | Push an entry onto the end of your array |
| `pop(): any` | Pop the last entry off your array and return it |
| `unshift(entry: any): void` | Unshift the entry onto the beginning of your array |
| `shift(): any` | Shift the first entry off your array and return it |

```typescript
const userStore = app.state().create('users', []);
userStore.push({...user});
```

### NgrxStateAdapter

This adapter is currently in the planning stage, please feel free to share ideas on https://dighub.io/community

### CallbackAdapter

If your preferred state provider doesn't have an adapter yet you can handle the state logic yourself with the Callback Adapter:

```typescript
// create DigApp instance
const stateContainer = new BehaviorSubject({tasks: ['get the milk']}));
const app: DigApp = DigPlatform.factory({
  config: {
    id: 'todo-min',
  },
  adapters: {
    state: new DigCallbackAdapter(() => {
        return {
            get: () => stateContainer.getValue(),
            getObservable: () => stateContainer.asObservable(),
            set: (value) => stateContainer.next(value)
        };
    })
  }
});

// log the state
app.state().getObservable().subscribe(console.log);

// add a task
const state = app.state().get();
state.tasks.push('get a steak if they are nice');
app.state().set(state);
```


