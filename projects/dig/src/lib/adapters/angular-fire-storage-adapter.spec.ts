import { AngularFireStorageAdapter } from './angular-fire-storage-adapter';
import {StorageMock} from '../../test/angular-firebase';

describe('AngularFireStorageAdapter', () => {
  it('should create an instance', () => {
    expect(new AngularFireStorageAdapter(new StorageMock())).toBeTruthy();
  });
  it('should get the ref', () => {
    const mock = new StorageMock();
    const adapter = new AngularFireStorageAdapter(mock);
    const path = adapter.ref({id: 'test'}).upload('/my/file', null);
    expect(path).toEqual('/my/file');
  });
});
