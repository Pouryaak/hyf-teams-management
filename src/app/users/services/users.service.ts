import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map, take } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { FirestoreDataService } from 'src/app/shared/services/firestore-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends FirestoreDataService<User> {
  constructor(afs: AngularFirestore) {
    super(afs, 'users');
  }

  userExists(email: string): Observable<boolean> {
    return this.afs.collection('users', ref => ref.where('email', '==', email))
      .valueChanges()
      .pipe(
        take(1),
        map(users => users.length > 0)
      );
  }

  addUserIfNotExists(userDetails: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userExists(userDetails.email).subscribe(exists => {
        if (exists) {
          reject('User with this email already exists.');
        } else {
          this.add(userDetails).then(resolve).catch(reject);
        }
      });
    });
  }

  // You can add more user-specific methods here
}
