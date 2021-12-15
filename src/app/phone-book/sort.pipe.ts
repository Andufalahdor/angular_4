import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phone-book.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: Array<Contact>, sort: string, up: boolean):any {
    if(!arr) return [];
    if(!sort) return arr;
    if(sort == 'firstName') {
      if (up) {
      return arr.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName)? -1 : 0))
    } else {
      return arr.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName)? -1 : 0))
    }
    } else if (sort == 'secondName') {
      if (up) {
        return arr.sort((a, b) => (a.secondName > b.secondName) ? 1 : ((a.secondName < b.secondName)? -1 : 0))
      } else {
        return arr.sort((a, b) => (a.secondName < b.secondName) ? 1 : ((a.secondName > b.secondName)? -1 : 0))
      }
    } else if (sort == 'phone') {
      if (up) {
        return arr.sort((a, b) => (a.phone > b.phone) ? 1 : ((a.phone < b.phone)? -1 : 0))
      } else {
        return arr.sort((a, b) => (a.phone < b.phone) ? 1 : ((a.phone > b.phone)? -1 : 0))
      }
    }
  }
  
}
