import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    CommonModule,
    MatDatepickerModule,
    MatCheckboxModule
    

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
