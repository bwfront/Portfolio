import { Component } from '@angular/core';
import { FormService } from '../services/form-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent {
  isHovering = false;
  isChecked = false;
  checkboxId = 'customCheckbox'; // Unique ID for the checkbox

  uncheckedImg = 'assets/images/icons/checkbox/unchecked.png';
  checkedImg = 'assets/images/icons/checkbox/checked.png';
  uncheckedHoverImg = 'assets/images/icons/checkbox/uncheck-hover.png';
  checkedHoverImg = 'assets/images/icons/checkbox/checked-hover.png';

  errorspan: boolean = false;
  buttonEnable: boolean = false;

  inputValueName: string;
  inputValueMail: string;
  inputValueMessage: string;

  emailSend: boolean = false;

  scrollHover: boolean = true;

  constructor(private formService: FormService) {}

  onCheckboxChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.checkInputValues();
  }

  onSubmit(formValue: any) {
    this.formService.sendForm(formValue).subscribe();
    this.inputValueName = ''
    this.inputValueMail = ''
    this.inputValueMessage = ''
    this.emailSend = true;
  }

  onMouseOver() {
    this.isHovering = true;
  }

  onMouseOut() {
    this.isHovering = false;
  }

  getCheckboxImage() {
    if (this.isHovering) {
      return this.isChecked ? this.checkedHoverImg : this.uncheckedHoverImg;
    }
    return this.isChecked ? this.checkedImg : this.uncheckedImg;
  }

  checkInputValues() {
    if (
      this.inputValueName &&
      this.inputValueMessage &&
      this.inputValueMail &&
      this.isChecked
    )
    if(!this.emailSend){
      this.buttonEnable = true;
    }
  }
}
