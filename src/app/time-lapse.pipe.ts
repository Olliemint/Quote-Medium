import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapse'
})
export class TimeLapsePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
