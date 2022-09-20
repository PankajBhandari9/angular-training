import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  login: any = {};

  ngOnInit(): void {
  }

  loginSubmit() {
    this.authService.loginUser(this.login).subscribe(
      (resp:any) => {
        console.log(JSON.stringify(resp));
        // we will get the token from backend
        localStorage.setItem('token', JSON.stringify(resp.token));
        // switch to dashboard component
        this.router.navigate(['/dashboard'])
      },
      (err:any) => {
        console.log(JSON.stringify(err));
        // Based on the failure part we provide the proper error message on the screen
      }
    )
  }

}
