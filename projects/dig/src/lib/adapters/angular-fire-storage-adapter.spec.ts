import { AngularFireStorageAdapter } from './angular-fire-storage-adapter';
import {StorageMock} from '../../test/test-mocks';

describe('AngularFireStorageAdapter', () => {
  it('should create an instance', () => {
    expect(new AngularFireStorageAdapter('path', new StorageMock())).toBeTruthy();
  });
  it('should get the ref', () => {
    const mock = new StorageMock();
    const adapter = new AngularFireStorageAdapter('path', mock);
    const path = adapter.ref({id: 'test'}).upload('/my/file', null);
    expect(path).toEqual('/my/file');
  });
});
