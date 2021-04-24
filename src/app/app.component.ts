import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gmail-clone';
  value = ""
  sideBar = false
  showFiller = false;
  clickTest() {
    this.sideBar = !this.sideBar;
  }

  
}
