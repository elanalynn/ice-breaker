import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliberate-practice',
  templateUrl: './deliberate-practice.component.html',
  styleUrls: ['./deliberate-practice.component.scss']
})
export class DeliberatePracticeComponent implements OnInit {

  public title = '10,000 Hours of Deliberate Practice';

  constructor() { }

  ngOnInit() {
  }

}
