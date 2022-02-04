import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Match} from './match.model';
import {MatchsApiService} from './matchs-api.service';

@Component({
  selector: 'exams',
  template: `
    <mat-card class="card_headtitle"><h2 class="headtitle"><strong>Today's matches</strong></h2></mat-card>
    <div class="d">
      <mat-card *ngFor="let match of matchList" class="mat-elevation-z5" class = "matchs" > 
        <mat-card-content >
          <mat-card-title class="matchtitle">{{match.Home}} vs {{match.Away}}</mat-card-title>
          <button mat-raised-button color="warn" >See more!</button>
        </mat-card-content>
      </mat-card>
    </div>
  
  `,
  styles: [`

  .card_headtitle{
    background-color: gainsboro !important;
    height:50%
  }
  .d{
    margin-top: 30px;
  }
  .headtitle{
    margin-top: 15px;
    color: rgb(5, 5, 5);
    font-size:170%;


  }
  .matchs{
    margin-bottom: 20px;  
    background-color:Silver !important;
  }
  .matchtitle{
    color:black;
    font-size: 150%;
  }
`]
})

export class MatchComponent implements OnInit
{
    matchListSub: Subscription;
    matchList: Match[];

    constructor(private examsApi: MatchsApiService)
    {
      this.matchList = [{Home : "Marseilles",Away : "Paris"},{Home:"Toulouse", Away:"Lyon"}]



    }

    ngOnInit()
    {

    }




}
