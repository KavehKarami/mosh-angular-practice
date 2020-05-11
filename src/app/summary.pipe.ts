import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, num: number) {
    let limitNumber = num ? num : 50;

    return value.substr(0, limitNumber);
  }
}
