import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humain';

    isDropdownOpen = false;

  onDropdownState(state: boolean) {
    this.isDropdownOpen = state;
  }
}
