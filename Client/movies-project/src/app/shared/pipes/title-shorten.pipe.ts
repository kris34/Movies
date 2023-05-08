import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleShorten'
})
export class TitleShortenPipe implements PipeTransform {

  transform(value: string, maxCount = 19): unknown {
    return `${value.substring(0, maxCount)}${
      value.length > maxCount ? '...' : ''
    }`;
  }

}
