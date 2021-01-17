import {AngularFirestoreCollection, AngularFirestoreDocument, QueryFn} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface DigDocumentModel {
    // get the firebase collection for the document collection
    collection(query?: QueryFn): AngularFirestoreCollection;

    // get the firebase document
    doc(id: string): AngularFirestoreDocument<any>;

    // add a new document
    add(doc: any): Promise<any>;

    // update an existing document
    update(id: string, doc: any): Promise<any>;

    // replace an existing document
    set(id: string, doc: any): Promise<any>;

    // delete a document
    delete(id: string): Promise<any>;

    // find a document
    find(id: string): Observable<any> | Promise<any>;

    // query for a collection of documents
    query(QueryFn?): Observable<any> | Promise<any>;

    // todo implement event interfaces
    on(e: string, callback: any): any;
    registerPlugin(plugin: any): any;
}
