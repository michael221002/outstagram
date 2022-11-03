import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BindService {

  name: string = "";

  constructor() { }

  setName(eventData: any) {
    console.log(eventData.value);
  }
}
