import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'expressInYears' })
export class ExpressInYearsPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}
