import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matchdata',
  templateUrl: './matchdata.component.html',
  styleUrls: ['./matchdata.component.css']
})
export class MatchdataComponent implements OnInit {
  homeTeam: any;
  awayTeam: string;
  odds_homeTeam = 50;
  odds_awayTeam = 30;
  objective_homeTeam = "Reach top 5"
  objective_awayTeam = "Reach top 3"
  importance_homeTeam = 2;
  importance_awayTeam = 10;
  commentaire_homeTeam = "Ce match joue peu pour les objectifs de cet équipe!"
  commentaire_awayTeam = "Ce match joue beaucoup pour les objectifs de cet équipe!"

  constructor(private route: ActivatedRoute)
   {

    }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.homeTeam = this.route.snapshot.paramMap.get('team1')
      this.awayTeam = this.route.snapshot.paramMap.get('team2')
    const self = this; 
    });
  }

}