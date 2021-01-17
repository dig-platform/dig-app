import {DigDbModel, DigDbModelEvents} from './dig-db-model';
import {FirestoreMock} from '../../test/test-mocks';

describe('DbModel', () => {
  let model;
  beforeEach(() => {
    model =   new DigDbModel('test', new FirestoreMock());
  });

  it('should create an instance', () => {
    expect(model).toBeTruthy();
  });

  it ('Should get a collection', () => {
    expect(model.collection('test').type).toEqual('collection');
  });

  it ('Should get a doc', () => {
    expect(model.doc('test').type).toEqual('doc');
  });

  it ('Should post a document', (done) => {
    model.post({action: 'post'}).then(res => {
      expect(res.action).toEqual('post');
      done();
    });
  });

  it('should run callback before post', (done) => {
    model.on(DigDbModelEvents.beforePost, (doc) => {
      doc.callbackBefore = true;
      return doc;
    });
    model.post({test: true}).then(res => {
      expect(res.callbackBefore).toBeTrue();
      done();
    });
  });

  it('should run callback after post', (done) => {
    model.on(DigDbModelEvents.afterPost, (doc) => {
      doc.callbackAfter = true;
      return doc;
    });
    model.post({test: true}).then(res => {
      expect(res.callbackAfter).toBeTrue();
      done();
    });
  });

  it ('Should put a document', (done) => {
    model.put('test', {action: 'put'}).then(res => {
      expect(res.action).toEqual('put')
      done();
    });
  });

  it('should run callback before put', (done) => {
    model.on(DigDbModelEvents.afterPut, (doc) => {
      doc.callbackBefore = true;
      return doc;
    });
    model.put('test',{test: true}).then(res => {
      expect(res.callbackBefore).toBeTrue();
      done();
    });
  });

  it('should run callback after put', (done) => {
    model.on(DigDbModelEvents.afterPut, (doc) => {
      doc.callbackAfter = true;
      return doc;
    });
    model.put('test', {test: true}).then(res => {
      expect(res.callbackAfter).toBeTrue();
      done();
    });
  });

  it ('Should patch a document', (done) => {
    model.patch('test', {action: 'patch'}).then(res => {
      expect(res.action).toEqual('patch')
      done();
    });
  });

  it('should run callback before patch', (done) => {
    model.on(DigDbModelEvents.beforePatch, (doc) => {
      doc.callbackBefore = true;
      return doc;
    });
    model.patch('test', {test: true}).then(res => {
      expect(res.callbackBefore).toBeTrue();
      done();
    });
  });

  it('should run callback after patch', (done) => {
    model.on(DigDbModelEvents.afterPatch, (doc) => {
      doc.callbackAfter = true;
      return doc;
    });
    model.patch('test', {test: true}).then(res => {
      expect(res.callbackAfter).toBeTrue();
      done();
    });
  });

  it ('Should delete a document', (done) => {
    model.delete('test').then(res => {
      expect(res).toEqual('delete')
      done();
    });
  });
});
