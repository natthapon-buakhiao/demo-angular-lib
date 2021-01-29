import { NgModule } from '@angular/core';
import { IceTreeLibComponent } from './ice-tree-lib.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TreeComponent } from './tree-view/tree/tree.component';
import { HeadTreeComponent } from './tree-view/head-tree/head-tree.component';
import { MasterTreeComponent } from './tree-view/master-tree/master-tree.component';



@NgModule({
  declarations: [IceTreeLibComponent,   TreeComponent,HeadTreeComponent,MasterTreeComponent],
  imports: [BrowserModule,BrowserAnimationsModule,MatCardModule,MatButtonModule,
  ],
  exports: [IceTreeLibComponent]
})
export class IceTreeLibModule { }
