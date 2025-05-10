import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      ime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sporocilo: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Kontaktno sporočilo:', this.form.value);
      alert('Hvala za sporočilo! (simulirano)');
      this.form.reset();
    }
  }
}
