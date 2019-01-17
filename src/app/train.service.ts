import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  constructor(private db: AngularFirestore) { }
  getIndicator(ms) {
    if (ms > 120000) {
        if (ms < 900000) {
            return 'late';
        } else {
            return 'very-late';
        }
    } else {
        return 'on-time';
    }
  }

  calculateDelta(actualTime, scheduledTime) {
      if (scheduledTime && actualTime) {
          const delta = actualTime.toDate() - scheduledTime.toDate();

          if (delta < 0) {
              return ((1 * 60 * 60 * 1000) - (delta * -1)) * -1;
          }

          return delta;
      } else {
          return 0;
      }
  }
  
  getSchedules(routeId: string): Observable<Route> {
    return this.db.collection('routes').doc<Route>(routeId).valueChanges().pipe(
      map(value => {
        value.schedule.map(s => {
          s.from.timeDiff = this.calculateDelta(s.from.actual, s.from.scheduled);
          s.from.indicator = this.getIndicator(s.from.timeDiff);
          s.to.timeDiff = this.calculateDelta(s.to.actual, s.to.scheduled);
          s.to.indicator = this.getIndicator(s.to.timeDiff);
          return s;
        });

        return value;
      })
    );
  }
}
