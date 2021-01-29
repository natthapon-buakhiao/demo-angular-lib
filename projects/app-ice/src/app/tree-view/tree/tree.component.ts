import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input()
  nodes:any;

  @Input()
  test:[{}];

  @Output()
  clickViewChildNode: EventEmitter<number> = new EventEmitter<number>(); 

  @Output()
  clickHideChildNode: EventEmitter<number> = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }

  viewChildNode(node: any) {
    console.log(node);
    
    this.clickViewChildNode.emit(node);
  }

  hideChildNode(id: number) {
    this.clickHideChildNode.emit(id);
  }


}
