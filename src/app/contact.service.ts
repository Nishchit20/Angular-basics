import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contact:Contact[] = [
    {
        pname: "Refrigerator",
        ccname:'Suman',
        ccno:"9741364080"
    },
    {
      pname: "Washing machine",
      ccname:'Karthik',
      ccno:"9876543210"
    },
    {
      pname: "Television",
      ccname:'Abhishek',
      ccno:"8745623653"
    },
    {
      pname: "Microoven",
      ccname:'Arunagiri',
      ccno:"7742533540"
    },
    {
      pname: "Others",
      ccname:'Nishchit',
      ccno:"9148848040"
    },
  ]
  public getContactDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact);
      }, 1000);
    });
    return contactObservable;
  }
}
