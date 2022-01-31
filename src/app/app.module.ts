import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskConComponent } from './components/add-task-con/add-task-con.component';
import { DisplayTaskConComponent } from './components/display-task-con/display-task-con.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskConComponent,
    DisplayTaskConComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
