import { Component } from '@angular/core';

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {

  go_pay(){
    const verfcode = (document.getElementById('verfcode') as HTMLInputElement).value.toString();

    if (!verfcode) {
      alert("Please Enter Your verification code.") ;  }

    else {
      document.write("Redirecting to 'verify' page...");
      window.location.href = "pay"; 
    }  
}

resend(){
  alert("Verification code was resend successfully")
}

}
