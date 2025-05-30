import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-title-description',
  standalone: true,
  imports: [TitleComponent, DescriptionComponent],
  templateUrl: './title-description.component.html',
  styleUrl: './title-description.component.scss',
})
export class TitleDescriptionComponent {}
