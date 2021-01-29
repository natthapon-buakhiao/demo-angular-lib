import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head-tree',
  templateUrl: './head-tree.component.html',
  styleUrls: ['./head-tree.component.scss']
})
export class HeadTreeComponent implements OnInit {

  @Input()
  nodes: any;

  @Input()
  tiltleName: string

  @Output()
  clickViewChildNode: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  clickHideChildNode: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  viewChildNode(node) {
    console.log("viewChildNode => " + node.id);
    this.clickViewChildNode.emit(node);
  }

  hideChildNode(id: number) {
    console.log("hideChildNode => " + id);
    this.clickHideChildNode.emit(id);
  }

}
