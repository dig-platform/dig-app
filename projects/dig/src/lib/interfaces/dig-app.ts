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

  readonly state: StateModel;
  readonly config: DigConfig;
  readonly properties: DigProperties;
  readonly user$: Observable<DigUser>;
  readonly user: DigUser;

  // todo figure out how to type these
  db(): any;
  storage(): any;
}

