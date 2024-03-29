import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow',
  pure: false
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return moment(value).fromNow();
  }

}
