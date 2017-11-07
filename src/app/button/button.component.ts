import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  yolo :string;

  @Output() signal = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    this.yolo = 'yolo';
  }

  onClick () {
    // componentInstance.signal.emit
    this.yolo = 'YOLO';
    this.signal.emit('hello');
  }

}


// component.onClick