import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainStatusComponent } from './train-status/train-status.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TrainStatusComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp({
        apiKey: 'AIzaSyAPTOMMPymNmeGzDe4XiUK22SrAvfd-yNQ',
        authDomain: 'commuter-c9486.firebaseapp.com',
        databaseURL: 'https://commuter-c9486.firebaseio.com',
        projectId: 'commuter-c9486',
      }),
        AngularFirestoreModule.enablePersistence()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
