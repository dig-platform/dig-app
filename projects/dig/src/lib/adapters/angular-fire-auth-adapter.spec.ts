import { AngularFireAuthAdapter } from './angular-fire-auth-adapter';
import {AuthMock} from '../../test/test-mocks';

describe('AngularFireAuthAdapter', () => {
  let mock;
  let adapter;
  beforeEach(() => {
    mock = new AuthMock();
    adapter = new AngularFireAuthAdapter(mock);
  });
  it('should create an instance', () => {
    expect(adapter).toBeTruthy();
  });
  it('should get a ref to the current user session', (done) => {
    adapter.ref({id: 'test'}).current$.subscribe(user => {
      expect(user.uid).toEqual('test');
      done();
    });
  });
});
