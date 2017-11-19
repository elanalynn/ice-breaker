import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
