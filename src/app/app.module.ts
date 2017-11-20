import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

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
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
