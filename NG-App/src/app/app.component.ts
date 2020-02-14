import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG-App';

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

        let mockAdminUser = new User();
        mockAdminUser.username = 'admin';
        mockAdminUser.password = 'admin';
        mockAdminUser.firstName = 'Admin';

        let users = [];
        users.push(mockAdminUser);

        localStorage.setItem('users', JSON.stringify(users));

    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
