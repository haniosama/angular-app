import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],

  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  userName: string = '';

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser);
        if (user && user.name) {
          this.userName = user.name;
          console.log(`Logged in user: ${user.name}`);
        }
      } catch (error) {
        console.error('Error parsing loggedInUser from localStorage:', error);
      }
    }
  }

  isUserLoggedIn(): boolean {
    return !!this.userName;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.userName = '';
    console.log('User logged out');
  }
}
