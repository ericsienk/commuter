import { StationStop } from '../../train.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'com-station-stop',
  templateUrl: './station-stop.component.html',
  styleUrls: ['./station-stop.component.scss']
})
export class StationStopComponent implements OnInit {
  @Input() stationStop: StationStop;
  @Input() label: String;

  constructor() { }

  ngOnInit() {
  }

}
