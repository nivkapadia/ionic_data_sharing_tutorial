import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component {
  @Input() parentInfo: any;


  @Output() message = new EventEmitter<string>();

  constructor() { }

  sendData()
  {
    const message = "Hello from c1";
    this.message.emit(message);
  }
}
