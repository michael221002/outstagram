import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  pages = [
    'page1', 
    'page2', 
    'page3', 
    'page4'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
