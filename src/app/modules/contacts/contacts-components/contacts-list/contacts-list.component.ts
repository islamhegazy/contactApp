import { Component, OnInit,OnDestroy } from '@angular/core';
import { ContactsService } from '../../contacts-service/contacts.service';
import { ContactList } from 'src/app/models/contact-list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {
  Subscription:Subscription;
  ContactList : ContactList [] = [];

  constructor(private ContactsService:ContactsService) {}

  ngOnInit() {

    this.Subscription = this.ContactsService.ContactListChanged.subscribe((ContactList: ContactList[]) => {
      this.ContactList = ContactList;
    })
    this.ContactList = this.ContactsService.getContactList().filter(
      data => data.email !== null
    );

   }
  
  public selected(contact) {
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
}
