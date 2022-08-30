import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { LiveListModule } from '../live-list/live-list.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    LiveListModule
  ],
  exports: [
    HomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
