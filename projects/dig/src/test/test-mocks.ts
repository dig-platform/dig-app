import {BehaviorSubject, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {DigApp, DigAppOptions, DigConfig, DigUser} from '../lib/interfaces';
import {DigPlatform} from '../lib/dig-platform';

export class FirestoreMock {
  collection(key, query = null): any {
    return {
      type: 'collection',
      doc: this.doc,
      add: (doc) => Promise.resolve(doc),
      key,
      query,
    };
  }
  doc(key): any {
    const data = () => {
      return {
        id: 'angular-firestore-mock'
      };
    }
    return {
      type: 'doc',
      collection: this.collection,
      set: (doc) => Promise.resolve(doc),
      update: (doc) => Promise.resolve(doc),
      delete: () => Promise.resolve('delete'),
      data,
      key};
  }
}

export const TEST_USER: DigUser = {
  uid: 'test',
  email: 'test@email.com',
  photoURL: 'avatar.jpg',
  displayName: 'Test User'
}

export class AuthMock {
  authState = of(TEST_USER);
}

export class StorageMock {
  upload(path: string): string {
    return path;
  }
}

export const moduleDef = {
  providers: [
    {
      provide: AngularFireAuth,
      useValue: new AuthMock()
    },
    {
      provide: AngularFirestore,
      useValue: new FirestoreMock()
    },
    {
      provide: AngularFireStorage,
      useValue: new StorageMock()
    },
  ]
}

export const TEST_DB_ADAPTER = {
  ref: (options: any) => new FirestoreMock()
};
export const TEST_AUTH_ADAPTER = {
  ref: (options: any) => new AuthMock().authState
};
export const TEST_STORAGE_ADAPTER = {
  ref: (options: any) => new StorageMock()
};

export const TEST_APP_OPTIONS: DigAppOptions  = {
  config: {
    id: 'tasks',
    status: 'dev',
    title: 'Test task app',
    description: 'Make this as easy as possible',
    icon: 'construct',
  },
  state: {
    tasks: ['test task']
  },
  adapters: {
    db: TEST_DB_ADAPTER,
    auth: TEST_AUTH_ADAPTER,
    storage: TEST_STORAGE_ADAPTER,
  }
}

export const TEST_APP = DigPlatform.factory(TEST_APP_OPTIONS);


