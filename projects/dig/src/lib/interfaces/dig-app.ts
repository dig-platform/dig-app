import {DigConfig} from './dig-config';
import {DigState} from './dig-state';
import {AngularFireStorage} from '@angular/fire/storage';
import {DigProperties} from './dig-properties';
import {DigDb} from './dig-db';
import {DigUser} from './dig-user';
import {StateModel, Store} from '../models/state-model';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

export interface DigApp {
  // Unique app ID
  id: string;

  readonly config: DigConfig;
  readonly properties: DigProperties;

  // todo strictly type these with specific adapter responses
  db(): any;
  storage(): any;
  state(): any;
  auth(): any;
}

