import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-jelo',
  templateUrl: './jelo.component.html',
  styleUrls: ['./jelo.component.scss']
})
export class JeloComponent implements OnInit {

  @Input() jelo: any;
  @Output() event = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
    console.log("this.jelo");
  }

}
