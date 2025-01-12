import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-skills-summary',
  standalone: true,
  imports: [TitleComponent, DescriptionComponent],
  templateUrl: './skills-summary.component.html',
  styleUrl: './skills-summary.component.scss',
})
export class SkillsSummaryComponent {}
