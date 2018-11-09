import { TrainService } from './../train.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'com-train-status',
  templateUrl: './train-status.component.html',
  styleUrls: ['./train-status.component.scss']
})
export class TrainStatusComponent implements OnInit {

  constructor(public service: TrainService) { }
    route$;  
    
    ngOnInit() {
        this.route$ = this.service.getSchedules('LNC-PAO');
    }

}
