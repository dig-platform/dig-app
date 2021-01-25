import {AngularFirestoreDocument, QueryFn} from '@angular/fire/firestore';
import {DigDocumentModel} from '../interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export enum DigDbModelEvents {
  beforeAdd = 'beforeAdd',
  afterAdd = 'afterAdd',
  beforeUpdate = 'beforeUpdate',
  afterUpdate = 'afterUpdate',
  beforeDelete = 'beforeDelete',
  afterDelete = 'afterDelete',
  beforeReadDoc = 'beforeReadDoc',
  afterReadDoc = 'afterReadDoc',
  beforeReadCollection = 'beforeReadCollection',
  afterReadCollection = 'afterReadCollection',
}

// todo replace http verbs with standard firebase actions (add, update, set, etc)
// todo update this to support firestore admin
export class DigDbModel  implements DigDocumentModel {
  private events = {};
  private pluginRegistry = [];

  constructor(private path: string, private adapter: any, private plugins: any[] = []) {
    if (plugins && plugins.length > 0) {
      plugins.forEach(plugin => {
        this.registerPlugin(plugin);
      });
    }
  }

  collection(queryFn?: QueryFn): any {
    return this.adapter.collection(this.path, queryFn);
  }

  doc(id: string): AngularFirestoreDocument<any> {
    return this.collection().doc(id);
  }

  add(doc: any): Promise<any> {
    doc = this.handleEvent(DigDbModelEvents.beforeAdd, doc);
    return this.collection().add(doc).then(res => this.handleEvent(DigDbModelEvents.afterAdd, res));
  }

  set(id: string, doc: any): Promise<any> {
    doc = this.handleEvent(DigDbModelEvents.beforeUpdate, doc);
    return this.doc(id).set(doc).then(res => this.handleEvent(DigDbModelEvents.afterUpdate, res));
  }

  update(id: string, doc: any): Promise<any> {
    doc = this.handleEvent(DigDbModelEvents.beforeUpdate, doc);
    return this.doc(id).update(doc).then(res => this.handleEvent(DigDbModelEvents.afterUpdate, res));
  }

  delete(id: string): Promise<any> {
    this.handleEvent(DigDbModelEvents.beforeDelete, id);
    return this.doc(id).delete().then(res => this.handleEvent(DigDbModelEvents.afterDelete, res));
  }

  find<T>(id: string): Observable<T> | Promise<T> {
    this.handleEvent(DigDbModelEvents.beforeReadDoc, id);
    return this.doc(id).valueChanges()
      .pipe(
        map(doc => this.handleEvent(DigDbModelEvents.afterReadDoc, Object.assign({}, doc, {id})))
      );
  }

  query<T>(query: QueryFn): Observable<T> | Promise<T> {
    this.handleEvent(DigDbModelEvents.beforeReadCollection, query);
    return this.collection(query).valueChanges({idField: 'id'})
      .pipe(
        map(collection => this.handleEvent(DigDbModelEvents.afterReadCollection, collection))
      );
  }

  on(e, callback): any {
    const events = this.events[e] ? this.events[e] : [];
    events.push(callback);
    this.events[e] = events;
  }

  registerPlugin(plugin: any): any {
    if (typeof plugin !== 'object') {
      plugin = new plugin();
    }
    this.pluginRegistry.push(plugin);
  }

  private handleEvent(event, ref): any {
    let newRef = Array.isArray(ref) ? [...ref] : {...ref};
    // handle individual events
    const handler = this.events[event];
    if (handler) {
      handler.forEach(fn => newRef = fn(newRef));
    }
    // handle plugins
    if (this.pluginRegistry.length > 0) {
      this.pluginRegistry.forEach(plugin => {
        if (typeof plugin[event] === 'function') {
          newRef = plugin[event](newRef);
        }
      });
    }
    return newRef;
  }
}

