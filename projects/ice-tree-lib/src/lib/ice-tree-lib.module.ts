import { NgModule } from '@angular/core';
import { IceTreeLibComponent } from './ice-tree-lib.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [IceTreeLibComponent],
  imports: [BrowserModule,BrowserAnimationsModule,MatCardModule,MatButtonModule
  ],
  exports: [IceTreeLibComponent]
})
export class IceTreeLibModule { }
