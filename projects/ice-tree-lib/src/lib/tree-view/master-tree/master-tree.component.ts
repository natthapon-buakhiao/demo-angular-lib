import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-tree',
  templateUrl: './master-tree.component.html',
  styleUrls: ['./master-tree.component.scss']
})
export class MasterTreeComponent implements OnInit {

//   nodes = [
//     {
//     commodittyName: "หมวดอาหาร",
//     id: 1,
//     child: [
//       {
//         id: 11,
//         parentId: 1,
//         commodittyName: 'อาหารคาว',
//         totalChild: 5,
//         child: [
//           {
//             id: 111,
//             parentId: 11,
//             commodittyName: 'แกงจืด'
//           },
//           {
//             id: 112,
//             parentId: 11,
//             commodittyName: 'ต้มยำ'
//           },
//           {
//             id: 113,
//             parentId: 11,
//             commodittyName: 'แกงเผ็ด'
//           },
//           {
//             id: 114,
//             parentId: 11,
//             commodittyName: 'ต้มโคล้ง'
//           },
//           {
//             id: 115,
//             parentId: 11,
//             commodittyName: 'พะแนง'
//           },    
//         ]
//       },
      
//       {
//         id: 12,
//         parentId: 1,
//         commodittyName: 'ขนมหวาน',
//         totalChild: 5,
//         child: [
//           {
//             id: 116,
//             parentId: 12,
//             commodittyName: 'ฝอยทอง'
//           },
//           {
//             id: 117,
//             parentId: 12,
//             commodittyName: 'ทองหยอด'
//           },
//           {
//             id: 118,
//             parentId: 12,
//             commodittyName: 'ทองหยิบ'
//           },
//           {
//             id: 119,
//             parentId: 12,
//             commodittyName: 'สังขยา'
//           },
//           {
//             id: 120,
//             parentId: 12,
//             commodittyName: 'ขนนชั้น'
//           },    
//         ]
//       }
//     ],
//     totalChild: 2

//   },
//   {
//     commodittyName:"เครื่องดื่ม",
//     id: 2,
//     child: [
//       {
//         id: 13,
//         parentId: 2,
//         commodittyName: 'ชา',
//         totalChild: 5,
//         child: [
//           {
//             id: 121,
//             parentId: 13,
//             commodittyName: 'ชาเขียว',
//             totalChild: 3,
//             child: [
//               {
//                 id: 1111,
//                 parentId: 121,
//                 commodittyName: 'ชาเขียวมะนาว'
//               },
//               {
//                 id: 1112,
//                 parentId: 121,
//                 commodittyName: 'ชาเขียวมัทฉะ'
//               },
//               {
//                 id: 1113,
//                 parentId: 121,
//                 commodittyName: 'ชาเขียวนมสด'
//               }
//             ]
//           },
//           {
//             id: 122,
//             parentId: 13,
//             commodittyName: 'ชานม',
//             totalChild: 3,
//             child: [
//               {
//                 id: 1114,
//                 parentId: 122,
//                 commodittyName: 'ชานมใต้หวัน'
//               },
//               {
//                 id: 1115,
//                 parentId: 122,
//                 commodittyName: 'ชานมสด+น้ำผึ้ง'
//               },
//               {
//                 id: 1116,
//                 parentId: 122,
//                 commodittyName: 'ชานมชมพู'
//               }
//             ]
//           },
//           {
//             id: 123,
//             parentId: 13,
//             commodittyName: 'ชาแอปเปิล'
//           },
//           {
//             id: 124,
//             parentId: 13,
//             commodittyName: 'ชาเบอร์รี่'
//           },
//           {
//             id: 125,
//             parentId: 13,
//             commodittyName: 'ชามะนาว'
//           },    
//         ]
//       },
      
//       {
//         id: 14,
//         parentId: 2,
//         commodittyName: 'น้ำอัดลม',
//         totalChild: 5,
//         child: [
//           {
//             id: 126,
//             parentId: 14,
//             commodittyName: 'เป๊ปซี่'
//           },
//           {
//             id: 127,
//             parentId: 14,
//             commodittyName: 'สไปร์ท'
//           },
//           {
//             id: 128,
//             parentId: 14,
//             commodittyName: 'โค๊ก'
//           },
//           {
//             id: 129,
//             parentId: 14,
//             commodittyName: 'แดงแฟนต้า'
//           },
//           {
//             id: 130,
//             parentId: 14,
//             commodittyName: 'เขียวแฟนต้า'
//           },    
//         ]
//       }
//     ],
//     totalChild: 5
//   }
// ]

@Input()
nodes = new Array<any>();
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

      // this.nodes.forEach(element => {
      //   findChid = this.child.filter((option) =>
      //   option.parentId.toString().startsWith(element.id.toString()) ,
      //   );
      //   // this.nodes[count].child = this.nodes[count].id === node.id ? findChid : null;
      //   this.nodes[count].child = findChid;
      //   count++;
      // });
    }

      if(node.child) {
        node.loading = false;
      }
       console.log('this.nodes ',this.nodes);

    // }
  
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
