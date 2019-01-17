import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainStatusComponent } from './train-status/train-status.component';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularFireModule } from '@angular/fire';
import { TimeDiffPipe } from './common/pipes/time-diff.pipe';
import { StationStopComponent } from './train-status/station-stop/station-stop.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainStatusComponent,
    TimeDiffPipe,
    StationStopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSlideToggleModule,
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
