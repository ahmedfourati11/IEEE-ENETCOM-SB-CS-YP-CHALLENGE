import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  go_signin() {
    location.replace("sign-in");
  }

  go_signup() {
    location.replace("sign-up");
  }


}
