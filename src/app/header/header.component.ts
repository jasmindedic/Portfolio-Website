import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /* Variable for hamburger menu */
  isMenuOpen = false;

  /* Function to toggle the state of hamburger menu */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
