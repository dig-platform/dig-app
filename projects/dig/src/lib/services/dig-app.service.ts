import { Injectable } from '@angular/core';
import {DigApp} from '../interfaces/dig-app';
import {DigConfig} from '../interfaces/dig-config';
import {State, Store} from '../classes/state';
import {DigProperties} from '../interfaces/dig-properties';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {App} from '../classes/app';
import {AngularFireStorage} from '@angular/fire/storage';
import {DigAppOptions} from '../interfaces/dig-app-options';

export const DIG_APP_CONFIG = 'DIG_APP_CONFIG';

@Injectable({
  providedIn: 'root'
})
export class DigAppService {
  private appInstance: Store = new Store('dig-app');
  public readonly app$ = this.appInstance.current$;
  public readonly app = this.appInstance.current;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private storage: AngularFireStorage) { }

  init(options: DigAppOptions): DigApp {
    options.adapters = {
      db: this.db,
      auth: this.auth,
      storage: this.storage
    }
    const app = new App(options);
    this.appInstance.set(app);
    return app;
  }
}
