import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-ice';
  tiltleName = 'สินค้าบริโภค'

  nodes = [
    {
      name: "หมวดอาหาร",
    id: 1,
    child: [
      {
        id: 11,
        parentId: 1,
        name: 'อาหารคาว',
        totalChild: 5,
        child: [
          {
            id: 111,
            parentId: 11,
            name: 'แกงจืด'
          },
          {
            id: 112,
            parentId: 11,
            name: 'ต้มยำ'
          },
          {
            id: 113,
            parentId: 11,
            name: 'แกงเผ็ด'
          },
          {
            id: 114,
            parentId: 11,
            name: 'ต้มโคล้ง'
          },
          {
            id: 115,
            parentId: 11,
            name: 'พะแนง'
          },    
        ]
      },
      
      {
        id: 12,
        parentId: 1,
        name: 'ขนมหวาน',
        totalChild: 5,
        child: [
          {
            id: 116,
            parentId: 12,
            name: 'ฝอยทอง'
          },
          {
            id: 117,
            parentId: 12,
            name: 'ทองหยอด'
          },
          {
            id: 118,
            parentId: 12,
            name: 'ทองหยิบ'
          },
          {
            id: 119,
            parentId: 12,
            name: 'สังขยา'
          },
          {
            id: 120,
            parentId: 12,
            name: 'ขนนชั้น'
          },    
        ]
      }
    ],
    totalChild: 2

  },
  {
    name:"เครื่องดื่ม",
    id: 2,
    child: [
      {
        id: 13,
        parentId: 2,
        name: 'ชา',
        totalChild: 5,
        child: [
          {
            id: 121,
            parentId: 13,
            name: 'ชาเขียว',
            totalChild: 3,
            child: [
              {
                id: 1111,
                parentId: 121,
                name: 'ชาเขียวมะนาว'
              },
              {
                id: 1112,
                parentId: 121,
                name: 'ชาเขียวมัทฉะ'
              },
              {
                id: 1113,
                parentId: 121,
                name: 'ชาเขียวนมสด'
              }
            ]
          },
          {
            id: 122,
            parentId: 13,
            name: 'ชานม',
            totalChild: 3,
            child: [
              {
                id: 1114,
                parentId: 122,
                name: 'ชานมใต้หวัน'
              },
              {
                id: 1115,
                parentId: 122,
                name: 'ชานมสด+น้ำผึ้ง'
              },
              {
                id: 1116,
                parentId: 122,
                name: 'ชานมชมพู'
              }
            ]
          },
          {
            id: 123,
            parentId: 13,
            name: 'ชาแอปเปิล'
          },
          {
            id: 124,
            parentId: 13,
            name: 'ชาเบอร์รี่'
          },
          {
            id: 125,
            parentId: 13,
            name: 'ชามะนาว'
          },    
        ]
      },
      
      {
        id: 14,
        parentId: 2,
        name: 'น้ำอัดลม',
        totalChild: 5,
        child: [
          {
            id: 126,
            parentId: 14,
            name: 'เป๊ปซี่'
          },
          {
            id: 127,
            parentId: 14,
            name: 'สไปร์ท'
          },
          {
            id: 128,
            parentId: 14,
            name: 'โค๊ก'
          },
          {
            id: 129,
            parentId: 14,
            name: 'แดงแฟนต้า'
          },
          {
            id: 130,
            parentId: 14,
            name: 'เขียวแฟนต้า'
          },    
        ]
      }
    ],
    totalChild: 5
  }
]
}
