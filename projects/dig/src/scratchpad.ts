import {DigApp} from './lib/interfaces';
import {DigPlatform} from './lib/dig-platform';
import {CallbackAdapter} from './lib/adapters';
import {of} from 'rxjs';

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


