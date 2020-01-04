import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts-service/contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.scss']
})
export class RecentContactsComponent implements OnInit {

  public recentContacts = [];

  constructor(private ContactsService:ContactsService) {}

  ngOnInit() {
  
    this.recentContacts = this.ContactsService.getRecentContacts();
  }
 
}
