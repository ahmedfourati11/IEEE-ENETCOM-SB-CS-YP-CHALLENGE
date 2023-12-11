import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  

  go_home() {
    location.replace("");
  }

  go_premium(){
    const email= (document.getElementById('email') as HTMLInputElement).value.toString();
    const mdp= (document.getElementById('mdp') as HTMLInputElement).value.toString();

    if  ( ! email || ! mdp) {
     alert("Please fill out all the fields in the form.") ;
    }
    else {     document.write("Redirecting to 'verify' page...");
              window.location.href = "premium";  }     }
  

}
