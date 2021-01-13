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

export class AppModel implements DigApp{
  private stateContainer = new StateModel(this.options.state);
  private userSession = new Store('dig-user');
  public readonly user$: Observable<DigUser> = this.userSession.current$;
  public readonly user: DigUser = this.userSession.current;

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


  get state(): StateModel {
    return this.stateContainer;
  }

  constructor(private options: DigAppOptions) {
    if (this.options.adapters.auth) {
      this.options.adapters.auth.ref(this.config).subscribe(u => {
        this.userSession.set({
          uid: u.uid,
          displayName: u.displayName,
          email: u.email,
          phone: u.phone,
          photoURL: u.photoURL
        });
      });
    }
  }

  db(): AngularFirestore | AngularFirestoreCollection<DocumentData> {
    return this.options.adapters && this.options.adapters.db ? this.options.adapters.db.ref(this.config) : undefined;
  }

  storage(): AngularFireStorage {
    return this.options.adapters && this.options.adapters.storage ? this.options.adapters.storage.ref(this.config) : undefined;
  }
}
