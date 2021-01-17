import { AppModel } from './app-model';
import {TestBed} from '@angular/core/testing';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {BehaviorSubject} from 'rxjs';
import {TEST_APP_OPTIONS} from '../../test/test-mocks';

describe('App', () => {
  it('should create an instance', () => {
    expect(new AppModel(TEST_APP_OPTIONS)).toBeTruthy();
  });
});
