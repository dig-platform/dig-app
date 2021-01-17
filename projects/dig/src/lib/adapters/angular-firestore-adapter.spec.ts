import { AngularFirestoreAdapter } from './angular-firestore-adapter';
import {FirestoreMock} from '../../test/test-mocks';

describe('AngularFirestoreAdapter', () => {
  it('should create an instance', () => {
    expect(new AngularFirestoreAdapter(new FirestoreMock())).toBeTruthy();
  });
  it('should return the ref', () => {
    const mock = new FirestoreMock();
    const adapter = new AngularFirestoreAdapter(mock);
    const collection = mock.collection('test');
    expect(collection.doc('docId').data().id).toEqual('angular-firestore-mock');
  });
});
