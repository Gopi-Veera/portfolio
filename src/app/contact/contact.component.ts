import { Component } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SummaryComponent, DetailsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
