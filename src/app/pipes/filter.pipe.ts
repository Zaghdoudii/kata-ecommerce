import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];
    if (!value || filterString === '' || propName === '') {
      return value; // Returns the input value if no filter is applied
    }
    // Iterating through each item in the input value
    value.forEach((a: any) => {
      // Checking if the specified property contains the filter string (ignoring case)
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a);
      }
    });
    return result;
  }

}