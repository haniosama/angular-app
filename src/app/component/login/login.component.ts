import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FooterComponent, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  constructor(private router: Router) {}
  login(form: NgForm) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (user: any) =>
        user.email === form.value.email && user.password === form.value.password
    );

    if (user) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.router.navigate(['/home']);
    } else {
      alert('invalid user');
    }
  }
}
