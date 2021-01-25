import {DigAdapter} from '../interfaces/dig-adapter';
import {AngularFireStorage} from '@angular/fire/storage';
import {AuthMock, StorageMock} from '../../test/test-mocks';
import {DigConfig, DigUser} from '../interfaces';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {Store} from '../models/state-model';

export class AngularFireAuthAdapter implements DigAdapter {
  private userSession = new Store('dig-user');
  constructor(private auth: AngularFireAuth | AuthMock) {
    auth.authState.subscribe(u => {
      this.userSession.set({
        uid: u.uid,
        displayName: u.displayName,
        email: u.email,
        photoURL: u.photoURL
      });
    });
  }
  ref(config: DigConfig): any {
    return {
      current: () => this.userSession.current,
      current$: this.userSession.current$
    };
  }
}
