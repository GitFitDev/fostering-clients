import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fabarrow',
  templateUrl: './fabarrow.component.html',
  styleUrls: ['./fabarrow.component.scss']
})
export class FABArrowComponent implements OnInit {
  @Input() direction: 'forward' | 'back' = 'back';
  @Output() fabClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.fabClick.emit(true);
  }
}
