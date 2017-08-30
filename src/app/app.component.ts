import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'S.A.P.P.';
  user;
  private isLoggedIn: Boolean;
  private userName: String;

 constructor(public authService: AuthenticationService) {
   this.authService.user.subscribe(user =>  {
     if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
     }
    //  console.log(user);
   });
 }

 login() {
   this.authService.login();
 }

 logout() {
   this.authService.logout();
 }
}
