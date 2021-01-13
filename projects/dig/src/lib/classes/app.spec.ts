import { App } from './app';
import {TestBed} from '@angular/core/testing';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {BehaviorSubject} from 'rxjs';

class FirestoreMock {
  collection(key, query): any {
    return {doc: this.doc};
  }
  doc(key): any {
    return {collection: this.collection};
  }
}

class AuthMock {
  authState = new BehaviorSubject({
    uid: 'test'
  });
}

class StorageMock {

}

describe('App', () => {
  it('should create an instance', () => {
    expect(new App({
      config: {id: 'test'},
      state: {tasks: ['test config', 'test state']},
      adapters: {
        db: FirestoreMock,
        auth: AuthMock,
        storage: StorageMock,
      }
    })).toBeTruthy();
  });
});
