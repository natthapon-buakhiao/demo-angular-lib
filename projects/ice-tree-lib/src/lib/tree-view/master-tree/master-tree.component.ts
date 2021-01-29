import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-tree',
  templateUrl: './master-tree.component.html',
  styleUrls: ['./master-tree.component.scss']
})
export class MasterTreeComponent implements OnInit {

@Input()
nodes = new Array<any>();

@Input()
tiltleName: string

  constructor() { }

  ngOnInit() {
    console.log(this.nodes);
    
  }

  viewChildNode(node){

    let findChid;
    let count = 0;

    console.log('res node',node);
    if(node){
      node.showChild = true;
    }
    if (node && !node.child) {
      node.loading = true;
      console.log('node.loading ',node.loading);
    }

      if(node.child) {
        node.loading = false;
      }
       console.log('this.nodes ',this.nodes);
  
  }

  
  hideChildNode(parantId){
    let node = this.findNodeById(this.nodes, parantId);
    console.log('hideChildNode  ',node);
    
    if(node){
      node.showChild = false;
    }
  }


  private findNodeById(o: any, id: number) {
    if (o && typeof o.id != undefined && o.id === id) {
      return o;
    }
    let result: any, p: string | number;
    for (p in o) {
      if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
        result = this.findNodeById(o[p], id);
        if (result) {
          return result;
        }
      }
    }
    return result;
  }

}
