import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import {
  DeliberatePracticeComponent,
  ElanasHierarchyComponent,
  ResumeExperienceComponent,
  SkillSetComponent,
  WhyToastmastersComponent
} from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(SkillSetComponent)
  @ViewChild(ElanasHierarchyComponent)
  @ViewChild(ResumeExperienceComponent)
  @ViewChild(WhyToastmastersComponent)
  @ViewChild(DeliberatePracticeComponent)

  private skillSetComponent: SkillSetComponent;
  private elanasHierarchyComponent: ElanasHierarchyComponent;
  private resumeExperienceComponent: ResumeExperienceComponent;
  private whyToastmastersComponent: WhyToastmastersComponent;
  private deliberatePracticeComponent: DeliberatePracticeComponent;

  title: string;

  constructor(private route: ActivatedRoute) {
    console.log(route.url.subscribe(a => a));
    this.setTitle(route.url.subscribe(a => a));
  }

  setTitle(url) {
    console.log(url);
    switch (url) {
      case '/what': this.title = new SkillSetComponent().title;
        break;
      // case url.contains('why'): this.title = new ElanasHierarchyComponent().title;
      //   break;
      // case url.contains('why'): this.title = new ResumeExperienceComponent().title;
      //   break;
      // case url.contains('why'): this.title = new WhyToastmastersComponent().title;
      //   break;
      // case url.contains('why'): this.title = new DeliberatePracticeComponent().title;
      //   break;
      default: this.title = new SkillSetComponent().title;
        break;
    }
  }
}
