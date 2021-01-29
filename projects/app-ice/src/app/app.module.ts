import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IceTreeLibModule} from 'ice-tree-lib';
import { TreeComponent } from './tree-view/tree/tree.component';
import { HeadTreeComponent } from './tree-view/head-tree/head-tree.component';
import { MasterTreeComponent } from './tree-view/master-tree/master-tree.component';
import { CommonModule } from '@angular/common';
import { MasterTreeRoutingModule } from './tree-view/master-tree/master-tree-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    HeadTreeComponent,
    MasterTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IceTreeLibModule,
    CommonModule,
    MasterTreeRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
