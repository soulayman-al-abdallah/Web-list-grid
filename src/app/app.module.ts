import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantCardComponent } from './applicant-card/applicant-card.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApplicantCardComponent,
    TableComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AgGridModule.withComponents([ButtonComponent]),
    BrowserAnimationsModule,
  ],

  providers: [TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
