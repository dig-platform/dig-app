import {DigApp} from '../interfaces/dig-app';
import {AngularFirestore, AngularFirestoreCollection, DocumentData} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {DigUser} from '../interfaces/dig-user';
import {StateModel, Store} from './state-model';
import {DigProperties} from '../interfaces/dig-properties';
import {DigConfig} from '../interfaces/dig-config';
import {Observable} from 'rxjs';
import {DigAppOptions} from '../interfaces/dig-app-options';
import {configFactory} from './config-model';
import {DigDbModel} from './dig-db-model';
import {DigAdapter} from '../interfaces';

export class AppModel implements DigApp{
  private adapterRegistry: any = {};

  get config(): DigConfig {
    return configFactory(this.options.config);
  }

  get id(): string {
    return this.config.id;
  }

  get properties(): DigProperties {
    return {
      id: this.id,
      title: this.config.title,
      description: this.config.description,
      icon: this.config.description
    };
  }

  constructor(private options: DigAppOptions) {
  }

  db(): AngularFirestore | AngularFirestoreCollection<DocumentData> {
    return this.getAdapter('db');
  }

  storage(): AngularFireStorage {
    return this.getAdapter('storage');
  }

  state(): StateModel {
    return this.getAdapter('state');
  }

  auth(): any {
    return this.getAdapter('auth');
  }

  getAdapter(key): any {
    if (! this.options.adapters || ! this.options.adapters.hasOwnProperty(key)) {
      return undefined;
    }
    if (! this.adapterRegistry.hasOwnProperty(key)) {
      this.adapterRegistry[key] = this.options.adapters[key].ref(this.config);
    }
    return this.adapterRegistry[key];
  }

  // creates a model instance
  model(): void {
    throw new Error('model() method is deprecated, use dbModel() instead');
  }

  // todo strictly type plugisn
  dbModel(collectionPath: string, plugins: any[] = null): DigDbModel {
    const model = new DigDbModel(collectionPath, this.db(), plugins);
    return model;
  }
}
