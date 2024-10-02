import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  parentInfo = {
    name: "Foo",
    age: 20,
    school: "Sheridan"
  };

  dataReceived: any;

  receiveData(data: string)
{
    this.dataReceived = data;
    console.log(data);
  }
}
