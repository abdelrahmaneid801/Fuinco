import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitdata() {
    if (this.password.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?@$%^&*-]).{6,}$")
    ) {
      console.log(this.password)
      this.router.navigate(['/search']);


    } else {
      window.alert(" please check if  password at least 6 characters, at least 1 upper case, at least 1 lower case,at least 1 special character except ( / and !)")
    }
  }

}
