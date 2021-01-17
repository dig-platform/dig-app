import {DigAdapter} from '../interfaces/dig-adapter';
import {AngularFireStorage} from '@angular/fire/storage';
import {AuthMock, StorageMock} from '../../test/test-mocks';
import {DigConfig, DigUser} from '../interfaces';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';

export class AngularFireAuthAdapter implements DigAdapter {
  constructor(private auth: AngularFireAuth | AuthMock) {
  }
  ref(config: DigConfig): any {
    return this.auth.authState;
  }
}
