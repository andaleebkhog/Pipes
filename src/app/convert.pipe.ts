import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetedUnits: string): any {
    //console.log(value);
    if(!value) {
      return '';
    }
    switch (targetedUnits){
      case 'm':
        return value * 1609.34;
      case 'km':
        return value * 1.60934;
      case 'cm':
        return value * 160934;
      default:
        return value * 1.60934;

    }
  }

}
