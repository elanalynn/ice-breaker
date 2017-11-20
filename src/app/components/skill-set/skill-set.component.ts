import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  public title = 'I am a Software Developer with a focus on UI';

  constructor() { }

  ngOnInit() {
  }

}
