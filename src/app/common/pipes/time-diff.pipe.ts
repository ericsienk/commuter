import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {
    transform(value: any, args?: any): any {        
        const minutes: string = (new DatePipe('en-US').transform(String(value), 'm') + ' min');
        
        if (value > 0) {
            return ('+' + minutes);
        } else if (value < 0) {
            return ('-' + minutes);
        }
        
        return minutes;
  }
}
