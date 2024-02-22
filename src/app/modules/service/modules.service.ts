import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Module } from 'src/app/core/models/module.model';
import { FirestoreDataService } from 'src/app/shared/services/firestore-data.service';

@Injectable({
  providedIn: 'root'
})
export class ModulesService extends FirestoreDataService<Module> {

  constructor(afs: AngularFirestore) {
    super(afs, 'modules');
  }
}
