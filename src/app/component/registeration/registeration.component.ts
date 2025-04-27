import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registeration',
  imports: [FormsModule, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styles: ``,
})
export class RegisterationComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get validName() {
    return (
      this.registerForm.get('name')?.invalid &&
      this.registerForm.get('name')?.touched
    );
  }
  get validEmail() {
    return (
      this.registerForm.get('email')?.invalid &&
      this.registerForm.get('email')?.touched
    );
  }
  get validPassword() {
    return (
      this.registerForm.get('password')?.invalid &&
      this.registerForm.get('password')?.touched
    );
  }

  register() {
    if (this.registerForm.invalid) return;

    const { email, name, password } = this.registerForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(users);
    if (users.some((user: any) => user.email === email)) {
      alert('User already exists!');
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully!');
    this.router.navigate(['/login']);
  }
}
