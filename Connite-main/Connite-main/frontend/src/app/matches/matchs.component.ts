import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Match} from './match.model';
import {MatchsApiService} from './matchs-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'exams',
  templateUrl: './matchs.component.html',
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
    todayDate : string;

    constructor(private matchsApi: MatchsApiService,    private datepipe : DatePipe,)
    {
      this.todayDate =this.datepipe.transform((new Date), 'yyyy-MM-dd');
    }

    ngOnInit()
    {
      this.matchListSub = this.matchsApi
            .getMachtes(this.todayDate)
            .subscribe(result => 
              {console.log(result),this.matchList = result;}, console.error);
      const self = this;
    }




}
