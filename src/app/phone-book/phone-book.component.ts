import { Component, OnInit } from '@angular/core';

export interface Contact {
  firstName: string;
  secondName: string;
  phone: number;
}

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})

export class PhoneBookComponent implements OnInit {

  public addPhone = false;
  public contactBook: Array<Contact> = [];

  public firstName?: string;
  public secondName?: string;
  public phone?: number;
  public field = '';
  public editMode = false;
  public editIndex?:number;
  public type = 'firstName' 
  public up = true;

  constructor() { }

  ngOnInit():void {
  }

  openForm():void {
    this.addPhone = true;
  }

  closeForm():void {
    this.addPhone = false;
    this.editMode = false;
    this.firstName = ''
    this.secondName = ''
    this.phone = undefined
  }

  addContact():void {
    if(!this.editMode) {
    if(this.firstName && this.secondName && this.phone) {
      let obj:Contact = {
        firstName: this.firstName,
        secondName: this.secondName,
        phone: this.phone
      }
      this.contactBook!.push(obj);
   }
  } else {
    this.contactBook![this.editIndex!].firstName = this.firstName!
    this.contactBook![this.editIndex!].secondName = this.secondName!
    this.contactBook![this.editIndex!].phone = this.phone!
  }
   this.closeForm();
  }

  delContact(index:number):void {
    if(this.contactBook) {
   this.contactBook.splice(index, 1);
    }
  }

  editContact(index: number): void {
    this.editMode = true;
    this.addPhone = true;
    this.editIndex = index;

    this.firstName = this.contactBook![index].firstName
    this.secondName = this.contactBook![index].secondName
    this.phone = this.contactBook![index].phone
  }

  sort(type: string): void {
    this.type = type;
    this.up = !this.up
  }
}

