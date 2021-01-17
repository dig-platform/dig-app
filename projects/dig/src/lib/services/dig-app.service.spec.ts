import { TestBed } from '@angular/core/testing';

import { DigAppService } from './dig-app.service';
import {AngularFireModule} from '@angular/fire';
import {DigAppOptions} from '../interfaces/dig-app-options';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {BehaviorSubject} from 'rxjs';
import {AuthMock, FirestoreMock, StorageMock, TEST_APP_OPTIONS} from '../../test/test-mocks';

describe('DigAppService', () => {
  let service: DigAppService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should initialize an app from config', () => {
    const app = service.init(TEST_APP_OPTIONS);
    expect(app.id).toEqual(TEST_APP_OPTIONS.config.id);
  });

  it ('should be able to get config', () => {
    const app = service.init(TEST_APP_OPTIONS);
    expect(app.config.id).toEqual(TEST_APP_OPTIONS.config.id);
  });

  it ('should be able to get properties', () => {
    const app = service.init(TEST_APP_OPTIONS);
    expect(app.properties.title).toEqual(TEST_APP_OPTIONS.config.title);
  });

  it ('should be able to get initial state', () => {
    const app = service.init(TEST_APP_OPTIONS);
    expect(app.state.get('tasks').current[0]).toEqual(TEST_APP_OPTIONS.state.tasks[0]);
  });

  it ('should be able to update initial state', () => {
    const app = service.init(TEST_APP_OPTIONS);
    app.state.get('tasks').set(['new']);
    expect(app.state.get('tasks').current[0]).toEqual('new');
  });
  it ('should be able to add additional state containers', () => {
    const app = service.init(TEST_APP_OPTIONS);
    app.state.create('new', {test: true});
    expect(app.state.get('new').current.test).toBeTrue();
  });
  it ('should get the current user', (done) => {
    const app = service.init(TEST_APP_OPTIONS);
    app.user$.subscribe(user => {
      expect(user.uid).toEqual('test');
      done();
    });
  });
});
