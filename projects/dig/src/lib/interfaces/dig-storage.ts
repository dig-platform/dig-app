import {AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {StringFormat, UploadMetadata} from '@angular/fire/storage/interfaces';

export interface DigStorage {
  upload(path: string, data: StringFormat, metadata?: UploadMetadata): AngularFireUploadTask;
  ref(path: string): AngularFireStorageReference;
}
