import { Component, Input, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pages = [
    'home',
    'chat',
    'register',
    'about',
    'contact',
    'settings'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  /* Open */
  openNav() {
    document.getElementById("myNav")
  }

  /* Close */
  closeNav() {
    document.getElementById("myNav")
  }

}
