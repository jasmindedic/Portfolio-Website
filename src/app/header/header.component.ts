import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
