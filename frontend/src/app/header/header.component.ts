import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pages = [
    'home',
    'page1',
    'page2',
    'page3',
    'page4'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
