import {DigApp} from '../interfaces/dig-app';
import {AngularFirestore, AngularFirestoreCollection, DocumentData} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';
import {DigUser} from '../interfaces/dig-user';
import {State, Store} from './state';
import {DigProperties} from '../interfaces/dig-properties';
import {DigConfig} from '../interfaces/dig-config';
import {Observable} from 'rxjs';
import {DigAppOptions} from '../interfaces/dig-app-options';
import {configFactory} from './config';

export class App implements DigApp{
  private stateContainer = new State(this.options.state);
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


  get state(): State {
    return this.stateContainer;
  }

  constructor(private options: DigAppOptions) {
    if (this.options.adapters.auth.authState) {
      this.options.adapters.auth.authState.subscribe(user => this.userSession.set(user));
    }
  }

  db(): AngularFirestore | AngularFirestoreCollection<DocumentData> {
    return this.config.firebaseRoot ? this.options.adapters.db.collection(this.config.firebaseRoot) : null;
  }

  storage(): AngularFireStorage {
    return this.options.adapters.storage;
  }
}
