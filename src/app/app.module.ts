import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {
  DeliberatePracticeComponent,
  ElanasHierarchyComponent,
  ResumeExperienceComponent,
  SkillSetComponent,
  WhyToastmastersComponent
 } from './components';


@NgModule({
  declarations: [
    AppComponent,
    DeliberatePracticeComponent,
    ElanasHierarchyComponent,
    ResumeExperienceComponent,
    SkillSetComponent,
    WhyToastmastersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
