import {DigDbModel, DigDbModelEvents} from './dig-db-model';
import {FirestoreMock, PluginMock} from '../../test/test-mocks';
import {DigApp} from '../interfaces';


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
    model.add({action: 'post'}).then(res => {
      expect(res.action).toEqual('post');
      done();
    });
  });

  it('should run callback before post', (done) => {
    model.on(DigDbModelEvents.beforeAdd, (doc) => {
      doc.callbackBefore = true;
      return doc;
    });
    model.add({test: true}).then(res => {
      expect(res.callbackBefore).toBeTrue();
      done();
    });
  });

  it('should run callback after post', (done) => {
    model.on(DigDbModelEvents.afterAdd, (doc) => {
      doc.callbackAfter = true;
      return doc;
    });
    model.add({test: true}).then(res => {
      expect(res.callbackAfter).toBeTrue();
      done();
    });
  });

  it ('Should put a document', (done) => {
    model.set('test', {action: 'put'}).then(res => {
      expect(res.action).toEqual('put')
      done();
    });
  });

  it('should run callback before put', (done) => {
    model.on(DigDbModelEvents.afterUpdate, (doc) => {
      doc.callbackBefore = true;
      return doc;
    });
    model.set('test',{test: true}).then(res => {
      expect(res.callbackBefore).toBeTrue();
      done();
    });
  });

  it('should run callback after put', (done) => {
    model.on(DigDbModelEvents.afterUpdate, (doc) => {
      doc.callbackAfter = true;
      return doc;
    });
    model.set('test', {test: true}).then(res => {
      expect(res.callbackAfter).toBeTrue();
      done();
    });
  });

  it ('Should patch a document', (done) => {
    model.update('test', {action: 'patch'}).then(res => {
      expect(res.action).toEqual('patch')
      done();
    });
  });

  it('should run callback before patch', (done) => {
    model.on(DigDbModelEvents.beforeUpdate, (doc) => {
      doc.callbackBefore = true;
      return doc;
    });
    model.update('test', {test: true}).then(res => {
      expect(res.callbackBefore).toBeTrue();
      done();
    });
  });

  it('should run callback after patch', (done) => {
    model.on(DigDbModelEvents.afterUpdate, (doc) => {
      doc.callbackAfter = true;
      return doc;
    });
    model.update('test', {test: true}).then(res => {
      expect(res.callbackAfter).toBeTrue();
      done();
    });
  });

  it ('should load a plugin', (done) => {
    model.registerPlugin(new PluginMock());
    model.add({test: true}).then(res => {
      expect(res.testEvent).toEqual('beforeAdd');
      done();
    });
  });

  it ('should load a plugin by class reference', (done) => {
    model.registerPlugin(PluginMock);
    model.add({test: true}).then(res => {
      expect(res.testEvent).toEqual('beforeAdd');
      done();
    });
  });

  it ('should load plugins in constructor', (done) => {
    model =   new DigDbModel('test', new FirestoreMock(), [new PluginMock()]);
    model.add({test: true}).then(res => {
      expect(res.testEvent).toEqual('beforeAdd');
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
