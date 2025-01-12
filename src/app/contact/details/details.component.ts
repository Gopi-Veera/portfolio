import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  submitStatus = false;
  submitMsg = '';
  private readonly _serviceId = 'service_sr71jrg';
  private readonly _templateId = 'template_jmdoxrd';
  private readonly _publicKey = '--92zCyoBJQmrk2cP';
  private fb = inject(FormBuilder);
  private cd = inject(ChangeDetectorRef);
  contactForm = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(64),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[- +()0-9]+$'),
      Validators.maxLength(15),
    ]),
    comments: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  });

  constructor() {
    this.contactForm.valueChanges.subscribe(() => {
      this.submitStatus = false;
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get comments() {
    return this.contactForm.get('comments');
  }

  onSubmit() {
    emailjs
      .send(
        this._serviceId,
        this._templateId,
        {
          from_name: this.name?.value,
          to_name: 'Gopi Veeramani',
          from_email: this.email?.value,
          from_phone: this.phone?.value,
          message: this.comments?.value,
        },
        { publicKey: this._publicKey },
      )
      .then(
        (response) => {
          if (response.status === 200) {
            this.contactForm.reset();
            this.submitStatus = !this.submitStatus;
            this.submitMsg = 'Submitted successfully !!!!';
            this.cd.markForCheck();
          }
        },
        (error) => {
          if (error) {
            this.submitMsg =
              'Unable to submit your information, please try again !!!';
          }
        },
      );
  }
}
