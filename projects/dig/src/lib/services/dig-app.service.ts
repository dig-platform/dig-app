import { Injectable } from '@angular/core';
import {DigApp} from '../interfaces/dig-app';
import {DigConfig} from '../interfaces/dig-config';
import {StateModel, Store} from '../models/state-model';
import {DigProperties} from '../interfaces/dig-properties';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AppModel} from '../models/app-model';
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

  constructor() { }

  init(options: DigAppOptions): DigApp {
    const app = new AppModel(options);

    this.appInstance.set(app);
    return app;
  }
}
