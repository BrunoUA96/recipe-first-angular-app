import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  isHamburgerOpen = false;

  constructor() {}

  ngOnInit() {}

  openHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
    if (this.isDropdownOpen === this.isHamburgerOpen) {
      this.isDropdownOpen = false;
    }
  }

  openDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
