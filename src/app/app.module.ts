import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HomeComponent } from './views/home/home.component';
//import { LiveListComponent } from './views/live-list/live-list.component';
import { HomeModule } from './views/home/home.module';
import { CursosComponent } from './views/cursos/cursos.component';
import { TesteGitComponent } from './views/teste-git/teste-git.component';
import { TestUmComponent } from './views/test-um/test-um.component';
//import { CursosModule } from './views/cursos/cursos.module';
//import { LiveListModule } from './views/live-list/live-list.module';

@NgModule({
  declarations: [
    AppComponent,
    TesteGitComponent,
    TestUmComponent,
    
  
    //LiveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    //CursosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
