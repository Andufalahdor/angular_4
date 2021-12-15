import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Array<Contact>, field: string): Array<Contact> {
    console.log(arr);
    
    if(!arr) return [];
    if(!field) return arr;
    return arr.filter(contact => contact.firstName.toLowerCase().includes(field.toLowerCase()));
  }

}
