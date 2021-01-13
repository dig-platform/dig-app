import {DigConfig} from './dig-config';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';

export interface DigAppOptions {
  config: DigConfig;
  state: any;
  adapters?: {
    db?: any,
    auth?: any,
    storage?: any
  };
}
