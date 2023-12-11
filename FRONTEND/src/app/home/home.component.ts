import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


   constructor(private routes :Router){}

  go_test() {
    this.routes.navigate(["test"])
  }

  go_signin() {
    this.routes.navigate(["sign-in"])
  }

  go_signup() {
    this.routes.navigate(["sign-up"])
  }

}
