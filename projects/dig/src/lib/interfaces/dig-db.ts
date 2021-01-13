import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

export interface DigDb {
  // If you have set the `firebasePrefix` option in your app config file returns a document reference to your app sub-collection
  // Otherwise it will return the root AngularFirestore instance
  collection(id: string, queryFn?: any): AngularFirestoreCollection | AngularFirestore;
}
