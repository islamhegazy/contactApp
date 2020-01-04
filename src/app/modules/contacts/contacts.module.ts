import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-components/contacts-list/contacts-list.component';
import { AddContactComponent } from './contacts-components/add-contact/add-contact.component';
import { AlphabetFilterModule } from 'alphabet-filter';
import { RecentContactsComponent } from './contacts-components/recent-contacts/recent-contacts.component';
import { ReversePipe } from 'src/app/pipes/revers-pipe';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule, MatSidenavModule, MatListModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const MaterialComponents = [
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [ContactsListComponent, AddContactComponent, RecentContactsComponent,ReversePipe],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    AlphabetFilterModule,
    MaterialComponents,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ContactsListComponent,
    AlphabetFilterModule,
  ]
})
export class ContactsModule { }
