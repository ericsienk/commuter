import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';

export interface Station {
    station: string;
    stationAbv: string;
}

export interface StationStop extends Station {
    scheduled: Timestamp<any>;
    actual: Timestamp<any>;
}

export interface Schedule {
    from: StationStop;
    to: StationStop;
    trainNumber: string;
}

export interface Route {
    from: Station;
    to: Station;
    schedules: Schedule[];
}

@Injectable({
  providedIn: 'root'
})
export class TrainService {
    constructor(private db: AngularFirestore) {}
    
    getSchedules(routeId: string): Observable<Schedule> {
        return this.db.collection('routes').doc<Schedule>(routeId).valueChanges();
    }
}
