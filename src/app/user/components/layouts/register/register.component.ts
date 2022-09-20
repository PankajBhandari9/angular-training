import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/user/models/register';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //method 1 check register model
  register: Register = new Register();
  //method 2
  // register: Register

  error: any = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerSubmit() {
    // console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.error={}
      },
      (err) => {
        console.log(JSON.stringify(err))
        this.error=err.error
      }
    )

  }

}
