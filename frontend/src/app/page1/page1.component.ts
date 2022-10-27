import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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

  output = ['Console'];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {

    this.output.push('test');

  }

}
