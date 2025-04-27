import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],

  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  userName: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser');
    console.log(loggedInUser);
    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser);
        console.log(user.name);
        if (user && user.name) {
          this.userName = user.name;
        }
      } catch (error) {
        console.error('Error parsing loggedInUser from localStorage:', error);
      }
    }
  }

  isUserLoggedIn(): boolean {
    console.log(this.userName);
    return !!this.userName;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.userName = '';
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
