import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})



export class ContactComponent {
  isHovering = false;
  isChecked = false;
  checkboxId = 'customCheckbox'; // Unique ID for the checkbox

  uncheckedImg = 'assets/images/icons/checkbox/unchecked.png';
  checkedImg = 'assets/images/icons/checkbox/checked.png';
  uncheckedHoverImg = 'assets/images/icons/checkbox/uncheck-hover.png';
  checkedHoverImg = 'assets/images/icons/checkbox/checked-hover.png';

  errorspan:boolean = false;
  buttonEnable:boolean = false;

  inputValueName: string;
  inputValueMail: string;
  inputValueMessage: string;

  scrollHover: boolean = true;

  constructor(){
  }

  onCheckboxChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    this.checkInputValues();
  }

  ngOnInit(){

  }

  onSubmit(formValue: any) {
    // You can now use formValue to access the submitted data
    console.log('as');
    // Add your form submission logic here, like sending the data to your server
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

  checkInputValues(){
    this.checkMail();
   if(this.inputValueName && this.inputValueMessage && this.inputValueMail && this.isChecked)
   this.buttonEnable = true; 
  }

  checkMail(){

  }

  sendMessage(){

  }

}

