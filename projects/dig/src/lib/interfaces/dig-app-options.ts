import {DigConfig} from './dig-config';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';

export interface DigAppOptions {
  config: DigConfig;
  // todo type these strictly
  adapters?: {
    auth?: any,
    db?: any,
    state?: any,
    storage?: any
  };
}
