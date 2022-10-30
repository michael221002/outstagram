import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OutputService } from '../output.service';

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

  output = [
    'line1\n',
    'line2\n',
  ]

  constructor(public os: OutputService) { }

  ngOnInit(): void {
  }

  addOutputConsole(){
    document.getElementById("terminal")
  }

  

}

