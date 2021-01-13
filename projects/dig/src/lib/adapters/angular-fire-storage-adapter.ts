import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {DigConfig} from '../interfaces';
import {AngularFireStorage} from '@angular/fire/storage';
import {StorageMock} from '../../test/angular-firebase';
import {DigAdapter} from '../interfaces/dig-adapter';

export class AngularFireStorageAdapter implements DigAdapter {
    constructor(private storage: AngularFireStorage | StorageMock) {
    }
    ref(config: DigConfig): AngularFireStorage | StorageMock {
        // todo implement folder in bucket for storage
        return this.storage;
    }
}
