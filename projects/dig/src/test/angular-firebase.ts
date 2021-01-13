import {BehaviorSubject, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {DigUser} from '../lib/interfaces';

export class FirestoreMock {
  collection(key, query = null): any {
    return {doc: this.doc, key, query};
  }
  doc(key): any {
    const data = () => {
      return {id: 'angular-firestore-mock'};
    }
    return {collection: this.collection, data, key};
  }
}

export class AuthMock {
  authState = of({
    uid: 'test',
    email: 'test@email.com',
    displayName: 'Test User',
    photoURL: 'avatar.png'
  });
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
