import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManComponent } from './man/man.component';
import { LionComponent } from './lion/lion.component';
import { LionService } from './lion.service';

@NgModule({
  declarations: [
    AppComponent,
    ManComponent,
    LionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
