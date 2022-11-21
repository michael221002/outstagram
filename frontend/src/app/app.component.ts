


import {Component, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = 'username';
  message = '';
  messages = [];
  x = ''; 
  totalAngularPackages: any;

  test = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('25291c0752d6089a660c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
    });
  }

  submit() {
    //this.http.post('http://localhost:8000/hallo', {
    //  username: this.username,
    //  message: this.message
    //}).subscribe(() => this.message = '');

    this.http.get('http://127.0.0.1:8000/hallo').subscribe((response) => {console.log(response)} );

    }
}
