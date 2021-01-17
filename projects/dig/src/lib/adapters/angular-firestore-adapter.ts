import {DigAdapter} from '../interfaces/dig-adapter';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {DigConfig} from '../interfaces';
import {FirestoreMock} from '../../test/test-mocks';

export class AngularFirestoreAdapter implements DigAdapter{
  // todo fix tests so this can be strictly typed
    constructor(private firestore: AngularFirestore | AngularFirestoreDocument | FirestoreMock ) {
    }
    ref(config: DigConfig): AngularFirestore | AngularFirestoreDocument | FirestoreMock {
        return this.firestore;
    }
}
