import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, filter } from 'rxjs';

export class FirestoreDataService<T> {
  private collection: AngularFirestoreCollection<T>;

  constructor(private afs: AngularFirestore, collection: string) {
    this.collection = afs.collection<T>(collection);
  }

  add(item: T): Promise<void> {
    const id = this.afs.createId();
    return this.collection.doc(id).set(item);
  }

  getAll(): Observable<T[]> {
    return this.collection.valueChanges({ idField: 'id' });
  }

  get(id: string): Observable<T> {
    return this.collection
      .doc<T>(id)
      .valueChanges()
      .pipe(filter((value): value is T => value !== undefined));
  }

  update(id: string, item: Partial<T>): Promise<void> {
    return this.collection.doc<T>(id).update(item);
  }

  delete(id: string): Promise<void> {
    return this.collection.doc<T>(id).delete();
  }
}
