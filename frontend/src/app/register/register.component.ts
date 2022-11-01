import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
