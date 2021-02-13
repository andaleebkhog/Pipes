import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    //console.log(value);
    if(!value) {
      return '';
    }
    else{
      return value * 1.60934;

    }
  }

}
