import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent {
  mobilemenu: boolean = false;
  mobileMenu(){
    this.mobilemenu = !this.mobilemenu;
  }
}
