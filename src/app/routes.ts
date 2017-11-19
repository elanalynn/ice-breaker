import {
  DeliberatePracticeComponent,
  ElanasHierarchyComponent,
  ResumeExperienceComponent,
  SkillSetComponent,
  WhyToastmastersComponent
 } from './components';

export const APP_ROUTES = [
  {
    path: 'what',
    component: SkillSetComponent
  },
  {
    path: 'why',
    component: ElanasHierarchyComponent
  },
  {
    path: 'who',
    component: ResumeExperienceComponent
  },
  {
    path: 'how',
    component: WhyToastmastersComponent
  },
  {
    path: 'when',
    component: DeliberatePracticeComponent
  }
];
