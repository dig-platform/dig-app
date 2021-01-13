import {DigAdapter} from '../interfaces/dig-adapter';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {DigConfig} from '../interfaces';
import {FirestoreMock} from '../../test/angular-firebase';

export class AngularFirestoreAdapter implements DigAdapter{
  // todo fix tests so this can be strictly typed
    constructor(private afs: AngularFirestore | FirestoreMock ) {
    }
    ref(config: DigConfig): AngularFirestore | AngularFirestoreDocument | FirestoreMock {
        if (config.dbRoot) {
            return this.afs.doc(config.dbRoot);
        } else {
            return this.afs;
        }
    }
}
