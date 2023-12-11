import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

 

  go_home() {
    location.replace("");
  }

  go_test() {
    location.replace("test");
  }

  gohome(){
    const name = (document.getElementById('name') as HTMLInputElement).value.toString();
    const phnum= (document.getElementById('phnum') as HTMLInputElement).value.toString();
    const email= (document.getElementById('email') as HTMLInputElement).value.toString();
    const confirm= (document.getElementById('confirm') as HTMLInputElement).value.toString();
    const mdp= (document.getElementById('mdp') as HTMLInputElement).value.toString();

    if  (! name || ! phnum || ! email || ! confirm || ! mdp) {
     alert("Please fill out all the fields in the form.") ;
    }
    else {     document.write("Redirecting to 'verify' page...");
              window.location.href = "verify";  }     }
  




}
