import { Component } from '@angular/core';
import { DescriptionComponent } from 'src/app/skills/description/description.component';
import { TitleComponent } from 'src/app/skills/title/title.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [TitleComponent, DescriptionComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {}
