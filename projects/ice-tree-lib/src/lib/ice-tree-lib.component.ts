import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ice-tree-lib',
  templateUrl: 'ice-tree-lib.component.html',
  styleUrls: ['ice-tree-lib.component.scss']
})
export class IceTreeLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alert(){
    alert('ทดสอบ');
  }

}