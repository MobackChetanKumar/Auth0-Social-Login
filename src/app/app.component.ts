import { Component } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userLoggedIn = false;
  constructor(public auth: AuthService) {
    this.hideLoginButton();
  }
  loginWithRedirect(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();  
    this.hideLoginButton(); 
  }
  hideLoginButton() {
    this.auth.user$.subscribe((user) => 
    {
      if (user) {       
        this.userLoggedIn = true;
      }  else {
        this.userLoggedIn = false;
      }
    });
    
  }
  logout(): void {
    this.userLoggedIn = false;
    // Call this to log the user out of the application
    this.auth.logout({ returnTo: window.location.origin });
  }
  title = 'Welcome Kornferry D2T';
}
