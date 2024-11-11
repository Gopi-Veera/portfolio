import { Component } from '@angular/core';
import { TitleDescriptionComponent } from './title-description/title-description.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsSetComponent } from "./skills-set/skills-set.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TitleDescriptionComponent,
    TitleDescriptionComponent,
    ExperienceComponent,
    SkillsSetComponent
],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkllsComponent {}
