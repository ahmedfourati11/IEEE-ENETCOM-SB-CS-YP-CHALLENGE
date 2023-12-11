import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cs-challenge-tsyp11';

  constructor( private router :Router) {

  }
 go_test(event : any){
  // location.replace("http://localhost:4200/test");
  this.router.navigate(['/test']);
 }
}
