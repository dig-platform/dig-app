import {AngularFirestoreDocument, QueryFn} from '@angular/fire/firestore';
import {DigDocumentModel} from '../interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export enum DigDbModelEvents {
    beforePost = 'beforePost',
    afterPost = 'afterPost',
    beforePut = 'beforePut',
    afterPut = 'afterPut',
    beforePatch = 'beforePatch',
    afterPatch = 'afterPatch',
    beforeDelete = 'beforeDelete',
    afterDelete = 'afterDelete',
    beforeGetOne = 'beforeGetOne',
    afterGetOne = 'afterGetOne',
    beforeGetList = 'beforeGetList',
    afterGetList = 'afterGetList',
}

// todo replace http verbs with standard firebase actions (add, update, set, etc)
// todo update this to support firestore admin
export class DigDbModel  implements DigDocumentModel {
    private events = {};

    constructor(private path: string, private adapter: any) {
    }

    collection(queryFn?: QueryFn): any {
        return this.adapter.collection(this.path, queryFn);
    }

    doc(id: string): AngularFirestoreDocument<any> {
        return this.collection().doc(id);
    }

    post(doc: any): Promise<any> {
        doc = this.handleEvent(DigDbModelEvents.beforePost, doc);
        return this.collection().add(doc).then(res => this.handleEvent(DigDbModelEvents.afterPost, res));
    }

    put(id: string, doc: any): Promise<any> {
        doc = this.handleEvent(DigDbModelEvents.beforePut, doc);
        return this.doc(id).set(doc).then(res => this.handleEvent(DigDbModelEvents.afterPut, res));
    }

    patch(id: string, doc: any): Promise<any> {
        doc = this.handleEvent(DigDbModelEvents.beforePatch, doc);
        return this.doc(id).update(doc).then(res => this.handleEvent(DigDbModelEvents.afterPatch, res));
    }

    delete(id: string): Promise<any> {
        this.handleEvent(DigDbModelEvents.beforeDelete, id);
        return this.doc(id).delete().then(res => this.handleEvent(DigDbModelEvents.afterDelete, res));
    }

    get<T>(query: string | QueryFn): Observable<T> | Promise<T> {
        if (typeof query === 'string') {
            this.handleEvent(DigDbModelEvents.beforeGetOne, query);
            return this.doc(query).valueChanges()
                .pipe(
                    map(doc => this.handleEvent(DigDbModelEvents.afterGetOne, Object.assign({}, doc, {id: query})))
                );
        } else {
            this.handleEvent(DigDbModelEvents.beforeGetList, query);
            return this.collection(query).valueChanges({idField: 'id'})
                .pipe(
                    map(collection => this.handleEvent(DigDbModelEvents.afterGetList, collection))
                );
        }
    }

    on(e, callback) {
        const events = this.events[e] ? this.events[e] : [];
        events.push(callback);
        this.events[e] = events;
    }

    registerPlugin(plugin: any) {
        Object.keys(DigDbModelEvents).map(e => {
           if (plugin.hasOwnProperty(e)) {
               this.on(e, plugin[e]);
           }
        });
    }

    private handleEvent(event, ref) {
        const handler = this.events[event];
        if (handler) {
            let newRef = {...ref};
            handler.forEach(fn => newRef = fn(newRef));
            return newRef;
        }
        return ref;
    }
}

