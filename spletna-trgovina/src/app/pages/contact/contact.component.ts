import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      ime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sporocilo: ['', Validators.required]
    });
  }

  success = false;

  submit() {
    if (this.form.valid) {
      const data = this.form.value;

      this.http.post('http://localhost:3000/api/contact', data).subscribe({
        next: () => {
          this.success = true;
          this.form.reset();
          this.form.markAsPristine();
          this.form.markAsUntouched();
          Object.keys(this.form.controls).forEach((key) => {
            this.form.get(key)?.setErrors(null);
          });
          alert("Podatki so uspešno poslani.");
        },
        error: (err) => {
          console.error('Napaka pri pošiljanju:', err);
          alert('Prišlo je do napake. Poskusite znova kasneje.');
        }
      });
    }
  }
}
