import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Station {
    station: string;
    stationAbv: string;
}

export interface StationStop extends Station {
    scheduled;
    actual;
    timeDiff;
    indicator: string;
}

export interface Schedule {
    from: StationStop;
    to: StationStop;
    trainNumber: string;
}

export interface Route {
    lastUpdated;
    from: Station;
    to: Station;
    schedule: Schedule[];
}

@Injectable({
  providedIn: 'root'
})
export class TrainService {
    constructor(private db: AngularFirestore) {}
    
    getSchedules(routeId: string): Observable<Route> {
        return this.db.collection('routes').doc<Route>(routeId).valueChanges();
    }
}
