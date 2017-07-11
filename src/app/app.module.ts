import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { TaskdataService } from './taskdata.service';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import { InsertComponent } from './insert/insert.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    DemoComponent,
    InsertComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    TaskdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
