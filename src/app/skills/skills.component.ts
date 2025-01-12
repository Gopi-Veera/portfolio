import { Component } from '@angular/core';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsSetComponent } from './skills-set/skills-set.component';
import { SkillsSummaryComponent } from './skills-summary/skills-summary.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ExperienceComponent, SkillsSetComponent, SkillsSummaryComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkllsComponent {}
