import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { Rankings } from './rankings.model';
import { StatApiService } from './stat-api.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  
  team : string;
  rankingsListSub: Subscription;
  rankings= new Rankings('test',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  myChart : Chart;


  constructor(private route: ActivatedRoute, private StatApi: StatApiService) { }

  ngOnInit(): void {    
      this.route.queryParams.subscribe(params => {
        this.team = this.route.snapshot.paramMap.get('team')
      });
      
      this.rankingsListSub = this.StatApi
      .getRankings(this.team)
      .subscribe(result => 
        {this.rankings = result, console.log(this.rankings);
        //    this.myChart = new Chart("myChart", {
        //     type: 'bar',
        //     data: {
        //         labels: ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
        //         datasets: [{
        //             data: [result.One, result.Two, result.Three, result.Four,
        //               result.Five, result.Six, result.Seven, result.Eight,
        //               result.Nine,result.Ten,result.Eleven, result.Twelve,
        //               result.Thirteen,result.Fourteen,result.Fifteen,result.Sixteen,
        //               result.Seventeen,result.Eighteen,result.Nineteen,result.Twenty],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)',
                        
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });
      
        
        
        
        }, console.error);
    const self = this;




}

}
