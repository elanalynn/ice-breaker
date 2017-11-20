import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.scss']
})
export class ResumeExperienceComponent implements OnInit {

  public title = 'Animation, Marketing, Hawaii, Solar, etc.';

  // Doughnut
  public doughnutChartLabels: string[] = ['Marketing', 'Animation', 'Teaching', 'Software'];
  public doughnutChartData: number[] = [5, 3, 3, 3];
  public doughnutChartType = 'doughnut';
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'orange',
      borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'blue',
      borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // third color
      backgroundColor: 'yellow',
      borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // fourth color
      backgroundColor: 'aqua',
      borderColor: 'rgba(225,10,24,0.2)',
      // pointBackgroundColor: 'rgba(225,10,24,0.2)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
