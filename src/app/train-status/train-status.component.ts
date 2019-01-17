import { TrainService, Route, Schedule } from './../train.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'com-train-status',
  templateUrl: './train-status.component.html',
  styleUrls: ['./train-status.component.scss']
})
export class TrainStatusComponent implements OnInit {

constructor(public service: TrainService, private route: ActivatedRoute) { }
  trainRouteFiltered: Route;
  trainRoute: Route;
  routeId: string;
  showAll: boolean;
  
  ngOnInit() {
    this.routeId = this.route.snapshot.paramMap.get('routeId');
    this.service.getSchedules(this.routeId || 'LNC-PAO').subscribe(
      x => this.filter(x, this.showAll)
    );
  }

  filter(trainRoute: Route, showAll: boolean) {
    this.trainRoute = trainRoute;
    this.trainRouteFiltered = Object.assign({}, this.trainRoute);
    this.showAll = showAll;
    if (!this.showAll) {
      const now = new Date();
      now.setTime(now.getTime() - 1 * 60 * 60 * 1000); // subtract an hour from now
      this.trainRouteFiltered.schedule = trainRoute.schedule.filter(s => {
          if (s.from.scheduled) {
              return now <= s.from.scheduled.toDate();
          } else {
              return false;
          }
      });
    }
  }
  
  onShowAllToggle($event) {
    this.filter(this.trainRoute, $event.checked);
  }
}
