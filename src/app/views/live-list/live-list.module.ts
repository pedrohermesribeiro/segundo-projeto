import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { LiveListComponent } from './live-list.component';
import {MatCardModule} from '@angular/material/card';
import { CursosModule } from '../cursos/cursos.module';

@NgModule({
  declarations: [
    LiveListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    CursosModule
  ],
  exports:[
    LiveListComponent
  ]
})
export class LiveListModule { }
