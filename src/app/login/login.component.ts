import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/accountservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(
    private router: Router,
    private accountServide: AccountService
  ) { }

  ngOnInit(): void {
  }

  login() {
    //this.router.navigate(['./home'])
    this.accountServide.login(this.model).subscribe( response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.loggedIn = false;
  }

}
