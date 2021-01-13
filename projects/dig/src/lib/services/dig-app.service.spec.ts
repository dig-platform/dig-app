import { TestBed } from '@angular/core/testing';

import { DigAppService } from './dig-app.service';
import {AngularFireModule} from '@angular/fire';
import {DigAppOptions} from '../interfaces/dig-app-options';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {BehaviorSubject} from 'rxjs';

class FirestoreMock {
  collection(key, query): any {
    return {doc: this.doc};
  }
  doc(key): any {
    return {collection: this.collection};
  }
}

class AuthMock {
  authState = new BehaviorSubject({
    uid: 'test'
  });
}

class StorageMock {

}
describe('DigAppService', () => {
  let service: DigAppService;
  let appOptions: DigAppOptions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: new AuthMock()
        },
        {
          provide: AngularFirestore,
          useValue: new FirestoreMock()
        },
        {
          provide: AngularFireStorage,
          useValue: new StorageMock()
        },
      ]
    });
    service = TestBed.inject(DigAppService);
    appOptions = {
      config: {id: 'test', title: 'title'},
      state: {tasks: ['test config', 'test state']}
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should initialize an app from config', () => {
    const app = service.init(appOptions);
    expect(app.id).toEqual('test');
  });

  it ('should be able to get config', () => {
    const app = service.init(appOptions);
    expect(app.config.id).toEqual('test');
  });

  it ('should be able to get properties', () => {
    const app = service.init(appOptions);
    expect(app.properties.title).toEqual('title');
  });

  it ('should be able to get initial state', () => {
    const app = service.init(appOptions);
    expect(app.state.get('tasks').current[0]).toEqual('test config');
  });

  it ('should be able to update initial state', () => {
    const app = service.init(appOptions);
    app.state.get('tasks').set(['new']);
    expect(app.state.get('tasks').current[0]).toEqual('new');
  });
  it ('should be able to add additional state containers', () => {
    const app = service.init(appOptions);
    app.state.create('new', {test: true});
    expect(app.state.get('new').current.test).toBeTrue();
  });
  it ('should get the current user', (done) => {
    const app = service.init(appOptions);
    app.user$.subscribe(user => {
      expect(user.uid).toEqual('test');
      done();
    });
  });
});
