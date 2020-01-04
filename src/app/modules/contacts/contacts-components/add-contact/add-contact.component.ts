import {
	Component,
	OnInit,
	ChangeDetectorRef
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormControl,
	Validators
} from '@angular/forms';
import {
	ContactsService
} from '../../contacts-service/contacts.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-contact',
	templateUrl: './add-contact.component.html',
	styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

	form: FormGroup;
	fileData: File = null;
	previewUrl: any = 'assets/user.png';
	fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  
	constructor(
		private fb: FormBuilder,
		private cd: ChangeDetectorRef,
    private ContactsService: ContactsService,
    private router:Router
	) {}


	ngOnInit() {

		this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      image: new FormControl(this.fileData, [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
		});
  }

	fileProgress(fileInput: any) {
		this.fileData = < File > fileInput.target.files[0];
    this.preview();
	}
	preview() {
		// Show preview 
		var mimeType = this.fileData.type;
		if (mimeType.match(/image\/*/) == null) {
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(this.fileData);
		reader.onload = (_event) => {
			this.previewUrl = reader.result;
		}
  }
  

	submit(form) {
		if (form.valid ) {
      this.ContactsService.addContact(form.value);
      this.router.navigate(['/']);
		}
	}
  onCancel(){
    this.router.navigate(['/']);
  }
}