import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ChartsModule} from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

import {GeneralService} from './services/general.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,

  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
