import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about.component';
import {MatchsApiService} from './matches/matchs-api.service';
import {MatchComponent} from './matches/matchs.component';
import { TeamsComponent } from './teams/teams.component';

import {Component, ViewEncapsulation} from '@angular/core';
import { DatePipe } from '@angular/common';




const appRoutes: Routes = [
    {path: '', component: MatchComponent},
    {path: 'about', component: AboutComponent},
    {path: 'teams',component: TeamsComponent},
];


@NgModule({
  declarations: [
      AppComponent,
      MatchComponent,
      AboutComponent,
      TeamsComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes,),
      NoopAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      
  ],
    providers: [
        MatchsApiService,
        DatePipe
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
