import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {

  @Output() dropdownState = new EventEmitter<boolean>();

  ngAfterViewInit(): void {

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {

      dropdown.addEventListener('show.bs.dropdown', () => {
        this.dropdownState.emit(true);
      });

      dropdown.addEventListener('hide.bs.dropdown', () => {
        this.dropdownState.emit(false);
      });

    });
  }
}
